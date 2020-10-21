const {   OPCUAClient,
    MessageSecurityMode, 
    SecurityPolicy,
    AttributeIds,
    makeBrowsePath,
    ClientSubscription,
    TimestampsToReturn,
    MonitoringParametersOptions,
    ReadValueIdLike,
    ClientMonitoredItem,
    DataValue }   = require("node-opcua");

const helpers = require('./helpers');

const opcServerConfig = {
                    endpointUrl  : "opc.tcp://10.214.6.29:49320",
                    userIdentity : {
                      userName: "Administrator",
                      password: "password"
                    }
};

const connectionStrategy = {
    initialDelay: 1000,
    maxRetry: 1
}

var monitors = [];
var session;
var subscription;
var opcClient;

async function monitor(nodeId, dataChanged){
  monitors.push({
    nodeId : nodeId,
    dataChanged : dataChanged
  });

  // step4 : install monitored items
  const itemToMonitor = {
    nodeId: "ns=2;s=" + nodeId,
    attributeId: AttributeIds.Value
  };

  const parameters = {
    samplingInterval: 100,
    discardOldest: true,
    queueSize: 10
  };

  const monitoredItem  = ClientMonitoredItem.create(
    subscription,
    itemToMonitor,
    parameters,
    TimestampsToReturn.Both
  );

  monitoredItem.on("changed", (dataValue) => {
    dataChanged(dataValue);
  });

};

async function initialize(){

  opcClient = OPCUAClient.create({
        applicationName: "TestFlow" + Math.random(),
        connectionStrategy: connectionStrategy,
        securityMode: MessageSecurityMode.None,
        securityPolicy: SecurityPolicy.None,
        endpoint_must_exist: false,
    });
    // step 1 : connect to 
    await opcClient.connect(opcServerConfig.endpointUrl);
    console.log("connected !");
  
    // step 2 : createSession
    session = await opcClient.createSession(opcServerConfig.userIdentity);
    console.log("session created !");
  
    // step 3 : createSubscription
    subscription = await session.createSubscription2({
      requestedPublishingInterval: 20,
      requestedMaxKeepAliveCount: 20,
      requestedLifetimeCount: 6000,
      maxNotificationsPerPublish: 1000,
      publishingEnabled: true,
      priority: 10
    });
  
    subscription.on("keepalive", function () {

    }).on("terminated", function () {

    });
};

async function read(nodeId){

  if(nodeId.indexOf('ns=') === -1){
    nodeId = "ns=2;s=" + nodeId;
  }
  
  let result = await session.readVariableValue(nodeId);
  await helpers.wait(500);
  return result;
}

async function write(nodeId, dataType, value){

  if(nodeId.indexOf('ns=') === -1){
    nodeId = "ns=2;s=" + nodeId;
  }

  var nodesToWrite = [
    {
      nodeId: nodeId,
      attributeId: AttributeIds.Value,
      value: {
        value: {
          dataType: dataType,
          value: value
        }
      }
    }
  ];

  await session.write(nodesToWrite);
  await helpers.wait(1000);
};
  
module.exports = {
    initialize    : initialize,
    monitor       : monitor,
    write         : write,
    read          : read
}
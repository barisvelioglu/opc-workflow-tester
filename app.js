var createError       = require('http-errors');
var express           = require('express');
var path              = require('path');
var cookieParser      = require('cookie-parser');
var logger            = require('morgan');
var indexRouter       = require('./routes/index');
var testRouter        = require('./routes/test');
var socketIO          = require("socket.io");
var async             = require('async');
var opcClient         = require('./opc-client');
const { DataType }    = require('node-opcua');
var steps             = require('./test-steps');
var resetNodeValues   = require('./reset-node-values');
var helpers           = require('./helpers');
var JSONdb            = require('simple-json-db');
var moment            = require('moment');
var                   _ = require('lodash');

var app               = express();
var port              = 3000;
var currentSteps      = undefined
var currentTestDb     = undefined;

var stepCounter = 1;
steps.forEach(s => {
  s.StepNo = stepCounter++;
});

console.log("--- steps ---");
console.log(steps);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.render('index', { title: 'CNC Test', steps : currentSteps || [] });
});

app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const io = socketIO.listen(app.listen(port));

io.sockets.on('connection', function (client) {
  
  for (let index = 0; index < steps.length; index++) {
    const step = steps[index];

    client.on(step.StepNo, async function(data){
      if(step.NodesToSendValue){
        for (let i = 0; i < step.NodesToSendValue.length; i++) {
          const nodeInfo = step.NodesToSendValue[i];
          await opcClient.write(nodeInfo.NodeId, nodeInfo.NodeDataType, nodeInfo.NodeDesiredValue);
        }
      }
    });
  }

  client.on('start-test', async function(data){
    currentSteps     = require('./test-steps');
    let fileDateName = moment().format("DDMMYYYYThhmmss");
    currentTestDb = new JSONdb('./tests/'+fileDateName+'.json');
    
    for (let i = 0; i < currentSteps.length; i++) {
      const s = currentSteps[i];

      if(i == 0){
        s.State = "Active";
      }else{
        s.State = "Waiting";
      }
    }

    currentTestDb.set('state', currentSteps);

    await helpers.wait(2000);

    for (let i = 0; i < resetNodeValues.length; i++) {
      let el = resetNodeValues[i];

      let readData = await opcClient.read(el.nodeId);
      
      io.sockets.emit("nodeValueChange", {
        value: readData.value.value,
        nodeId: el.nodeId
      });  
    }

    for (let i = 0; i < resetNodeValues.length; i++) {
      const el = resetNodeValues[i];
      await opcClient.write(el.nodeId, el.dataType, el.value);      
    }
  });
  
});

function checkAndSetStates(nodeId, value){
  //Active Waiting Succeed
  //check all states and make succeed or not
  for (var xx = 0; xx < currentSteps.length; xx++) {
    var cs = currentSteps[xx];

    //check all values for currentState
    if(cs.NodesToCheckValue){
      let isSucceed = true;
      for (let ii = 0; ii < cs.NodesToCheckValue.length; ii++) {
        let node = cs.NodesToCheckValue[ii];
        
        if(node.NodeId == nodeId){
          node.NodeCurrentValue = value;
        }

        if(node.NodeDesiredValue != node.NodeCurrentValue){
          isSucceed = false;
        }
      }
      
      if(isSucceed){
        cs.State = "Succeed";
      }else{
        cs.State = "Waiting"
      }

      //burada step sonucu gönderilebilir gibi duruyor direkt 
      //ui da hesap yapılmasına gerek olmaz
      io.sockets.emit("step", {
        nodeId: nodeId,
        stepNo: cs.StepNo,
        state : cs.State
      });
      
    }

    //check all values for currentState
    if(cs.NodesToSendValue){
      let isSucceed = true;
      for (let ii = 0; ii < cs.NodesToSendValue.length; ii++) {
        let node = cs.NodesToSendValue[ii];
        
        if(node.NodeId == nodeId){
          node.NodeCurrentValue = value;
        }

        if(node.NodeDesiredValue != node.NodeCurrentValue){
          isSucceed = false;
        }
      }
      
      if(isSucceed){
        cs.State = "Succeed";
      }else{
        cs.State = "Waiting"
      }

      io.sockets.emit("step", {
        nodeId: nodeId,
        stepNo: cs.StepNo,
        state : cs.State
      });
      
    }
  }

  currentTestDb.set('state', currentSteps);
}

(async function init(){
  await opcClient.initialize();

  for (let index = 0; index < steps.length; index++) {
    const step = steps[index];

    if(step.NodesToCheckValue){
      for (let y = 0; y < step.NodesToCheckValue.length; y++) {
        const el = step.NodesToCheckValue[y];
        await helpers.wait(250);

        await opcClient.monitor(el.NodeId, function(data){
          
          checkAndSetStates(el.NodeId, data.value.value);

          io.sockets.emit("nodeValueChange", {
            value: data.value.value,
            timestamp: data.serverTimestamp,
            nodeId: el.NodeId
          });

        });
      }
    }

    if(step.NodesToSendValue){
      for (let x = 0; x < step.NodesToSendValue.length; x++) {
        const el = step.NodesToSendValue[x];
        await helpers.wait(250);
        await opcClient.monitor(el.NodeId, function(data){

          checkAndSetStates(el.NodeId, data.value.value);

          io.sockets.emit("nodeValueChange", {
            value: data.value.value,
            timestamp: data.serverTimestamp,
            nodeId: el.NodeId
          });

        });
        
      }
    }

  }

}());

module.exports = app;
var createError       = require('http-errors');
var express           = require('express');
var path              = require('path');
var cookieParser      = require('cookie-parser');
var logger            = require('morgan');
var testRouter        = require('./routes/test');
var socketIO          = require("socket.io");
var opcClient         = require('./opc-client');
var tests             = require('./test');
var helpers           = require('./helpers');
var _                 = require('lodash');

var app               = express();
var port              = 6100;
var workflows          = [];

for (let key in tests) {
  let test = tests[key];

  workflows.push({
    name        : key,
    image       : test.Image,
    description : test.Description 
  });

  for (let i= 1; i <= test.TestSteps.length; i++) {
    test.TestSteps[i -1].StepNo = i;
  }

  app.get('/' + key, function(req, res, next){
    res.render('test', { pageTitle: key + ' WORKFLOW', testSteps : test.TestSteps, testName: key });
  });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
  res.render('index', { title: 'WORKFLOWS', workflows: workflows });
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
  
  for (let key in tests) {
    let test = tests[key];

    //todo
    for (let index = 0; index < test.TestSteps.length; index++) {
      let step = test.TestSteps[index];
      
      if(step.NodesToSendValue){
        
        client.on(key + "_" + step.StepNo, async function(data){
        
          for (let i = 0; i < step.NodesToSendValue.length; i++) {
            const nodeInfo = step.NodesToSendValue[i];
            await opcClient.write(nodeInfo.NodeId, nodeInfo.NodeDataType, nodeInfo.NodeDesiredValue);
          }

        });
      }
    }
  }

  client.on('start-test', async function(data){

    for (let key in tests) {

      if(key == data.testName){
        
        let test = tests[key];

        for (let i = 0; i < test.TestSteps.length; i++) {
          let s = test.TestSteps[i];
    
          if(i == 0){
            s.State = "Active";
          }else{
            s.State = "Waiting";
          }
        }
    
        await helpers.wait(2000);
    
        for (let i = 0; i < test.ResetNodeValues.length; i++) {
          let el = test.ResetNodeValues[i];
    
          let readData = await opcClient.read(el.nodeId);
          
          io.sockets.emit(key + "_nodeValueChange", {
            value: readData.value.value,
            nodeId: el.nodeId
          });  
        }
    
        for (let i = 0; i < test.ResetNodeValues.length; i++) {
          let el = test.ResetNodeValues[i];
          await opcClient.write(el.nodeId, el.dataType, el.value);      
        }

      }else{
        //discard
      }
    }

  });
  
});

function checkAndSetStates(key, nodeId, value){
  //Active Waiting Succeed
  //check all states and make succeed or not
  for (let xx = 0; xx < tests[key].TestSteps.length; xx++) {
    let cs = tests[key].TestSteps[xx];

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
      io.sockets.emit(key+ "_step", {
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

      io.sockets.emit(key+ "_step", {
        nodeId: nodeId,
        stepNo: cs.StepNo,
        state : cs.State
      });
      
    }
  }
}

(async function init(){
  await opcClient.initialize();

  for (let key in tests) {
    
    var test = tests[key];

    for (let index = 0; index < test.TestSteps.length; index++) {
      let step = test.TestSteps[index];
  
      if(step.NodesToCheckValue){
        for (let y = 0; y < step.NodesToCheckValue.length; y++) {
          let el = step.NodesToCheckValue[y];
          await helpers.wait(100);
  
          await opcClient.monitor(el.NodeId, function(data){
            
            checkAndSetStates(key, el.NodeId, data.value.value);
  
            io.sockets.emit(key + "_nodeValueChange", {
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
          await helpers.wait(100);
          await opcClient.monitor(el.NodeId, function(data){
  
            checkAndSetStates(key, el.NodeId, data.value.value);
  
            io.sockets.emit(key + "_nodeValueChange", {
              value: data.value.value,
              timestamp: data.serverTimestamp,
              nodeId: el.NodeId
            });
  
          });
          
        }
      }

    }
  }

}());

module.exports = app;
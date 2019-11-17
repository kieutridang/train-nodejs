var express = require('express');
var router = express.Router();

var taskList = [];

/* POST task to array */
router.post('/addtask', function(req, res, next) {
  var item = req.body.item;
  taskList.push({taskName: item, taskId: Date.now(), isDone: 'false'});
  res.redirect('/');
});

/* GET all tasks */
router.get('/getalltasks', function(req, res, next) {
  res.send({taskList});
});

/* GET specific task by ID*/
router.post('/searchtask', function(req, res, next) {
  console.dir(req.body.id);
  var searchId = req.body.id;
  for (var i=0; i<taskList.length; i++) {
    if (taskList[i].taskId == searchId) {
      var taskFound = taskList[i].taskName;
      res.send('Task found: ' + taskFound);
    };
  };
  res.send('No task found !!!');
});

module.exports = router;
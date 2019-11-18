var express = require('express');
var router = express.Router();

var taskList = [];

/* POST task to array */
router.post('/add-task', function(req, res, next) {
  var item = req.body.item;
  taskList.push({taskName: item, taskId: Date.now(), isDone: 'false'});
  res.redirect('/');
});

/* GET all tasks */
router.get('/get-all-tasks', function(req, res, next) {
  res.send({taskList});
});

/* GET specific task by ID*/
router.get('/search-task-by-id', function(req, res, next) {
  const taskFound = taskList.find( task => task.taskId == req.query.taskId);
  res.send('Task found: ' + taskFound.taskName);
});

module.exports = router;
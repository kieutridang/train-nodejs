var express = require('express');
var router = express.Router();

var taskList = [];

/* POST task to array */
router.post('/addtask', function(req, res, next) {
  var item = req.body.item;
  taskList.push({taskName: item, taskId: Date.now(), isDone: 'false'});
  res.redirect('/');
});

/* GET task */
router.get('/', function(req, res, next) {
  res.render('tasklist', { taskList: taskList });
});

module.exports = router;
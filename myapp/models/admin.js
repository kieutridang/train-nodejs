var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  username:  String,
  password: String,
  level:   Number,
  accessToken: String,
});

var Admin = mongoose.model('admin', adminSchema);

module.exports = Admin
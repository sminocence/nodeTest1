var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    user: String,
    content: String
});

var comment = mongoose.model('comment',commentSchema);
module.exports = comment;
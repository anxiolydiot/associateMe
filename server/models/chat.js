
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var chatSchema  = new Schema({
  moderator: {type: Schema.Types.ObjectId, ref: 'User'},
  itemLink: String,
  commentMsg: String
});

var Comment= mongoose.model('Comment',commentSchema);
module.exports = Comment;
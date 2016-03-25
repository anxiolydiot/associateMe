var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var userSchema = ({
  username: String,
  password: String,
  roomsCreated : [{
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  }],
  date: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
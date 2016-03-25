
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var chatSchema  = new Schema({
  moderator: {type: Schema.Types.ObjectId, ref: 'User'},
  name: String,
  topic:  String,
  commentMsg: String,
  date: { type: Date, default: Date.now }
});



userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

var Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
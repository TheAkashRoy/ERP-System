const {model, Schema} = require("mongoose")

const userSchema = new Schema({
    userid: String,
    username: String,
    password: String,
}
);

const users = model('users', userSchema);

module.exports = users;

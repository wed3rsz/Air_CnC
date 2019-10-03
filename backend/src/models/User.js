const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //Define cada tipo de arquivo
    email: String,

});

module.exports = mongoose.model('User', UserSchema);
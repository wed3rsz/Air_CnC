const mongoose = require('mongoose');
//Insere o mongoose para inserção no banco de dados

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //Faz um retorno referente ao usuário
    },
    spot: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Spot',
        //Faz um retorno referente ao spot
    }
});

module.exports = mongoose.model('Booking', BookingSchema);
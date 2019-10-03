const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    //Define cada tipo de arquivo
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    toJSON: {
        virtuals : true,
    },
});


    //faz com que a imagem seja retornada para o usuário no dashboard
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);
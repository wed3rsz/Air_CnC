const User = require('../models/User');
//Insere o model User
const Spot = require('../models/Spot');
//Insere o model Spot



module.exports = {
    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

    async store(req,res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;


        const user = await User.findById(user_id);

        if (!user) {
            //Retorna o erro 400 informando que o usuário não existe
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        })


        return res.json(spot)
    }
};
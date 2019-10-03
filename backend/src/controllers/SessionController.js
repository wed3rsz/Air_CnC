const User = require('../models/User');
//Insere o model User

module.exports = {
    //async funciona com o await, para que o sistema espere a requisição do usuário
    async store(req, res){
        const { email }  = req.body;

        let user = await User.findOne({
            email
        });

        if (!user){
        const user = await User.create({
            email
        });
        }

        

        return res.json(user);
    }
};
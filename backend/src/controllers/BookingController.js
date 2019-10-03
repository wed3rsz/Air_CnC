const Booking = require('../models/Booking');
//Insere o model Booking


module.exports = {
    async store(req, res){

        //Busca o id do usuário e o id do spot, trazendo a data também
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();



        return res.json(booking);
    }
};
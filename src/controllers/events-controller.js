const mongoose = require('mongoose');
const Events = mongoose.model('Events');

exports.listEvents = async (req,res) => {
    try {
        const data = await Events.find({});
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar os eventos.' });
    };
}

exports.createEvent = async (req,res) => {
    try {
        const event = new Events({
            name: req.body.name,
            nivel: req.body.nivel
        });

        await event.save();
        res.status(201).send({ message: 'Evento cadastrado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar o evento.' });
    };
}
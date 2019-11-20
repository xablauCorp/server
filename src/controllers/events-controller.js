const mongoose = require('mongoose');
const Events = mongoose.model('Events');
const repository = require('../repositories/events-repository');


exports.listEvents = async (req,res) => {
    try {
        const data = await repository.listEvents();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar os eventos.' });
    };
}

exports.createEvent = async (req,res) => {
    try {
        await repository.createEvent({
            name: req.body.name,
            nivel: req.body.nivel
        });
        res.status(201).send({ message: 'Evento cadastrado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar o evento.' });
    };
}
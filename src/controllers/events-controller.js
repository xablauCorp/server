const { validationResult } = require('express-validator');
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
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

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

exports.updateEvent = async (req,res) => {
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

    try {
        await repository.updateEvent(req.params.id,req.body);
        res.status(200).send({
            message: 'Evento atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar o evento.' });
    };
}

exports.deleteEvent = async (req,res) => {
    try {
        await repository.deleteEvent(req.params.id);
        res.status(200).send({
            message: 'Evento removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao remover o evento.' });
    };
}
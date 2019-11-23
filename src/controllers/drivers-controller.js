const { validationResult } = require('express-validator');
const repository = require('../repositories/drivers-repository');


exports.listDrivers = async (req,res) => {
    try {
        const data = await repository.listDrivers();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar os motoristas.' });
    };
}

exports.getByMatricula = async (req,res) => {
    try {
        const data = await repository.getByMatricula(req.body.matricula);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar o motorista.'});
    };
}

exports.createDriver = async (req,res) => {
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

    try {
        await repository.createDriver({
            name: req.body.name,
            matricula: req.body.matricula
        });
        res.status(201).send({ message: 'Motorista cadastrado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar o motorista.' });
        console.log(e);
    };
}

exports.updateDriver = async (req,res) => {
    const { errors } = validationResult(req);
    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

    try {
        await repository.updateDriver(req.params.id,req.body);
        res.status(200).send({
            message: 'Motorista atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar o motorista.' });
    };
}

exports.deleteDriver = async (req,res) => {
    try {
        await repository.deleteDriver(req.params.id);
        res.status(200).send({
            message: 'Motorista removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao remover o motorista.' });
    };
}
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const driversController = require('../controllers/drivers-controller');

router.get('/',driversController.listDrivers);
router.get('/:matricula',driversController.getByMatricula);
router.post('/',[
  check('name').isLength({ min: 5 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
  check('matricula').isLength({ min: 3 }).withMessage("A matricula precisa ter no mínimo 3 caracteres.")
],driversController.createDriver);
router.put('/:id',driversController.updateDriver);
router.delete('/:id',driversController.deleteDriver);

module.exports = router;
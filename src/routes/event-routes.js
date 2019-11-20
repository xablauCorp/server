const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const eventsController = require('../controllers/events-controller');

router.get('/',eventsController.listEvents);
router.post('/',[
  check('name').isLength({ min: 5 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
  check('nivel').isLength({ min: 3 }).withMessage("O nivel precisa ter no mínimo 3 caracteres.")
],eventsController.createEvent);
router.put('/:id',eventsController.updateEvent);
router.delete('/:id',eventsController.deleteEvent);

module.exports = router;
const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events-controller');

router.get('/',eventsController.listEvents);
router.post('/',eventsController.createEvent);

module.exports = router;
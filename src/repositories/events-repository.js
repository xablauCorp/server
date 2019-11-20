const mongoose = require('mongoose');
const Events = mongoose.model('Events');

exports.listEvents = async () => {
  const response = await Events.find({},'name nivel -_id');
  return response
}

exports.createEvent = async data => {
  const event = new Events(data);
  await event.save();
}
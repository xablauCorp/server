const mongoose = require('mongoose');
const Events = mongoose.model('Events');

exports.listEvents = async () => {
  const response = await Events.find({},'name nivel');
  return response
}

exports.createEvent = async data => {
  const event = new Events(data);
  await event.save();
}

exports.updateEvent = async (id,data) => {
  await Events.findByIdAndUpdate(id,{
    $set: data
  });
};

exports.deleteEvent = async id => {
  await Events.findOneAndRemove(id);
};
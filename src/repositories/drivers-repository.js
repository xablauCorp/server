const mongoose = require('mongoose');
const Drivers = mongoose.model('Drivers');

exports.listDrivers = async () => {
  const response = await Drivers.find({},'name matricula');
  return response
}

exports.getByMatricula = async matricula => {
  const response = await Drivers.findOne({matricula}, 'name matricula')
  return response
}

exports.createDriver = async data => {
  const driver = new Drivers(data);
  await driver.save();
}

exports.updateDriver = async (id,data) => {
  await Drivers.findByIdAndUpdate(id,{
    $set: data
  });
};

exports.deleteDriver = async id => {
  await Drivers.findOneAndRemove(id);
};
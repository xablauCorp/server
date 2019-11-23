const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  matricula: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Drivers',schema);

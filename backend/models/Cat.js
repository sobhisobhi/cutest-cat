const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  id: {
    String,
    unique: true,
  },
  url: String,
  score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Cat', catSchema);
// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  name: String,
  skills: [String],
  experience: Number,
  role: { type: String, enum: ['candidate', 'employer'], default: 'candidate' },
});

module.exports = mongoose.model('User', UserSchema);

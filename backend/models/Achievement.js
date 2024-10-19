// backend/models/Achievement.js
const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  dateAchieved: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Achievement', AchievementSchema);

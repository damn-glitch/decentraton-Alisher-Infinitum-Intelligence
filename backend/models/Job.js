// backend/models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  skillsRequired: [String],
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isRemote: Boolean,
  salaryRange: {
    min: Number,
    max: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);

const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  student:    { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  internship: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship' },
  status:     { type: String, enum: ['pending','shortlisted','rejected','selected'], default: 'pending' },
  matchScore: Number,

  // faculty progress tracking
  progressNotes: [{
    week:    Number,
    note:    String,
    percent: Number,
    date:    { type: Date, default: Date.now }
  }],
  overallProgress: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
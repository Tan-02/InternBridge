const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    internshipId: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship' },
    weeklyReport: String,
    facultyRemark: String
});

module.exports = mongoose.model('Progress', progressSchema);
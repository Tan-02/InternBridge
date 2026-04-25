const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
    title: { type: String, required: true },
    companyName: String,
    description: String,
    skills: [String],
    duration: String,
    stipend: Number,
    mode: { type: String, enum: ['Remote', 'On-site', 'Hybrid'] },
    seats: Number,
    minCGPA: Number,
    status: { type: String, enum: ['open', 'closed'], default: 'open' }
}, { timestamps: true });

module.exports = mongoose.model('Internship', InternshipSchema);
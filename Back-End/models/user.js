const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['student','faculty','company','admin'], required: true },
  
  rollNumber:  String,
  department:  String,
  year:        Number,
  cgpa:        Number,
  skills:      [String],
  bio:         String,
  linkedin:    String,
  github:      String,


  companyName: String,
  sector:      String,
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
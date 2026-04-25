const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const connectDB = require('./config/db');
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const authRoutes        = require('./Routes/auth');
const internshipRoutes  = require('./Routes/internship');
const applicationRoutes = require('./Routes/application');
const progressRoutes    = require('./Routes/progress');

app.use('/auth',         authRoutes);
app.use('/internships',  internshipRoutes);
app.use('/applications', applicationRoutes);
app.use('/progress',     progressRoutes);

app.get('/', (req, res) => {
    res.send('Internship Platform Backend Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
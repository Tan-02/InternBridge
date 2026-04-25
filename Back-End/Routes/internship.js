const express = require('express');
const router = express.Router();
const Internship = require('../models/internship');

router.post('/add', async (req, res) => {
    try {
        const internship = new Internship(req.body);
        await internship.save();
        res.status(201).json({ message: 'Internship added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
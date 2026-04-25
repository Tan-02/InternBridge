const express = require('express');
const router = express.Router();
const Application = require('../models/application');

router.post('/apply', async (req, res) => {
    try {
        const application = new Application(req.body);
        await application.save();
        res.status(201).json({ message: 'Application submitted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const applications = await Application.find();
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
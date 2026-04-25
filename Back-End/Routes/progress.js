const express = require('express');
const router = express.Router();
const Progress = require('../models/progress');

router.post('/update', async (req, res) => {
    try {
        const progress = new Progress(req.body);
        await progress.save();
        res.status(201).json({ message: 'Progress updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const progress = await Progress.find();
        res.json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();

let ActiveAction = process.env.ACTIVE_ACTION || "IDEL"; // Default value if not set in environment variable
let AudioList = {};

router.get('/Action', async (req, res) => {
    try {
        res.send(ActiveAction);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while retrieving Action data.' });
    }
});

router.post('/Action', async (req, res) => {
    try {
        const { Action } = req.body;
        if (!Action) {
            return res.status(400).json({ error: 'Invalid request. "Action" is required.' });
        }
        ActiveAction = Action;
        console.log('Updated Action:', ActiveAction);
        res.send(ActiveAction);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while processing Action update.' });
    }
});

router.get('/AudioList', async (req, res) => {
    try {
        res.json(AudioList);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while retrieving AudioList.' });
    }
});

module.exports = router;

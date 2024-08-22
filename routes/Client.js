const express = require('express');
const router = express.Router();

let ActiveAction = process.env.ACTIVE_ACTION || "IDEL"; // Default value if not set in environment variable
let AudioList = {};
let PreFabList = {
    prefab1 : "https://firebasestorage.googleapis.com/v0/b/cofidento.appspot.com/o/assetbundles%2Fprefab1.unity3d?alt=media&token=56b5e13e-dde9-422f-8917-0a8743145715",
    prefab2 : "https://firebasestorage.googleapis.com/v0/b/cofidento.appspot.com/o/assetbundles%2Fprefab2.unity3d?alt=media&token=1caec41f-d5a8-4521-ae01-930f00daa10f",
    prefab3 : "https://firebasestorage.googleapis.com/v0/b/cofidento.appspot.com/o/assetbundles%2Fprefab1.unity3d?alt=media&token=56b5e13e-dde9-422f-8917-0a8743145715",
};
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

router.get('/GetPrefab', async (req, res) => {
    try {
        res.json(PreFabList);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while retrieving PreFabList.' });
    }
});

router.get('/CurrentPrefab', async (req, res) => {
    try {
        res.send("2");
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while retrieving PreFabList.' });
    }
});
module.exports = router;

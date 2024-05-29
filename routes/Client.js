const express = require('express');
const router = express.Router();


let ActiveAction = "IDEL";
let AudioList = {};



router.get('/Action', async (req, res) => {
    try {
        res.send(ActiveAction);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while generating content.' });
    }
});
router.post('/Action', async (req, res) => {
    try {
        
        const temp = req.body.Action;
        ActiveAction = temp;
        console.log(ActiveAction);
        res.send(ActiveAction);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while generating content.' });
    }
});

router.get('/AudioList', async (req, res) => {
    try {
        res.json(AudioList);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while generating content.' });
    }
});


module.exports = router;

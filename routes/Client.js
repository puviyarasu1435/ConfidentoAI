const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
var ActiveAction = "IDEL";
let AudioList = {};

const readData = () => {
    const filePath = path.join(__dirname, 'data.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

router.get('/Action', async (req, res) => {
    try {
        const data = readData();
        res.json(data);
        //res.send(ActiveAction);
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

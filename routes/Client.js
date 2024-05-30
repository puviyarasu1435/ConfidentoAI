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

const writeData = (newData) => {
    const filePath = path.join(__dirname, 'data.json');
    try {
        // Read existing data
        const existingData = readData();
        // Update existing data with new data
        const updatedData = { ...existingData, ...newData };
        // Write updated data back to file
        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing file:', error.message);
        throw error;
    }
};

router.get('/Action', async (req, res) => {
    try {
        const data = readData();
        res.send(data["Action"]);
        //res.send(ActiveAction);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while generating content.' });
    }
});
router.post('/Action', async (req, res) => {
    try {
        const { Action } = req.body;
        if (!Action) {
            return res.status(400).json({ error: 'Invalid request. "Action" is required.' });
        }
        const newData = { Action };
        writeData(newData);
        console.log('Updated data:', newData);
        res.send(Action);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
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

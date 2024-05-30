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

const writeData = (data) => {
    const filePath = path.join(__dirname, 'data.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
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
        const temp = req.body.Action;
        if (!temp) {
            return res.status(400).json({ error: 'Invalid request. "Action" is required.' });
        }
        const data = await readData();
        data["Action"] = temp;
        await writeData(data);
        console.log(data);
        res.send(temp);
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

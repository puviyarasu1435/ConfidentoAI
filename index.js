const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const GeminiAIRoutes = require('./routes/Gemini');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/submit', (req, res) => {
    res.send("hellow");
});


app.use('/AI', GeminiAIRoutes);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

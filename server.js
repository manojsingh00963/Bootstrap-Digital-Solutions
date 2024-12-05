const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Replace with the Web App URL from Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_tKvITVCAEJSdWMVeb8qR9MqYuR_cUwQcTJ29RINBCK8GH5GHl2kk_88uGU9PanD7og/exec';

app.post('/submit', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        // Send data to Google Apps Script
        await axios.post(GOOGLE_SCRIPT_URL, { name, email, age });
        res.send('<h1>Thank you! Your details have been submitted.</h1>');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting data.');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

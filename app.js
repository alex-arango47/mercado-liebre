const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')));

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});


app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
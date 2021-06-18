


const express = require('express');

const myData = require('./data');
const art = require('./user');
let port = process.env.PORT || 8000;
const app = express();


// Initialize App


// Assign route
app.get('/', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = myData.filter(user => {
        let isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredUsers);
});

app.get('/user', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = art.filter(user => {
        let isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredUsers);
});

// Start server on PORT 5000
app.listen(port, () => {
    console.log('Server started!');
    // console.log()
});
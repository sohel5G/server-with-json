
const myExpress = require('express');
const phones = require('./phones.json');
const myApp = myExpress();
const myPort = 500;

myApp.get('/', (req, res) => {
    res.send('My phone information coming soonnnnn');
});

myApp.get('/phones', (req, res) => {
    res.send(phones);
})

myApp.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phoneId => phoneId.id === id) || {};
    res.send(phone);
    // console.log(phone);
})

myApp.get('/about', (req, res) => {
    res.send('This is about page chnagesssssss');
})

myApp.listen(myPort, () => {
    console.log(`My phone server running on port ${myPort}`)
});







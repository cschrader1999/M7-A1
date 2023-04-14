const express = require('express');
const router = express.Router();
const data = require('./data.json');
const loans = require('./loans.json');

router.get('/', (req, res) => {
    res.render('index', { data: data});
});

router.get('/loans', (req, res) => {
    res.render('loans', { loans: loans});
});


module.exports = router;
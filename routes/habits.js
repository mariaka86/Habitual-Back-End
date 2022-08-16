/**
 * @file habits.js
 * @description route for habit related requests
 */
const express = require('express');
const router = express.Router();

router.get('/habits', (req, res) => {
    res.send('Hello World');
});

module.exports = router;
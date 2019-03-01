/**
 * Require all modules and dependencies at the top
 */
const express = require('express');
const app = express();

/**
 * Express use
 */
app.use((request,response,next) => {
    response.status(200).json({
        message: 'We are live!'
    });
});

module.exports = app;
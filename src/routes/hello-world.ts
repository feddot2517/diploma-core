import express = require('express');

export function helloWorldRoute(app: express.Application) {
    app.get('/', (req, res) => {
        res.send('<h1>Hello, world!</h1>');
    });
}

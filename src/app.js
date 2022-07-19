const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const tokenService = require('./services/tokenService');

const app = express();

app.use(bodyParser.json());

const usersRouter = require('./routers/userRouter');
// app.use(tokenService.validate);
app.use('/conta', usersRouter);

app.use((err, _req, res, _next) => {
    const { name, message}  = err;
    switch (name) {
        case 'UnauthorizedError':
            res.status(401).json({message});            
            break; 
        case 'NotFoundError':
            res.status(404).json({ message });
            break;   
        default:
            res.status(500).json({message});
            break;
    };
});

module.exports = app;
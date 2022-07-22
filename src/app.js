const express = require('express');
require('express-async-errors');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const usersRouter = require('./routers/userRouter');
const investmentsRouter = require('./routers/investmentsRouter');

app.use('/conta', usersRouter);
app.use('/investimentos', investmentsRouter);
app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

app.use((err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
        case 'UnauthorizedError':
            res.status(401).json({ message });            
            break; 
        case 'NotFoundError':
            res.status(404).json({ message });
            break;   
        default:
            res.status(500).json({ message });
            break;
    }
});

module.exports = app;
const express = require('express');
require('express-async-errors');

const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerOutput = require('./docs/swagger-output.json');
const usersRouter = require('./routers/userRouter');
const investmentsRouter = require('./routers/investmentsRouter');

const app = express();
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.use('/conta', usersRouter);
app.use('/ativos', investmentsRouter);

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

app.use((err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
        case 'UnauthorizedError': case 'ValidationError':
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
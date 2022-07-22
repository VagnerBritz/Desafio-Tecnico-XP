const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'API XP - Teste Técnico',
        description: `Api que simula operações básicas de conta corrente (saque e depósito), 
        e de corretora de investimentos (compra e venda de ações).`,
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
          name: 'Conta',
          description: 'Endpoints para gerenciamento de conta.',
        },
        {
          name: 'Investimentos',
          description: 'Endpoints para consultar, comprar e vender ações.',
        },
  ],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'authorization',
            description: 'token de autenticação',
        },
    },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../app.js'];
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    // eslint-disable-next-line global-require
    require('../index');
});
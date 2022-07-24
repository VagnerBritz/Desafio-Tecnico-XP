require('dotenv/config');
const jwt = require('jsonwebtoken');
const err = require('../error');

const tokenService = {

    create: (data) => {
        const token = jwt.sign({ data }, process.env.JWT_SECRET, {
            expiresIn: '1d',
            algorithm: 'HS256',
          });

        return token;
    },

    validate: (token) => {
        try {
            const { data } = jwt.verify(token, process.env.JWT_SECRET);
            return data;            
        } catch (error) {
          throw new err.UnauthorizedError('Token inválido ou não enviado!');            
        }
    },

    getUserId: (token, codCliente) => {
        const data = tokenService.validate(token);
        if (data.id !== Number(codCliente)) {
          throw new err.UnauthorizedError('Você não tem permissão para essa conta');
        }
        return data.id;
    },
};

module.exports = tokenService;
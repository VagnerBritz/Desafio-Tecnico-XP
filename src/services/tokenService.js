require('dotenv/config');
jwt = require('jsonwebtoken');

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
            const { data } =  jwt.verify(token, process.env.JWT_SECRET);
            return data;
            
        } catch (err) {
            const error = new Error('Token not found');
            error.name = 'UnauthorizedError';
            throw error;
        };
    },
};

module.exports = tokenService;
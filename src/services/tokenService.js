require('dotenv/config');
const jwt = require('jsonwebtoken');

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
        } catch (err) {
            const error = new Error('Token not found');
            error.name = 'UnauthorizedError';
            throw error;
        }
    },

    getUserId: (token) => {
        const data = tokenService.validate(token);
        return data.id;
    },
};

module.exports = tokenService;
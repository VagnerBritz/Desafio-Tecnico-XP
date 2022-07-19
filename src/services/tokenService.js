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
};

module.exports = tokenService;
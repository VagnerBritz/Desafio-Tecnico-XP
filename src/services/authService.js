const db = require('../database/models');
const tokenService = require('./tokenService');
 
const authServices = {
  
 login: async (email, password) => {
    const user = await db.User.findOne({ where: { email } });
    if (!user || password !== user.password) {
      const error = new Error('E-mail does not exist or password is invalid!');
      error.name = 'UnauthorizedError';
      throw error;
    }

    const data = { email: user.email, id: user.id };
    const token = tokenService.create(data);

    return token;
  },
  
};

module.exports = authServices;
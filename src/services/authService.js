const db = require('../database/models');
 
const authServices = {
 login: async (email, password) => {
    const user = await db.User.findOne({ where: { email },});
    if (!user || password !== user.password) {
      const error = new Error('E-mail does not exist or password is invalid!');
      error.name = 'UnauthorizedError';
      throw error;
    };
    return true;
  },
};

module.exports = authServices;
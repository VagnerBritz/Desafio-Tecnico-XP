const bcrypt = require('bcrypt');
const db = require('../database/models');
const tokenService = require('./tokenService');
const err = require('../error');

const authServices = {
  
 login: async (email, password) => {
    const user = await db.User.findOne({ where: { email, active: true } });
    if (!user) {
      throw new err.UnauthorizedError('E-mail ou senha incorreta');
    }
    const validPassword = await bcrypt.compare(password, user.password); 
    if (!validPassword) {
      throw new err.UnauthorizedError('E-mail ou senha incorreta');
    }
    const data = { email: user.email, id: user.id };
    const token = tokenService.create(data);

    return token;
  },
  
  encrypt: async (password) => {
  const salt = await bcrypt.genSalt(10);
return bcrypt.hash(password, salt); 
},
  
};

module.exports = authServices;
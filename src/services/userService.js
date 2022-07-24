const db = require('../database/models');
const authServices = require('./authService');
const err = require('../error');
const util = require('./util');

const userServices = {

 getBalance: async (id) => {
    const account = await db.Account.findByPk(id);
    if (!account) {
      throw new err.NotFoundError('Conta não encontrada!');
    }      
    let { userId, balance } = account.dataValues;
    balance = { CodCliente: userId, Saldo: Number(balance) };

    return balance;
  },

  deleteAccount: async (id) => {
    const account = await db.Account.findOne({ where: { userId: id } });
    if (account.balance > 0) {
      throw new err.UnauthorizedError('A conta não está zerada.');
    }
    
    await db.User.update({ active: false }, { where: { id } });
  },

  createAccount: async (data) => {
    util.validateLogin(data);
    const { email, password } = data;
    const passwordHash = await authServices.encrypt(password); // criptografa a senha.

    const userExist = await db.User.findOne({ where: { email } }); // verifica se já não existe este usuario
    if (userExist) {
      throw new err.UnauthorizedError('Usuário já cadastrado na plataforma');
    } 
    
    const userInfo = await db.User.create({ email, password: passwordHash, active: true }); // criar usuario 
    const { id } = userInfo.toJSON();
    
    await db.Account.create({ userId: id, balance: 0 }); // cria o registro na conta
    const info = { CodCliente: id, email };
    return info;
  },
};

module.exports = userServices;
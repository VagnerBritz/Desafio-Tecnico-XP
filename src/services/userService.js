const db = require('../database/models');

const userServices = {

 user: async (id) => {
    const user = await db.User.findByPk(id);
    return user;
  },
};

module.exports = userServices;
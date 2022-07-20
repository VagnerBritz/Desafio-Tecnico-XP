const userServices = require('../services/userService');

const userControllers = {
    balance: async (req, res) => {
        const {id} = req.params;
        const balance = await userServices.balance(id);
        return res.status(200).json(balance);
    }, 
};
module.exports = userControllers;
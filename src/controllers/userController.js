const userServices = require('../services/userService');

const userControllers = {
    user: async (req, res) => {
        const {id} = req.params;
        const user = await userServices.user(id);
        return res.status(200).json(user);
    },    
};
module.exports = userControllers;
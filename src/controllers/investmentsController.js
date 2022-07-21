const investmentsService = require('../services/investmentsService');

const investmentsController = {

    getAll: async (req, res) => {
        const stoks = await investmentsService.getAll();
        return res.status(200).json(stoks);
    },
    getByName: async (req, res) => {
        const { q } = req.query; // q  => codAtivo
        const stok = await investmentsService.getByName(q);
        return res.status(200).json(stok);
    },
    getById: async (req, res) => {
        const { id } = req.params;
        const stok = await investmentsService.getById(id);
        return res.status(200).json(stok);
    },
    buyStoks: async (req, res) => {
        const data = req.body;
        const buy = await investmentsService.buyStoks(data);
        return res.status(200).json(buy);
    },
};

module.exports = investmentsController;
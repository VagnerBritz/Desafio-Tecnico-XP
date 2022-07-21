const db = require('../database/models');
const util = require('./util');
const accountService = require('./accountService');
const userServices = require('./userService');

const investmentsService = {
    
  getAll: async () => {
        const stoks = await db.Stock.findAll();
        return stoks;
      },

  getByName: async (codAtivo) => {
      const stok = await db.Stock.findOne({where: { codAtivo } });
      if (!stok) {
        const error = new Error('Ação não encontrada. Pesquise nesse formato: "PETR4"');
        error.name = 'NotFoundError';
        throw error;
      }

      return stok;
    },

    getById: async (id) => {
      const stok = await db.Stock.findByPk(id);
      if (!stok) {
        const error = new Error('Código informado é inválido!');
        error.name = 'NotFoundError';
        throw error;
      }
      return stok;
    },

    // eslint-disable-next-line max-lines-per-function
    buyStoks: async (data) => { // #canteiroDeObras
      let { codCliente, codAtivo, qtdeAtivo } = data;
      let { qtdeOferta, valorUnit, nome } = await util.verifyStok(codAtivo); // retorna os dados da ação..
      codAtivo = Number(codAtivo);
      qtdeAtivo = Number(qtdeAtivo);
      valorUnit = Number(valorUnit);

      // verifica se a quantidade à comprar é inferior à qtde a venda
      if (qtdeAtivo > qtdeOferta) return false;// lancar erro aqui
      
      const total = qtdeAtivo * valorUnit; // calcula o valor total da compra
      
      const { Saldo } = await userServices.getBalance(codCliente); // consulta o saldo
      if (Saldo < total) return false;
      
      const newBalance = Saldo - total;
      await util.updateBalance(codCliente, newBalance); // atualiza o saldo
      
      const registry = await util.registryOp({ accountId: codCliente, value: total, type: 'BUY' }); // registra na tabela a operação 
      const { id, accountId, value } = registry.dataValues;
      
      const info = {
        userId: codCliente, codAtivo, qtde: qtdeAtivo, valorCompra: valorUnit, registroId: id };
      
        const newOffer = qtdeOferta - qtdeAtivo;
      await util.updateStocks(newOffer, codAtivo); // atualiza qtde na stocks

      const create = await util.updatePortfolio(info); // registra a operação na carteira de investimentos
      const response = { 
        ...create.toJSON(),
        valorOperacao: value,
        acao: nome,
        message: 'Compra efetuada com sucesso!' };
      return response;
    },
};

module.exports = investmentsService;
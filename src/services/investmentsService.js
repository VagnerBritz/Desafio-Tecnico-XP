const db = require('../database/models');
const util = require('./util');
const userServices = require('./userService');

const investmentsService = {
    
  getAll: async () => {
        const stoks = await db.Stock.findAll();
        return stoks;
      },

  getByName: async (codAtivo) => {
      const stok = await db.Stock.findOne({ where: { codAtivo } });
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
      await util.updateBalance(codCliente, newBalance); // atualiza o saldo do cliente
      
      const registry = await util.registryOp({ accountId: codCliente, value: total, type: 'BUY' }); // registra na tabela a operação 
      const { id, value } = registry.dataValues;
      
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

    // eslint-disable-next-line max-lines-per-function
    sellStock: async (data) => { // assumo que vem numeros
      const { codCliente, codAtivo, qtdeAtivo } = data;
      
      const qtdeUser = await db.StockPortfolio.sum('qtde', { // quantidade do cliente
        where: { codAtivo, userId: codCliente }, 
      });
      if (qtdeUser < qtdeAtivo) return 'Ativo inexistente ou quantidade inválida';

      let { valorUnit, qtdeOferta, nome } = await util.verifyStok(codAtivo); // quantidade existente na corretora
  
      valorUnit = Number(valorUnit); // descobrir pq o bd não retorna decimal,
      const { Saldo } = await userServices.getBalance(codCliente); // pegando o saldo do cliente
      
      const newOffer = qtdeOferta + qtdeAtivo; // nova qtde de ações na corretora.

      // const newQtdeUser = qtdeUser - qtdeAtivo; // nova quantidade de ações do cliente
      const totalOp = Number((qtdeAtivo * valorUnit).toFixed(2)); // valor total da transação;
      const newBalance = totalOp + Saldo; // novo saldo em conta, considerando o valor da venda 

      const registry = await util.registryOp({ accountId: codCliente, value: totalOp, type: 'SELL' }); // registra na tabela a operação 
      const { id, value } = registry.dataValues;

      await util.updateStocks(newOffer, codAtivo); // atualiza qtde de ações na corretora
      await util.updateBalance(codCliente, newBalance); // atualiza o saldo do cliente

      const info = {
        userId: codCliente, codAtivo, qtde: (qtdeAtivo * -1), valorCompra: valorUnit, registroId: id };
      const create = await util.updatePortfolio(info); // registra a operação na carteira de investimentos
      const response = { 
        ...create.toJSON(),
        valorOperacao: value,
        acao: nome,
        message: 'Venda efetuada com sucesso!' };
      return response;
    },

    getWallet: async (id) => {
    const wallet = await db.StockPortfolio.findAll({ where: { userId: id } });
      return wallet;
    },
};

module.exports = investmentsService;

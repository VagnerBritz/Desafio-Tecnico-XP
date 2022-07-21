const db = require('../database/models');
const util = require('./util');
const accountService = require('./accountService');
const userServices = require('./userService');

const investmentsService = {
    
  getAll: async () => {
        const stoks = await db.Stock.findAll();
        return stoks;
      },

  getByName: async (codAtivo ) => {
      const stok = await db.Stock.findOne({where: {codAtivo}});
      if(!stok) {
        const error = new Error('Ação não encontrada. Pesquise nesse formato: "PETR4"');
        error.name = 'NotFoundError';
        throw error;
      }

      return stok;
    },

    getById: async (id) => {
      const stok = await db.Stock.findByPk(id);
      if(!stok) {
        const error = new Error('Código informado é inválido!');
        error.name = 'NotFoundError';
        throw error
      }
      return stok;
    },

    buyStoks: async (data) => {
      let { codCliente, codAtivo, qtdeAtivo } =  data

//  ok verifica se a acão existe e a quantidade existente;
      let { qtdeOferta, valorUnit  } =  await util.verifyStok(codAtivo);
      codAtivo = Number(codAtivo);
      qtdeAtivo = Number(codAtivo);
      valorUnit = Number(valorUnit);

      // verifica se a quantidade à comprar é inferior à qtde a venda
      if(qtdeAtivo > qtdeOferta) return false// lancar erro aqui
      
      // checa os dados recebidos.
      
      // calcula o valor total da compra
      const total = qtdeAtivo * valorUnit;
      console.log( total);

      // consulta o saldo
      const { Saldo } = await userServices.getBalance(codCliente);
      if (Saldo < total) return false
      const newBalance = Saldo - total;
      // debita a conta - atualiza o saldo
      await util.updateBalance(codCliente, newBalance);
      // registra na tabela a operação 
      await util.registryOp({accountId: codCliente, value: total, type: 'BUY'});

      return true
      // registra a operação na carteira de investimentos
      // altera a quantidade na corretora
    }
};

module.exports = investmentsService;
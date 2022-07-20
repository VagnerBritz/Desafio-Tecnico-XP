'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stocks', [{
      'cod_ativo': 'ABEV3',
      nome: 'AMBEV S/A',
      'valor_unit': 14.48,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ALPA4',
      nome: 'ALPARGATAS',
      'valor_unit': 19.59,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ALSO3',
      nome: 'ALIANSCSONAE',
      'valor_unit': 16.14,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'AMAR3',
      nome: 'LOJAS MARISA',
      'valor_unit': 2.04,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ASAI3',
      nome: 'ASSAI',
      'valor_unit': 15.49,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'AZUL4',
      nome: 'AZUL',
      'valor_unit': 12.54,
      'qtde_ativo': 5000
    },
    { 'cod_ativo': 'B3SA3', 
      nome: 'B3',
      'valor_unit': 10.21,
      'qtde_ativo': 5000 },
    {
      'cod_ativo': 'BBAS3',
      nome: 'BRASIL',
      'valor_unit': 34.66,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BBDC3',
      nome: 'BRADESCO',
      'valor_unit': 14.33,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BBDC4',
      nome: 'BRADESCO',
      'valor_unit': 17.26,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BBSE3',
      nome: 'BBSEGURIDADE',
      'valor_unit': 27.01,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BEEF3',
      nome: 'MINERVA',
      'valor_unit': 13.65,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BPAC11',
      nome: 'BTGP BANCO',
      'valor_unit': 22.71,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BRAP4',
      nome: 'BRADESPAR',
      'valor_unit': 22.6,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BRFS3',
      nome: 'BRF SA',
      'valor_unit': 14.96,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BRKM5',
      nome: 'BRASKEM',
      'valor_unit': 34.54,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'BRML3',
      nome: 'BR MALLS PAR',
      'valor_unit': 7.55,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CCRO3',
      nome: 'CCR SA',
      'valor_unit': 12.04,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CIEL3',
      nome: 'CIELO',
      'valor_unit': 4.15,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CMIG4',
      nome: 'CEMIG',
      'valor_unit': 10.39,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'COGN3',
      nome: 'COGNA ON',
      'valor_unit': 2.33,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CPFE3',
      nome: 'CPFL ENERGIA',
      'valor_unit': 31.75,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CPLE6',
      nome: 'COPEL',
      'valor_unit': 6.83,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CRFB3',
      nome: 'CARREFOUR BR',
      'valor_unit': 17.07,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CSAN3',
      nome: 'COSAN',
      'valor_unit': 17.47,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CSMG3',
      nome: 'COPASA',
      'valor_unit': 11.35,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CSNA3',
      nome: 'SID NACIONAL',
      'valor_unit': 14.34,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CVCB3',
      nome: 'CVC BRASIL',
      'valor_unit': 6.55,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'CYRE3',
      nome: 'CYRELA REALT',
      'valor_unit': 12.13,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ECOR3',
      nome: 'ECORODOVIAS',
      'valor_unit': 5.27,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'EGIE3',
      nome: 'ENGIE BRASIL',
      'valor_unit': 41.71,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ELET3',
      nome: 'ELETROBRAS',
      'valor_unit': 44.22,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ELET6',
      nome: 'ELETROBRAS',
      'valor_unit': 45.37,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'EMBR3',
      nome: 'EMBRAER',
      'valor_unit': 12.17,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ENBR3',
      nome: 'ENERGIAS BR',
      'valor_unit': 20.83,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ENEV3',
      nome: 'ENEVA',
      'valor_unit': 14.48,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ENGI11',
      nome: 'ENERGISA',
      'valor_unit': 39.77,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'EQTL3',
      nome: 'EQUATORIAL',
      'valor_unit': 22.67,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'EZTC3',
      nome: 'EZTEC',
      'valor_unit': 15.09,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'FLRY3',
      nome: 'FLEURY',
      'valor_unit': 15.26,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'GOAU4',
      nome: 'GERDAU MET',
      'valor_unit': 9.93,
      'qtde_ativo': 5000
    },
    { 'cod_ativo': 'GOLL4',
      nome: 'GOL',
      'valor_unit': 8.43,
      'qtde_ativo': 5000 },
    {
      'cod_ativo': 'HAPV3',
      nome: 'HAPVIDA',
      'valor_unit': 5.75,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'HYPE3',
      nome: 'HYPERA',
      'valor_unit': 40.5,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'IRBR3',
      nome: 'IRBBRASIL RE',
      'valor_unit': 2.16,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ITSA4',
      nome: 'ITAUSA',
      'valor_unit': 8.59,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'ITUB4',
      nome: 'ITAUUNIBANCO',
      'valor_unit': 23.62,
      'qtde_ativo': 5000
    },
    { 'cod_ativo': 'JBSS3',
      nome: 'JBS', 
      'valor_unit': 29.63, 
      'qtde_ativo': 5000 },
    {
      'cod_ativo': 'JHSF3',
      nome: 'JHSF PART',
      'valor_unit': 5.74,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'KLBN11',
      nome: 'KLABIN S/A',
      'valor_unit': 18.8,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'LIGT3',
      nome: 'LIGHT S/A',
      'valor_unit': 5.46,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'LREN3',
      nome: 'LOJAS RENNER',
      'valor_unit': 24.74,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'LWSA3',
      nome: 'LOCAWEB',
      'valor_unit': 5.79,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'MDIA3',
      nome: 'M.DIASBRANCO',
      'valor_unit': 30.18,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'MEAL3',
      nome: 'IMC S/A',
      'valor_unit': 1.54,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'MGLU3',
      nome: 'MAGAZ LUIZA',
      'valor_unit': 2.79,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'MOVI3',
      nome: 'MOVIDA',
      'valor_unit': 12.27,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'MRFG3',
      nome: 'MARFRIG',
      'valor_unit': 12.75,
      'qtde_ativo': 5000
    },
    { 'cod_ativo': 'MRVE3',
      nome: 'MRV',
      'valor_unit': 9.07,
      'qtde_ativo': 5000 },
    {
      'cod_ativo': 'MULT3',
      nome: 'MULTIPLAN',
      'valor_unit': 23.93,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'NEOE3',
      nome: 'NEOENERGIA',
      'valor_unit': 14.16,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'NTCO3',
      nome: 'GRUPO NATURA',
      'valor_unit': 15.94,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'PCAR3',
      nome: 'P.ACUCAR-CBD',
      'valor_unit': 16.48,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'PETR3',
      nome: 'PETROBRAS',
      'valor_unit': 31.67,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'PETR4',
      nome: 'PETROBRAS',
      'valor_unit': 29.18,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'PRIO3',
      nome: 'PETRORIO',
      'valor_unit': 22.36,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'PSSA3',
      nome: 'PORTO SEGURO',
      'valor_unit': 17.61,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'QUAL3',
      nome: 'QUALICORP',
      'valor_unit': 10.42,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'RADL3',
      nome: 'RAIADROGASIL',
      'valor_unit': 20.19,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'RAIL3',
      nome: 'RUMO S.A.',
      'valor_unit': 15.9,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'RAPT4',
      nome: 'RANDON PART',
      'valor_unit': 9.81,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'RENT3',
      nome: 'LOCALIZA',
      'valor_unit': 54.39,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'SANB11',
      nome: 'SANTANDER BR',
      'valor_unit': 28.44,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'SAPR11',
      nome: 'SANEPAR',
      'valor_unit': 17.73,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'SBSP3',
      nome: 'SABESP',
      'valor_unit': 42.61,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'SULA11',
      nome: 'SUL AMERICA',
      'valor_unit': 19.98,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'SUZB3',
      nome: 'SUZANO S.A.',
      'valor_unit': 45.95,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'TAEE11',
      nome: 'TAESA',
      'valor_unit': 39.27,
      'qtde_ativo': 5000
    },
    { 'cod_ativo': 'TIMS3',
      nome: 'TIM',
      'valor_unit': 13.06,
      'qtde_ativo': 5000 },
    {
      'cod_ativo': 'TOTS3',
      nome: 'TOTVS',
      'valor_unit': 24.67,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'TRPL4',
      nome: 'TRAN PAULIST',
      'valor_unit': 22.85,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'UGPA3',
      nome: 'ULTRAPAR',
      'valor_unit': 12.01,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'USIM5',
      nome: 'USIMINAS',
      'valor_unit': 8.75,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'VALE3',
      nome: 'VALE',
      'valor_unit': 68.88,
      'qtde_ativo': 5000
    },
    {
      'cod_ativo': 'VIVT3',
      nome: 'TELEF BRASIL',
      'valor_unit': 47.51,
      'qtde_ativo': 5000
    },
    { 'cod_ativo': 'WEGE3',
      nome: 'WEG',
      'valor_unit': 26.96,
      'qtde_ativo': 5000 },
    {
      'cod_ativo': 'YDUQ3',
      nome: 'YDUQS PART',
      'valor_unit': 14.12,
      'qtde_ativo': 5000
    },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stocks', null, {});
  }
};

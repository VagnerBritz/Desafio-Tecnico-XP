# Projeto API XP! 🚀

Boas vindas ao projeto API  XP, abaixo estão compilados informações sobre o projeto, tomada de decisões, tecnologias e algumas considerações pessoais sobre o projeto.
  ## Sobre o projeto
  Este projeto simula algumas operções básicas de conta corrente como saque, depósito e consulta de saldo. E algumas operações básicas de corretora de investimentos como consulta a ações e compra e venda ações.

## Orientações
  <details>
  <summary><strong> Rodando aplicação no Docker ou Localmente</strong></summary>

  - Faça o clone do repositário: `git clone https://github.com/VagnerBritz/Desafio-Tecnico-XP`.
  - Na raiz do projeto existe um arquivo chamado `.env.example `, renomeie para `.env` e altere as credenciais desse arquivo conforme as suas credenciais.

  ## Rodando Com Docker 🐋

  - Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - O container rodará na porta padrão (`3306`), pare o `mysql` ou então adapte no `docker-compose.yml`.
  - Esses serviços irão inicializar um container chamado `projeto_xp` e outro chamado `projeto_xp_db`;

  - A partir daqui você pode rodar o container `projeto_xp` via CLI ou abri-lo no VS Code;

  - Instale as dependências com `npm install` e rode a aplicação com `npm start`, assim a aplicação criará o banco de dados e fará o povoamente das tabelas, iniciando a aplicação.

  ## Rodando localmente 

 - Inicie a instalação das dependências com `npm install` e execute o comando `npm start`, assim a aplicação criará o banco de dados e fará o povoamente das tabelas, iniciando a aplicação.

</details>

## Tecnologias utilizadas
* NodeJs;
* Express;
* Sequelize;
* JWT - Json Web Token;
* Express async errors;
* Mysql

## Tomada de decisão
  
Decidi fazer o teste em back end por me identificar mais com essa área. Com o desafio em mãos separei o desafio em etapas menores para poder planejar melhor como desenvolver. 
    Decidi que seria melhor separar conta corrente de carteira de investimentos. Modelei o banco de dados conforme a figura abaixo:
 <details>
  <summary  id="diagrama"><strong> Diagrama de Entidade-Relacionamento</strong></summary>
  <div>  
  <img src="https://user-images.githubusercontent.com/84142194/180618854-451ab538-6f8c-4886-afdc-306c53461382.png" />
  </div>
</details>   

A arquitetura de software apliquei observando a estrutura MSC(Model-Service-Controller) isolando as responsabilidades de cada camada. Para gerenciar o banco de dados mysql usei o ORM Sequelize. Embora ainda não habituado ao sequelize fiz questão de usá-lo para melhor entender seu funcionamento e ganhar experiência com ele. 
Usei a biblioteca express-async-erro para capturar os erros do código evitando ter de usar o `tryCatch` em cada função que possa gerar erro e quebrar a aplicação.
 Utilizei o JWT para criar rotas privadas além de salvar as senhas no banco de dados criptografadas. 
  
## Itens à fazer

* Estrutura de transactions do sequelize;
* Testes unitários e de integração;

## Pontos de melhoria

Escrevi o código, num primeiro momento para que ele "funcionasse" e depois refatorar para melhorar a sintaxe e a reduzir a complexidade. Durante esse processo pode ter sido esquecido algo e não sido implementado. Tendo algumas funcionalidade que são essenciais e que acabaram não foram implementadas. Um exemplo disso é a estrutura de transactions do sequelize que reverteria uma(s) funções de gravação de tabelas do banco de dados caso houvesse algum erro. Tentei implementar esta função mas não consegui fazer funcionar naquele momento e em função do tempo não consegui implementar. 
Pontos importantes de melhoria:
* Validação dos dados;
* Melhoria na nomenclatura de arquivos e variáveis.



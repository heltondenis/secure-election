<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> </p> <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p> <p align="center"> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a> <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a> <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a> <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a> <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a> <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a> <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a> <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a> <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a> </p>
Descrição
Este repositório é um projeto starter utilizando o framework NestJS com TypeScript, focado em construir uma aplicação de votação que utiliza blockchain para garantir a integridade das votações. A blockchain local é gerenciada pelo Ganache.

Pré-requisitos
Node.js (versão 16 ou superior)
Ganache CLI ou Ganache GUI
NPM ou Yarn
Configuração do Projeto
1. Instalar Dependências
bash
Copiar código
$ npm install
# ou
$ yarn install
2. Configurar a Blockchain Local com Ganache
Usando Ganache GUI
Baixe e instale o Ganache GUI:

Download Ganache GUI
Inicie o Ganache:

Abra o Ganache e crie um novo workspace ou use um existente.
Certifique-se de que o Ganache está rodando na porta padrão 7545.
Copie o endereço RPC:

O endereço padrão é http://127.0.0.1:7545.
Usando Ganache CLI
Instale o Ganache CLI:

bash
Copiar código
$ npm install -g ganache-cli
Inicie o Ganache CLI:

bash
Copiar código
$ ganache-cli -p 7545
3. Configurar o Projeto para Conectar à Blockchain Local
Atualize o endereço do provedor no serviço de votação:

No arquivo votacao.service.ts, certifique-se de que o provedor esteja configurado para http://localhost:7545:
typescript
Copiar código
this.provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');
Compile e Implante o Contrato Inteligente:

Certifique-se de que o contrato foi compilado e implantado na blockchain local usando Hardhat ou Truffle. O endereço do contrato implantado será necessário para interagir com ele.
bash
Copiar código
npx hardhat run scripts/deploy.ts --network localhost
Após a implantação, copie o endereço do contrato e substitua no código onde necessário.

4. Iniciar a Aplicação
bash
Copiar código
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
5. Testar a Aplicação
Adicionar um Candidato
http
Copiar código
POST http://localhost:3000/votacao/add-candidate
Content-Type: application/json

{
  "name": "Candidato 1"
}
Votar em um Candidato
http
Copiar código
POST http://localhost:3000/votacao/vote
Content-Type: application/json

{
  "candidateId": "1",
  "voterId": "0xSeuEnderecoAqui"
}
Obter Todos os Candidatos
http
Copiar código
GET http://localhost:3000/votacao/candidates
Executar Testes
bash
Copiar código
# testes unitários
$ npm run test

# testes end-to-end
$ npm run test:e2e

# cobertura de testes
$ npm run test:cov
Recursos
Confira alguns recursos úteis para trabalhar com NestJS:

Visite a Documentação NestJS para aprender mais sobre o framework.
Para perguntas e suporte, entre no Discord oficial.
Para uma experiência prática, confira os cursos oficiais.
Visualize seu gráfico de aplicação e interaja com o NestJS em tempo real usando NestJS Devtools.
Precisa de ajuda com seu projeto? Veja nosso suporte empresarial.
Fique atualizado seguindo-nos no X e LinkedIn.
Procurando emprego ou tem vagas para oferecer? Confira nosso board de empregos.
Suporte
O Nest é um projeto open source licenciado sob MIT. Crescemos graças ao apoio de patrocinadores e apoiadores incríveis. Se você deseja se juntar a eles, saiba mais aqui.

Mantenha Contato
Autor - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
Licença
Nest é licenciado sob MIT.
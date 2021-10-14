# Sthima Challenge

Esse projeto foi desenvolvido como o desafio técnico proposto pelo processo seletivo da Sthima

# Tecnologias utilizadas
- NodeJS
- TypeScript 
- TypeORM
- Ts Node Dev
- PostgreSQL
- ExpressJS

# Padrões de projeto
- Princípios SOLID
- Factories
- DDD (Domain Driven Design)

# Como usar

A API desenvolvida foi alocada no heroku, você pode acessar todos os recursos da aplicação em: <a href="https://moviefy-challenge.herokuapp.com/api">MovieFY API</a>

Para acessar a documentação completa da API basta acessar: <a href="https://moviefy-challenge.herokuapp.com/docs">Documentação</a>

Para baixar o projeto em sua máquina local basta clonar esse repositório: <br />
<code>git clone https://github.com/Guilherme-gso/challenge-sthima.git</code>

Após fazer a cópia do projeto em sua máquina será necessário instalar as dependências do projeto: <br />
<code>npm install</code>

Se você estiver usando o YARN como gerenciador de depêndencias: <br />
<code>yarn</code>

Após instalar as depêndencias será necessário setar o arquivo de configuração de variáveis de ambiente na raíz do projeto, o .env, na raíz do projeto existe um arquivo chamado .env.example, utilize-o como base para verificar as variáveis necessárias no projeto e as substitua com os valores de suas variáveis no arquivo .env que você criou anteriormente: <br />
```
  PORT=3333
  OMDB_API_KEY=YOUR_OMDB_KEY
  APP_KEY=ANY_KEY_TO_GENERATE_TOKENS
  DATABASE_URL=postgres://username:password@host:PORT/database
  REDIS_HOST=YOUR_REDIS_HOST
  REDIS_PORT=YOUR_REDIS_PORT
  REDIS_PASSWORD=YOUR_REDIS_PASSWORD
  NODE_ENV=dev
```

Após isso para rodar o projeto em sua máquina local você deverá executar as migrations do banco de dados, ou seja, instanciar as tabelas do banco em seu banco de dados local, para isso utilize o comando: ```npm run typeorm migration:run``` <br />
se estiver utlizando YARN: ```yarn typeorm migration:run```

logo após instanciar seu banco de dados com as migrations basta executar o projeto utilizando o comando: ```npm run dev``` <br />
se estiver utlizando YARN: ```yarn dev``` <br />

Por padrão o projeto irá rodar na porta 3333 e se estiver tudo correto você receberá uma mensagem sem seu terminal similar a essa: Server Running on PORT: 3333
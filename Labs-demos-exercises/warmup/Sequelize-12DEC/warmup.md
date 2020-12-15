
# Sequelize warmup!

- Create a new node application
- Add sequelize
- Generate separate models for the following:
  - holiday shopping list
  - remote party event schedule
  - binge watching list

example for shopping list:
{
  name: 'slippers',
  recipient: 'mom',
  cost: 40,
  ship_by: '2020-12-16'
}
npx sequelize-cli model:generate --name List --attributes name:string,recipient:string,cost:integer,ship_by:string

how to use sequelize to generate this model?

setup for Sequelize:
npm i sequelize pg pg-hstore
npm i --save-dev sequelize-cli
npx sequelize-cli init
<!-- below is an example for howew to generate a model, below genmerates model name 'Pets' with attribute 'name' and 'breed' no spaces b/w attributes -->
npx sequelize-cli model:generate --name Pets --attributes name:string,breed:string

<!-- must edit config.json with database and server info (from elephant SQL in this case) prior to this step -->
npx sequelize-cli db:migrate
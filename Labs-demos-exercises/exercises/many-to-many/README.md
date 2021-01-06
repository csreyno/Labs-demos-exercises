# Venmo database models


Users have many: 
    - Transactions
    - Contacts
Transactions have many:
    - Comments
Transactions belong to:
    - a User (sender)
    - a User (recipient)
Comments belong to 
    - Users
    - Transactions


# User stories
- As I user I can pay someone
- As a user I can collect money from someone
- As a user I can comment on someone's Transaction
- As a user I can view all Public Transactions

# Attributes

User:
    - id (Primary Key)
    - name
    - hash
    - account number

Transaction
    - id (Primary Key)
    - amount
    - recipient_id (foreign key to Users, unique identifier even if user changes username)
    - sender_id (foreign key)

Contacts
    - id (Primary Key)
    - user_id (foreign key to User)
    - contact_id (foreign key to User)

Comments
    - id (Primary Key)
    - content
    - user_id (foreign key to User)
    - transaction_id (foreign key to Transaction)

- add elephantSQL server info in config.json 

## Model genneration commands:
(will create a new model under 'models' directory and a new .js file under 'migrations' directory each time it's run)
    - 'model' is for your app to use, 'migration' is for Postgres

```
npx sequelize model:generate --name User --attributes name:string,hash:string,account_number:string

npx sequelize model:generate --name Transaction --attributes amount:decimal,recipient_id:integer,sender_id:integer

npx sequelize model:generate --name Contact --attributes user_id:integer,contact_id:integer

npx sequelize model:generate --name Comment --attributes content:string,user_id:integer,transaction_id:integer

npx sequelize db:migrate

npx sequelize seed:generate
```


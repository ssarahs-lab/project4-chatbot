


Live site link: 



## Technologies used
Javascript, AJAX, NodeJS, ExpressJS, PostgreSQL client, PostgresQL

## Approach taken


## Installation instructions

In PostgresQL: 

    CREATE DATABASE chatbot;

  

In the terminal:

  

 - Inside the DB folder: 
   
         psql -d chatbot < schema.sql
         psql -d chatbot < seed.sql
   
   In the root folder:
   
       npm install express
       npm install nodemon
       npm install pg 
       npm install express-session
       npm install axios
       npm install openai
       npm start // or npm run start:dev

## Installation instructions (if database has changed)
Locally: 


    psql -d chatbot < schema.sql
    psql -d chatbot < seed.sql

	
Then restart local server:

    npm start

On Heroku: 

Reset database (deletes ALL data):

```
heroku pg:reset
```

Copy local database to the Heroku database:
```
heroku pg:push chatbot DATABASE_URL
```

## Unsolved problems

# What you munching?

'What you munching?' is a web application built using **Angular 10 (Front End)**, **Node.Js (Back End)** & **Postgresql (Database)**.  :sparkles:

Application collects favourite food along with a link to a description or recipe and stores it in a database. The data is then retrieved and displayed realtime.  

![what you munchiong screenshot](https://github.com/rahul2810/what-you-munching/blob/master/munchit_screenshot.png?raw=true)

## Pre-requisites:
1. **NPM installed** : [NPMjs site](https://www.npmjs.com/get-npm)

2. **Angular CLI installed** : `npm install -g @angular/cli`

3. **Postgresql** : [Postgresql site](https://www.postgresql.org/) (**Alternative:**  other sql databases)

### Database Configuration :
> The below configuration is written based on **Postgresql**. For other sql databases tweek as necessary.
1. Setup database on a postgresql server.

2. Create a table **'munchit'** on the database using the below the script :

```sql
CREATE TABLE public.munchit
(
    username text COLLATE pg_catalog."default",
    location text COLLATE pg_catalog."default",
    favouritefood text COLLATE pg_catalog."default",
    foodlink text COLLATE pg_catalog."default",
    id integer NOT NULL DEFAULT nextval('munchit_id_seq'::regclass),
    CONSTRAINT munchit_pkey PRIMARY KEY (id)
)
```
### DB.js Configuration :
1. Open **db.sql** at (\what-you-munching\backend\src\db.js) in a code editor.

2. Modify default database configuration below :
  ```javascript
  var db = {
    user: 'postgres', //as configured on database
    host: 'localhost', //if running on local
    database: 'what-you-munching', //database name configured on server
    password: '12345678', //as configured on database
    port: 5432,  //port database server is listening to as per server configuration
};
  ```

## Running App (On Local)

### Start Node.js Server
1. Open **Command Prompt** & navigate to solution folder. (\what-you-munching\backend) 

2. Run command : `npm start` (This will start node backend that listens to port 3000 )

### Launch Angular Application

1. Open another **Command Prompt** & navigate to solution folder. (\what-you-munching) 

2. Run command : `npm install` (This should install all the dependancies)

3. Run command : `ng serve -o`  (This will launch a new tab on browser with the active application : http://localhost:4200/)

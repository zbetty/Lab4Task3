# CISC 3140: Large-Scale App
## Lab 4 Task 3: Web App and Deployment

***

For this task, I will be using the `PERN stack` for webpage development and `Heroku` for deployment.
The database `medicalClinic` is in regards to data for a medical clinic.   
- Thus, for the webpage, it consists of 4 routes: 
  - homepage
  - patient records page
  - physician records page
  - appointment records page  
  

- [Go to Data Flow Documentation](#data-flow)
- [Go to Backend Section](#backend)
- [Go to Webpage, Deployment and Configurations](#webpage-and-deployment)

***  

# Data Flow
![Screen Shot 2021-08-08 at 12 23 20 AM](https://user-images.githubusercontent.com/87283935/128621108-22297a91-dc9a-4ff3-b126-b35a95797167.png)  
  

PERN stack consists of Postgres, Express, React, and Node.js.
- `Postgres` - for database, CRUD operations
- `Nodejs` - server framework which allows us to run javascript on the backend.
- `Express` - web framework for Nodejs and helps to build web server like routing.
- `React` - frontend where client can interact with. Responsible for sending client requests to API.

## NOTES:
- In this repository, for easier replication of my data like the screenshots below, I have included `database.sql` which contains all the table and tuples from my postgres database `medicalClinic`.
  - It was also created for deployment to Heroku. Locally, we could connect to postgres, but in order to connect postgres to Heroku, `database.sql` needs to be created for connection to work.
- I've also separated my code into 2 folders: `server` for backend and `client` for frontend to make it easier to view. 
  - However, for deployment, all files in `server` folder would be moved to root because to deploy to Heroku successfully, Heroku needs a `package.json` files readily accessible.

***

# Backend
- `Express` and `Node.js`
- First, you'd need to initialize & keep track of app, by typing in terminal `npm init -y`
- Then, install the dependencies: `npm install express pg cors dotenv nodemon`
  - `express` - for the server
  - `pg` - to interact/connect to postgres
  - `cors` - so differenct domain app could interact with each other
  - `dotenv` - for environmental variables like PORT and postgres login information
  - `nodemon` - so we don't need to keep refreshing terminal when running code. It does it automatically

## Backend data with Postgres connection screenshots:
![Screen Shot 2021-08-07 at 11 50 53 PM](https://user-images.githubusercontent.com/87283935/128621513-6ac0340d-7417-49fd-b324-0e8f8fd78115.png)    

![Screen Shot 2021-08-07 at 11 51 04 PM](https://user-images.githubusercontent.com/87283935/128621527-555c881a-c646-445b-b369-ca6e719d37ea.png)  

![Screen Shot 2021-08-07 at 11 52 36 PM](https://user-images.githubusercontent.com/87283935/128621535-cc90de00-73f6-4550-bd32-7ee03e3d6f7c.png)  

![Screen Shot 2021-08-07 at 11 51 16 PM](https://user-images.githubusercontent.com/87283935/128621542-b394fe5d-5c2f-499a-a09c-b9e4d08d7405.png)  

***
![Screen Shot 2021-08-07 at 11 16 48 PM](https://user-images.githubusercontent.com/87283935/128622677-27c565d7-fee3-4440-95e3-d54b83b37673.png)
# Webpage and Deployment
- `React` (frontend) and `Heroku` (deployment)
- For frontend:
  - First create react app in client folder by: `npx create-react-app client`
  - Then install the dependencies: `npm install react-router-dom axios`
    - `react-router-dom` - for routing and switch
    - `axios` - for api request



## Web page layout:
- `Homepage`: will have 3 buttons, `onclick` would take to the respect page of either: `patient`, `physician`, or `appointment`.
- `/patient`: would show all patients at the medical clinic. You could add a patient.
- `/physician`: would show all physicians at the medical clinic. You could add a physician.
- `/appointment`: would show all appointments at the clinic and you could add onto it.

## Deployment Notes:
- This repository doesn't contain the deployment configurations to allow users that clone this repository to be able to replicate data from the screenshots seen later/below.
- Also, please note, as stated in the beginning of this `README.md` while working in localhost, we can connect to Postgres and get the data as is, to get the data to work in Heroku, we'll need to create `database.sql` for it to work.

## Deployment configurations (server side):
- For deployment to work, we need to first take all the files from `server` folder and move it out.
  - This will ensure that Heroku has access to a `package.json` file
- Then, to establish the connection for Heroku to access my postgres database by creating the `database.sql` which has all the tables' data. 
  - Then, to make it so that Heroku can apply their postgres url to establish the connection: 
  ![Screen Shot 2021-08-07 at 11 14 51 PM](https://user-images.githubusercontent.com/87283935/128622242-e4e327e1-bdfd-4c97-9c08-5d1b91aa495f.png)
- `server.js`
  - Let Heroku know to runs the build folder in the client side and create the connection: 
  ![server](https://user-images.githubusercontent.com/87283935/128623680-8582527a-ef25-41ce-8ee7-e0e0b3adb011.png)
 
- `package.json`:
  - In `script` section of the server side `package.json`, we need to let Heroku know how to build for deployment.
  - In `engines` section, let Heroku know app's version of npm and node to prevent incompatibilities. 
 ![package](https://user-images.githubusercontent.com/87283935/128623690-b370472e-3bc8-470b-a99b-130f07c31a04.png)
   


## Deployment configurations (client side):
### Note:
- **Port** **discrepancies**:
  - When working on the backend server side, I tested the server in `port 5005`
  - When working on the frontend client side, React is in `port 3000`
- When working locally on client side, I was able to just fetch data from backend via:
> http://localhost:5005/  
> http://localhost:5005/patient  
> http://localhost:5005/physician  
> http://localhost:5005/appointment  

-**BUT** this will not work on Heroku. To ensure it works, we need to create a `proxy`
- A `proxy` allows it so the Heroku can append it's url to any of the endpoints: `/`,`/patient`,`/physician`,`appointment`
- To do so, in the client `package.json` simply write: `"proxy": "http://localhost:5005"`  
![Screen Shot 2021-08-07 at 11 43 46 PM](https://user-images.githubusercontent.com/87283935/128622526-887ebd41-cc65-4945-be11-e0b9c70097f4.png)  

***
## Finally, Heroku deployment instructions provided by Heroku:
- In the terminal of the project you want to deploy:
  - Login to heroku: `$ heroku login`
  - remote git on heroku: `$ heroku git:remote -a <heroku app name>`
  - Get the heroku addons for postgres: `$ heroku-postgresql:hobby-dev -a <heroku app name>`
  - Get database to heroku: `$ cat <database name> | heroku pg:psql <heroku app name>`
  - `$ git add .`
  - `$ git commit -am "make it better"`
  - `$ git push heroku master`

  

## Deployment and web page screenshots: 
![Screen Shot 2021-08-07 at 11 34 42 PM](https://user-images.githubusercontent.com/87283935/128623101-ff89c8d0-6192-4025-9ff1-bdc3bb7ac605.png)  

![Screen Shot 2021-08-07 at 11 48 51 PM](https://user-images.githubusercontent.com/87283935/128623104-b9edccd6-aa9e-488f-837d-62eb0c7ae386.png)  

![Screen Shot 2021-08-07 at 11 49 23 PM](https://user-images.githubusercontent.com/87283935/128623111-69e4b3a9-bd07-4146-adce-2a37562f1c3b.png)  

![Screen Shot 2021-08-07 at 11 49 09 PM](https://user-images.githubusercontent.com/87283935/128623115-edd15507-9f25-4940-843e-6f5dc80bb0c8.png)  

*** 

## Resources:  
- [https://www.youtube.com/watch?v=J01rYl9T3BU](https://www.youtube.com/watch?v=J01rYl9T3BU)  
- [https://www.youtube.com/watch?v=5vF0FGfa0RQ](https://www.youtube.com/watch?v=5vF0FGfa0RQ)  
- [https://www.youtube.com/watch?v=ZJxUOOND5_A](https://www.youtube.com/watch?v=ZJxUOOND5_A)  
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)  
- [node-postgres](https://node-postgres.com/features/connecting)






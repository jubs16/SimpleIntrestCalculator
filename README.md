# SimpleIntrestCalculator
FullStack ReactJS to find simple intrest

## Description.
The project consist of backend NodeJS and frontend React client application. ConcurrentlyJS automates the task to run two or more script at once. First we send data from input field using input form and then we post the data to backend using axios. Axios is third party tool that provides restful services to our application. ExpressJS is minimalist web framework for Node.js which helps provide routes within the backend. Once expresJS receives post request at the backend it calculates and respond to that request. The calculated response is then displayed in react component which is finally rendered within the browser.

## Fullstack folder hierarchy
```
- SimpleIntrestCalculator
  - server.js      (your backend)
 -- client        (your frontend)
```

## Running the application.

 1. git clone repo
 `git clone https://github.com/jubs16/SimpleIntrestCalculator`
 
 2. cd into the folder 
 `cd SimpleIntrestCalculator`
 
 3. Install node modules for backend dependencies
 `npm install`
 
 4. cd client folder
 `cd client`
 
 5. Install node modules for react application
 `npm install`
 
 6. Run React application
 `yarn start` or `npm start`
 
 7. Let run the backend node server
    (first we go one folder back where server.js is located)
    `cd ..`
 8. Now lets run our server.js file
    (You can use any of the command to start your server depending on your wish)
    ```
    yarn start
    node server.js
    nodemon server.js
    ```
 9. Now both the applications are ready and running 
    NodeJS backend on port 5000 and React client on 3000
    
 10. Enjoy;)

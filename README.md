# Welcome to BirthDay_Tracker Repository

The most convient way for you to track bdays of your friends, family and close ones.

## Set Up

There are 3 main components required in this project. 

**config.env** - Before running the project you'll need to add a file named config.env in the root directory. <br>
                 <br>
                 It should include -<br>
                  `MONGO_URL` - Setup mongodb and set the connection string <br>
                  `GMAIL_PASSWORD` - Your Email password, on which you would like to recieve notifications // prefer using unused emails or create a new one <br>


**Client** - Once you are in the client directory. <br>
       <br>
          Run Commands <br>
      - `npm i` - It will install the packages needed for the project <br>
      - `npm start` -  It will run the frontend of the project at localhost:3000   <br>
      
**Server** - In the Server folder, <br>
           <br>
           Run Commands <br>
      - `npm i` - It will install the packages needed for the project <br>
      - `nodemon app.js` -  It will run the frontend of the project at PORT  specified by you  <br>  
      


## Working

We can add the bday dates of our friends with their names. All the bday dates will be available to you on Login.
![image](https://user-images.githubusercontent.com/84982038/153748450-d4c26306-815c-46d1-a0b7-396633bd5c07.png)

The Birthday_Reminder will send the mail to the user on their email when they add a bday to their list.
It will also send a reminder email of the person just before his/her bday. This will allow the user to get rid of the hassle of remembering all the bdates and leaving this responsibility to our app. 


![image](https://user-images.githubusercontent.com/84982038/153748294-b3ff1dea-0e88-4fe2-af56-4d876cb55dfc.png)

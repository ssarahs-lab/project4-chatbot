
# chatto-roboto: a ReactJS app

![enter image description here](https://i.imgur.com/gf2SkOZ.gif)

Live site link: [chatto-roboto](https://chatto-robotto.herokuapp.com/)
## Overview
*Chatto Roboto* is a single page web app whereby the user can access a chatbot powered by machine learning with natural language processing.

## Technologies used
ReactJS, Axios, NodeJS, ExpressJS, React-Chatbot-Kit, OpenAI's GPT-3

## Approach taken

In this project, I used **ReactJS** to create the page and **React-Chatbot-Kit** to create the chatbot interface on the frontend. 
Then I used **Axios** to make an API call to the backend server. 
**NodeJS** and **ExpressJS** was then setup for the backend server which then makes an API call to **OpenAI's GPT-3**.


## Installation instructions

   In the root folder:
   
       npm install express
       npm install nodemon
       npm install pg 
       npm install express-session
       npm install axios
       npm install openai
       npm start // or npm run start:dev
       
   In the chatbot folder:

       npm install
       yarn start

 

 



## Potential Extensions for later

- Using Phaser.io to make a game with the Chatbot
- Users can make their own bot with customised personalities. 
- Local storage of chatbot history to train GPT-3

const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const bodyParser = require('body-parser')
 
const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = process.env.PORT || 3001;
app.use(express.static('./chatbot/build'))

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get('/', (req,res) => {
    res.json('hi')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './chatbot/build/index.html'));
});

app.post('/api-es', jsonParser, (req, res) => {

  message = req.body.data
  console.log(req.body.data)

 openai.createCompletion({
  model: "text-davinci-002",
  prompt: `The following is a conversation with Es. 

  Es is empathetic, kind, clever, and humorous.
  Es: Hi! I'm Es, a chatbot created to help people talk about their problems. What would you like to talk about today?
  You: ${message}
    Es:`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  })

  .then((response) => {
    res.json(response.data.choices[0].text)
     console.log(response.data.choices[0].text)
  
     });
     
   })

   app.post('/api-automata', (req, res) => {

  
    console.log(req.data)
  
   openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Saura is a chatbot that answers questions with questions:
      
      You: How many pounds are in a kilogram?
      Saura: ✋ Is a kilogram a killer gram?
      You: What does HTML stand for?
      Saura: ✋ Is it Hypertext Markup Language?
      You: What is JavaScript?
      Saura: ✋ Is it a programming language for making TV shows about coffee?
      You: Do you have a question, Kimberly?
      Saura: If Jim is short for James is Kim short for Kames?
      You: Do you have a question, Beth?
      Saura: If Beth is short for Elisabeth is Seth short for Elizaseth?
      You: ${req.data}
      Saura:`,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    })
  
    .then((response) => {
      res.json(response.data.choices[0].text)
       console.log(response.data.choices[0].text)
    
       });
       
     })
     




app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})
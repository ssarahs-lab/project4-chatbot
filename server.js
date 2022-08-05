const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001;
app.use(express.static('./chatbot/build'))

app.use(cors())

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get('/', (req,res) => {
    res.json('hi')
})

app.post('/api', (req, res) => {

  
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
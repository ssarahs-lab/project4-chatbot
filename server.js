const express = require('express')
require('dotenv').config()
const expressSession = require('express-session')
const pgSession = require('connect-pg-simple')(expressSession);

const db = require('./db/db.js');

const app = express()
const port = 3000

app.use(expressSession({
    store: new pgSession({
        pool: db,
        createTableIfMissing: true,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,    
}))


// openAI configuration
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Like @app.route('/messages') in Flask
app.get('/', (req, res) => {

  let input = "hello"

 const response = openai.createCompletion({
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
    You: ${input}
    Saura:`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  });

  console.log("backend")
  chatResponse = res.json(response.data)
  console.log(chatResponse)

})

// Like @app.route('/messages', methods=["POST"]) in Flask
app.post('/messages', (request, response) => {
  console.log(request.body)
  if (request.body.message !== undefined) {
    messages.push(request.body.message)
    response.json({ status: 'success'})
  } else {
    response.json({status: 'failed', message: 'No message contained in body of request'})
  }
})

app.delete('/messages/:messageId', (req, res) => {
  const messageId = req.params.messageId
  messages.splice(messageId, 1)
  res.json({status: 'success'})
})

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})
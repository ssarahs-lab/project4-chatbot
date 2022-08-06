import axios from 'axios';
import React from 'react';
import MessageParser from './MessageParser';
const { Configuration, OpenAIApi } = require("openai");



const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);


let messageHistory = ''

const ActionProvider = ({ createChatBotMessage, setState, children}) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hi! I\'m a chatbot created to help people talk about their problems. What would you like to talk about today? ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const callEsAI = (message) => {

    messageHistory = messageHistory + `\n You: ${message} `
    console.log(messageHistory)

    axios.post('/api-saura',{
      data: messageHistory,
      
    })
    
    .then((response) => {
      
      let botMessage = createChatBotMessage(`${response.data}`)

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
    }));
      
      messageHistory = messageHistory + ` \n Bot: ${botMessage.message}`

      console.log(messageHistory)

    
      
    }).catch((error) => {
        console.error(error)
    
    })
   
  }
  
  const callOpenAI = (message) => {

    messageHistory = messageHistory + `\n You: ${message} `
    
    console.log(messageHistory)
    console.log("this works")
 
      openai.createCompletion({
        model: "text-davinci-002",
        prompt: `The following is a conversation with a friend. 

        The friend is empathetic, kind, clever, and humorous.
        Bot: Hi! I'm a chatbot created to help people talk about their problems. What would you like to talk about today?
        You: ${messageHistory}
        Bot: ` ,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" You:"],

        
      })
      .then((response) => {
       let botMessage = createChatBotMessage(`${response.data.choices[0].text}`);
        console.log(response.data.choices[0].text)
        
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        messageHistory = messageHistory + ` \n Bot: ${botMessage.message}`
    
        console.log(messageHistory)
      })

      
    
   

  } 

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, callOpenAI, callBackendAI: callEsAI
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
import React from 'react';
import MessageParser from './MessageParser';
const { Configuration, OpenAIApi } = require("openai");



const configuration = new Configuration({
  apiKey: "nice try faceless github user",
});

const openai = new OpenAIApi(configuration);



const ActionProvider = ({ createChatBotMessage, setState, children}) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hi! I\'m a chatbot created to help people talk about their problems. What would you like to talk about today? ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  

  
  const callOpenAI = (message) => {

   
console.log("yes")
      openai.createCompletion({
        model: "text-davinci-002",
        prompt: `The following is a conversation with a psychologist. 

        The assistant is empathetic, kind, clever, and humorous.
        Bot: Hi there, what would you like to talk about today?
        You: I'm feeling sad today, my great uncle's cousin's sister's dog's puppy's cousin died.
        Bot: Sounds like you're feeling sad, have you heard of dancing and eating potatoes?
        You: ${message}
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
      })

      
    
   

  } 

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello, callOpenAI
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
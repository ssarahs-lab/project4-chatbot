import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './components/config.jsx';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import style from './style.css';

function App() {

  function Home() {
    return ( <div id={style.navi}>
      <img src={require('./images/landing.gif')}/>
 
    </div>);
  }
  
  function Chatpage() {
    const [showBot, toggleBot] = useState(false);
  
    const saveMessages = (messages, HTMLString) => {
      localStorage.setItem('chat_messages', JSON.stringify(messages));
    };
  
    const loadMessages = () => {
      const messages = JSON.parse(localStorage.getItem('chat_messages'));
      return messages;
    };
    return (  <div>
      {showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
            runInitialMessagesWithHistory
          />
        )}
        <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
  
        </div>
    );
  }
  
  
  
  
  return (
  <div className="App">
  
 
     
    <BrowserRouter>
    <header>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/chatpage">Chat with Zaura</a></li>
          <li><a href="/chatpage">Contact Sarah</a></li>
          
        </ul>
      </header>

   
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/chatpage" element={<Chatpage/>}/>
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
                <img src={require('./images/404.gif')}></img>
              </div>
            }
          />
      </Routes>
    </BrowserRouter>
  
  </div>
     
  );
}



export default App;

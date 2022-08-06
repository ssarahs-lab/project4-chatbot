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
import { render } from '@testing-library/react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Home() {
  return ( <div id={style.navi} className="animate__animated animate__fadeIn">
    <img src={require('./images/landing.gif')} className="landingImage"/>

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
  return (  
  <div className='container1 animate__animated animate__fadeIn vw-80'>
      <div className='col-1'> 
        <img src={require('./images/snow_final.gif')} className="catImage"/>
      </div>
      <div className='col-2'>
          <Chatbot data-testid='text'
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
            runInitialMessagesWithHistory
            headerText='Conversation with Es'
          />
        </div>
    </div>
  );
}

export function Aboutpage(){
  return(<div className='animate__animated animate__fadeIn'>
    <h2 data-testid="heading">About this page</h2>
    <img src={require('./images/phone.gif')}/>
    <p>Es is an AI chatbot powered by OpenAI's GPT3.</p>
    <p>This page was made by Sarah So for her portfolio as part of General Assembly's Software Immersive Course.</p>

    <p>To contact Sarah, you can find her via her <a href="https://www.linkedin.com/in/sarah-so-dev/">LinkedIn</a> or <a href="https://github.com/ssarahs-lab">Github Page</a>.</p>
   
              
  </div>)
}
function App() {

  
  
  
  return (
  <div className="App container">
  
 
     
    <BrowserRouter>
    <header>
        <ul className='ul-display'>
          <li><a href="/home">Home</a></li>
          <li><a href="/chatpage">Chat with Es</a></li>
          <li><a href="/aboutpage">About</a></li>
          
        </ul>
      </header>

 

    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/chatpage" element={<Chatpage/>}/>
        <Route path="/aboutpage" element={<Aboutpage/>}/>
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

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './components/config.jsx';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  function Home() {
    return ( <div>
      <h1>Home</h1>
      <p>Welcome!</p>
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
  
      <header>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/chatpage">Chat with Chatbot test</a></li>
          
        </ul>
      </header>
     
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/chatpage" element={<Chatpage/>}/>
       
      </Routes>
    </BrowserRouter>
  
  </div>
     
  );
}



export default App;

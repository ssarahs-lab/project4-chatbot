import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './components/config.jsx';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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


function Home() {
  return ( <div>
    <h1>Home</h1>
    <p>Welcome!</p>
  </div>);
}

function Chatpage() {
  return (  <div>
    <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      
      />
    </div>
  );
}

function Generate() {
  return ( <div>



  </div> );
}




export default App;

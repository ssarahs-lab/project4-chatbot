import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './bot/config.jsx';
import MessageParser from './bot/MessageParser.jsx';
import ActionProvider from './bot/ActionProvider.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className="App">
  
      <header>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/chatpage">Chat with Saura</a></li>
          <li> <a href="/animalgenerate">Generate an Animal - test example</a></li>
        </ul>
      </header>
     
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/chatpage" element={<Chatpage/>}/>
        <Route path="/animalgenerate" element={<Generate/>}/>
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
  return ( <div></div> );
}




export default App;

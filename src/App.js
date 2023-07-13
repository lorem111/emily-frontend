import React, { useState } from 'react';
import './App.css';
import SakuraComponent from './SakuraComponent';
import ApiKeyForm from './ApiKeyForm';
import AudioPlayer from './AudioPlayer';


function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const response = await fetch('https://87h31cnnke.execute-api.eu-west-1.amazonaws.com/dev/gpt4_response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: input }),
    });
    const data = await response.json();
    // Update messages first
    setMessages([...messages, { text: input, sender: 'User' }, { text: data.ai_response, sender: 'Emily' }]);

    // Then fetch and play the audio
    const audioResponse = await fetch('https://87h31cnnke.execute-api.eu-west-1.amazonaws.com/dev/ai_audio_response');
    const audioBlob = await audioResponse.blob(); 
    const audioUrl = URL.createObjectURL(audioBlob);
    console.log("blob url" + audioUrl)
    const audio = new Audio(audioUrl);
    audio.play();

    setInput('');
    };

  return (
    <div className="App">
      <div className="wrapper">
    <SakuraComponent />
        <div className="chat-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <strong>{message.sender}:</strong> {message.text}
              {message.sender === "Emily"}
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
      <input 
          type="text"
          value={input} 
          onChange={e => setInput(e.target.value)} 
          
          onKeyDown={event => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();  // Prevent newline from being entered
              sendMessage();
            }
          }}
          />
      <button onClick={sendMessage}>Send</button>
      </div>
    </div>
);
}

export default App;
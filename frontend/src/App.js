// frontend/src/App.js
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Развернуть Web App на весь экран
  }, []);

  return (
    <div className="App">
      <h1>Добро пожаловать в HR-платформу</h1>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
const API_URL = `http://api.icndb.com/jokes/random`;

function App() {
  return (
    <div class="box">
      <h3>Random Jokes Generator</h3>
      <p>Joke is here</p>
      <button>Get new joke</button>
    </div>
  );
}

export default App;

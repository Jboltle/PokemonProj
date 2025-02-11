'use client'
import { useState } from 'react';
import './App.css';

function App() {
const [clicked, setClicked] = useState(false)



const handleClick = async () => {
setClicked(true)
console.log("Loading...")
}

  return (
    <div className="pokemon-container">
      <h1>Pokemon</h1>
      <div className="pokemon-list">
        <div className="pokemon-card">
<button className='pokemon-button' onClick={handleClick}>Click me</button>
{clicked ? (
  <p>
    {makeRequest().then(data => JSON.stringify(data)).catch(err => "Error fetching data")}
  </p>
) : (
  <p>Not Clicked</p>
)}


        </div>
      </div>
    </div>
  );
}

export default App;

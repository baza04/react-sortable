import React, { useState, useEffect } from 'react';
import './App.css'
import Core from './Core'

function App() {
  const [heroes, setHeroes] = React.useState([])

  useEffect(() => {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then((data) => setHeroes(data))
  }, [])

    
  return (

    <div className="App">
        <h1>Sortable React</h1>

        <Core heroes={heroes} setHeroes={setHeroes} />
        

    </div>

  );
}

export default App;

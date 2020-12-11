import React, { useState, useEffect } from 'react';
// import Context from './context'
import Core from './Core'
import Loader from './Loader'

function App() {
  const [heroes, setHeroes] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then((data) => setHeroes(data))
    setLoading(false)
  }, [])

  // function doSomething() {
  //   setHeroes()
  // }
    
  return (
    <div className="App">
        <h1>Sortable React</h1>

        {loading && <Loader />}
        {heroes.length ? (
          <Core heroes={heroes} setHeroes={setHeroes} />
        ) : (
          loading ? null : <p>List of Heroes is empty</p>
        )}
        
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [value, setValue] = React.useState([])

  const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.
  }
  
  useEffect(() => {
    // Request the file fetch, it will download it in your browser cache
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then((heroes) => {
      setValue(heroes)
    }) // .then will call the function with the JSON value
    console.log("THIS IS STATE VALUE", value)
  }, [])

    
  return (

    <div className="App">

        {
          value.map((hero, index) => {
            console.log("Hero Output", hero, index)
          })
        }

    </div>

  );
}

export default App;

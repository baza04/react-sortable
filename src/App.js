import React, { useEffect } from 'react';
import Context from './context'
import SearchField from './View/SearchField'
import Loader from './Loader'
import Core from './Core'


function App() {
  const [sourceData, setSource] = React.useState([])
  const [heroes, setHeroes] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then((data) => setSource(data)) // set source
    setHeroes(sourceData) // set rendered data
    setLoading(false)
  }, [])

  function SearchHeroes(key) {
    setSource(sourceData)
    setHeroes(
        heroes.filter((hero) => {
            return hero.name.includes(key) || hero.biography.fullName.includes(key)
        })
    )
  } 

 function SortHeroes() {
    // const sortedHeroes = heroes // [] default value
    setHeroes(
        heroes.map((hero) => {
        // just create handler func
        return heroes
    }))
}
    
  return (
    <Context.Provider value={{ SearchHeroes, SortHeroes }} >

      <div className="App">
          <h1>Sortable React</h1>
          <SearchField />
          {loading && <Loader />}
          {heroes.length ? (
            <Core heroes={heroes} setHeroes={setHeroes} />
          ) : (
            loading ? null : <p>List of Heroes is empty</p>
          )}
          
      </div>
    </Context.Provider>
  );
}

export default App;

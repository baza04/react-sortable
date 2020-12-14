import React, { useEffect } from 'react';
import Context from './context'
import SearchField from './View/SearchField'
import Loader from './Loader'
import HeroesList from './View/HeroesList'

// import Core from './Core'


function App() {
  const [heroes, setHeroes] = React.useState([])
  const [vueHeroes, setVueHeroes] = React.useState(heroes)
  const [loading, setLoading] = React.useState(true)
  const [query, setQuery] = React.useState({key:'', params: {}})

  useEffect(() => {  
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then((data) => {
      setHeroes(data)
      setVueHeroes(data)
    }) // set source
    .then(setLoading(false))
  }, [])

  // SearchHeroes
  useEffect(() => {
    console.log('query', query)
    SortHeroes(query.params)
    let name, fullName
    setVueHeroes(heroes.filter((hero) => {
      name = hero.name.toLowerCase()
      fullName = hero.biography.fullName.toLowerCase()
      return name.includes(query.key) || fullName.includes(query.key)
    }))
  }, [query])
  
  // function SearchHeroes(key) {
  //   setVueHeroes(
  //     heroes.filter((hero) => {
  //       return hero.name.includes(query.key) || hero.biography.fullName.includes(query.key)
  //     })
  //   )
  // } 

 function SortHeroes(params) {
    console.log('sort:', params)
    if (params.fullName) {
      
    }
    if (params.powerStats) {

    }
    if (params.race) {

    }
    if (params.gender) {}
    if (params.height) {}
    if (params.weight) {}
    if (params.placeOfBirth) {}
    if (params.alignement) {}
    setVueHeroes(
      
    )
}
    
  return (
    // <Context.Provider value={{ SearchHeroes, SortHeroes }} >
    <Context.Provider value={{ setQuery }} >

      <div className="App">
        <h1>Sortable React</h1>

        {
          // console.log('vue:', vueHeroes)
        }

          <SearchField />
          {loading && <Loader />}
          {heroes.length ? (
            // <Core heroes={heroes} setHeroes={setHeroes} />
            <HeroesList heroes={vueHeroes} />
          ) : (
            loading ? null : <p>List of Heroes is empty</p>
          )}
          
      </div>
    </Context.Provider>
  );
}

export default App;

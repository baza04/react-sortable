import React, { useEffect } from 'react';
import Context from './context'
import SearchField from './View/SearchField'
import Loader from './Loader'
import HeroesList from './View/HeroesList'
import EmptyOrShow from './components/EmptyOrShow';

// import Core from './Core'


function App() {
  const [heroes, setHeroes] = React.useState([])
  const [vueHeroes, setVueHeroes] = React.useState(heroes)
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState({ key: '', sortParam: '' })

  // function SearchHeroes(key) {
  //   setVueHeroes(
  //     heroes.filter((hero) => {
  //       return hero.name.includes(query.key) || hero.biography.fullName.includes(query.key)
  //     })
  //   )
  // } 

  function SortHeroes(param) {
    console.log('sort:', param)
    let arr = []
    switch (param) {
      case 'fullName':
        arr = heroes.sort((a, b) => (a.fullName > b.fullName) ? 1 : -1)
        break;
      case 'powerStats':
        arr = heroes.sort((a, b) => (a.powerStats > b.powerStats) ? 1 : -1)
        break;
      case 'race':
        arr = heroes.sort((a, b) => (a.race > b.race) ? 1 : -1)
        break;
      case 'gender':
        arr = heroes.sort((a, b) => (a.gender > b.gender) ? 1 : -1)
        break;
      case 'height':
        arr = heroes.sort((a, b) => (a.height > b.height) ? 1 : -1)
        break;
      case 'weight':
        arr = heroes.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
        break;
      case 'placeOfBirth':
        arr = heroes.sort((a, b) => (a.placeOfBirth > b.placeOfBirth) ? 1 : -1)
        break;
      case 'alignement':
        arr = heroes.sort((a, b) => (a.alignement > b.alignement) ? 1 : -1)
        break;
      default:
        arr = heroes.sort((a, b) => (a.name > b.name) ? 1 : -1)
        break;
    }

    setVueHeroes(arr)
  }

  useEffect(() => {
    setLoading(true);

    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
      .then((response) => response.json())
      .then((data) => {
        setHeroes(data);
        setVueHeroes(data);
        setLoading(false);
      })
    // set source
  }, [])

  // SearchHeroes
  useEffect(() => {
    console.log('query', query)
    // SortHeroes(query.sortParam)
    let name, fullName
    setVueHeroes(heroes.filter((hero) => {
      name = hero.name.toLowerCase()
      fullName = hero.biography.fullName.toLowerCase()
      return name.includes(query.key) || fullName.includes(query.key)
    }))
  }, [query])

  return (
    <Context.Provider value={{ setQuery }} >

      <div className="App">
        <h1>Sortable React</h1>

        <SearchField />
        {/* {loading && <Loader />} */}

        <EmptyOrShow loading={loading}>
          {
            vueHeroes.length 
              ? <HeroesList heroes={vueHeroes} />
              : <p>List of Heroes is empty</p>
          }
        </EmptyOrShow>

      </div>
    </Context.Provider>
  );
}

export default App;

import React from 'react'
import Context from './context'
import HeroesList from './View/HeroesList'
import PropTypes from 'prop-types'

function Core({heroes, setHeroes}) {

    // function SearchHeroes(key) {
    //     setHeroes(
    //         heroes.filter((hero) => {

    //             return hero.name.includes(key) || hero.biography.fullName.includes(key)
    //         })
    //     )
    // } 

    //  function SortHeroes() {
    //     // const sortedHeroes = heroes // [] default value
    //     setHeroes(
    //         heroes.map((hero) => {
    //         // just create handler func
    //         return heroes
    //     }))
    // }

    return (
        // <Context.Provider value={{ SearchHeroes, SortHeroes }} >
            <div className='Core'>

                <HeroesList heroes={heroes} />
            </div>
        // </Context.Provider>
            
    )
}

Core.propTypes = {
    heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
    setHeroes: PropTypes.func.isRequired,
}

export default Core
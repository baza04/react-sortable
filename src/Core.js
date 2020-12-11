import React from 'react'
import HeroesList from './View/HeroesList'
import PropTypes from 'prop-types'

function Core({heroes, setHeroes}) {

    /* function SortHeroes() {
    //     // const sortedHeroes = heroes // [] default value
    //     setHeroes(
    //         heroes.map((hero) => {
    //         // just create handler func
    //         return heroes
    //     }))
    // }*/

    return (
        <div className='wrapped'>
            
            <HeroesList heroes={heroes} /> {/* before do some logic */}
        </div>
    )
}

Core.propTypes = {
    heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
    setHeroes: PropTypes.func.isRequired,
}

export default Core
import React from 'react'
import PropTypes from 'prop-types'
import HeroItem from './HeroItem'

const style = {
    ul: {
        border: "2px solid white",
    }
}

function HeroesList({ heroes }) {
    return (
        <ul style={style.ul}>
            <h2>Heroes Table</h2>
            { heroes.slice(0, 3).map((hero, index) => (
                <HeroItem
                    hero={hero} 
                    key={hero.id}
                    index={index}
                />
                // console.log("in list: ", hero) // just for check
            ))} 
            
        </ul>
    )
}

HeroesList.propTypes = {
    heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
    // setHeroes: PropTypes.func.isRequired,
}

export default HeroesList
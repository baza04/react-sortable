import React from 'react'
import PropTypes from 'prop-types'
import HeroItem from './HeroItem'
// import Context from './../context' // not need


const style = {
    ul: {
        border: "2px solid white",
    }
}

function HeroesList({ heroes }) {
    // const {SearchHeroes} = useContext(Context)

    return (
        
        <div className='HeroesList'>
            {/* <input
                type='text'
                onChange={(event) => SearchHeroes(event.target.value)}
            /> */}
            <ul style={style.ul}>
                <h2>Heroes Table</h2>
                { heroes.map((hero, index) => (
                    <HeroItem
                        hero={hero} 
                        key={hero.id}
                        index={index}
                    />
                    ))} 
            </ul>
                
        </div>
    )
}

HeroesList.propTypes = {
    heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
    // setHeroes: PropTypes.func.isRequired,
}

export default HeroesList
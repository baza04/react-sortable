import React from 'react'
import HeroItem from './HeroItem'

function HeroesTable(props) {
    return (
        <ul>
            { props.heroes.map((hero, index) => {
                <HeroItem 
                    name={hero.name}
                    key={hero.id}
                />
            })}
        </ul>

    )
}

export default HeroesTable
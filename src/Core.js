import React from 'react'
import HeroesTable from './View/HeroesTable'

function Core(props) {

    function SortHeroes(heroes) {
        const sortedHeroes = []
        return sortedHeroes
    }

    return (
        //   {
            props.heroes.map((hero, index) => {
                console.log("Hero Output", hero, index)
            })
        //   } 
    )
}

export default Core
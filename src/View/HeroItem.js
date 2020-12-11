import React from 'react'
import './HeroItem.css'
import PowerStats from './PowerStats'

const styles = {
    li: {
        display: 'flex',
        justifyCotent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        color: 'white',
    },
   
}

function HeroItem({ hero, index }) {
    return (
        <li style={ styles.li } >
            <div className='image'>
                <img src={hero.images.xs} alt={hero.name} />
            </div>
            
            <div className='name'>
                <pre>Name: {hero.name}</pre>
                <pre>FullName: {hero.biography.fullName}  </pre>
            </div>
            
           <PowerStats powerStats={hero.powerstats} />
            <pre>  Race: {hero.appearance.race}</pre>
            <pre>  Gender: {hero.appearance.gender}</pre>
            <pre>  Height: {hero.appearance.height.join(', ')}</pre>
            <pre>  Weight: {hero.appearance.weight.join(', ')}</pre>
            <pre>  Place of Birth: {hero.placeOfBirth}</pre>
            <pre>  Alignment: {hero.biography.alignment}</pre>
            
            
            {
                console.log('before items: ', hero)
            }
            
        </li>

    )

}

export default HeroItem
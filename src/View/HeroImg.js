import React from 'react'

const styles = {
    img: {
        width: '30px',
        height: '40px',
        border: '1px solid yellow'
    }
}

function HeroImg({ hero }) {
    return (
        <div className='HeroImg' style={styles}>
            {/* <img src={hero.image.xs} alt={hero.name} /> */}

        </div>
    )
}

export default HeroImg
import React from 'react'
import PropTypes from 'prop-types'



function PowerStats({ powerStats }) {
    return (
        <div className='powerStats' >
            <pre>PowerStats</pre>
            <pre>combat {powerStats.combat}</pre>
            <pre>durability {powerStats.durability}</pre>
            <pre>intelligence {powerStats.intelligence}</pre>
            <pre>power {powerStats.power}</pre>
            <pre>speed {powerStats.speed}</pre>
            <pre>strength {powerStats.strength}</pre>
        </div>
    )
}

PowerStats.propTypes = {
    powerStats: (PropTypes.object).isRequired
}

export default PowerStats
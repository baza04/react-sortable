import React, {useContext} from 'react'
import Context from '../context'

function SearchField() {
    const { setQuery } = useContext(Context)
    
    return (
        <div className='SearchHeroes' >
            <input 
                type='text'
                onChange={(event) => setQuery({key: event.target.value.toLowerCase()})}
            />

            
        </div>
    )
}

export default SearchField 



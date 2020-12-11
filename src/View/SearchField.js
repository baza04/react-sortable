import React, {useContext} from 'react'
import Context from '../context'

function SearchField() {
    const { SearchHeroes } = useContext(Context)

    return (
        <div className='SearchHeroes' >
            <input 
                type='text'
                onChange={(event) => SearchHeroes(event.target.value)}
            />
        </div>
    )
}

export default SearchField 



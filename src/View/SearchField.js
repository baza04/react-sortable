import React, {useContext} from 'react'
import Context from '../context'

// function handleSelect(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     console.log('select', target, value, name)

// }

function SearchField() {
    const { setQuery } = useContext(Context)
    
    function handleChange(event) {
        console.log('select value', event.target.value)
    }

     function handleInput(event) {
         
         setQuery({key: event.target.value.toLowerCase()})
        } 

    return (
        <div className='SearchHeroes' >
            <input 
                type='text'
                onChange={handleInput}
            />

            <select onChange={handleChange}>
                <option selected value='name' >Name</option>
                <option value='FullName' >FullName</option>
                <option value='PowerStats' >PowerStats</option>
                <option value='Race' >Race</option>
                <option value='Gender' >Gender</option>
                <option value='Height' >Height</option>
                <option value='Weight' >Weight</option>
                <option value='placeOfBirth' >placeOfBirth</option>
                <option value='Alignment' >Alignment</option>
            </select>

        </div>
    )
}

export default SearchField 



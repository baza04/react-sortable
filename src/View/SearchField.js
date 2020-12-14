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
    
    return (
        <div className='SearchHeroes' >
            <input 
                type='text'
                onChange={(event) => setQuery({key: event.target.value.toLowerCase()})}
            />

            <select onChange={console.log((event) => event.target.value)}>
                <option selected value='name' >Name</option>
                <option >FullName</option>
                <option  >PowerStats</option>
                <option  >Race</option>
                <option  >Gender</option>
                <option  >Height</option>
                <option  >Weight</option>
                <option  >placeOfBirth</option>
                <option  >Alignment</option>
            </select>

        </div>
    )
}

export default SearchField 



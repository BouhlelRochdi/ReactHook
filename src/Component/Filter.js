import React from 'react';

function Filter({search}) {

    const handleChange=(e)=>{
 search(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder='Search...' onChange={handleChange}/>
        </div>
    );
}

export default Filter;
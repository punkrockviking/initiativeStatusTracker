import React from 'react'

function Character() {


  return (
    <div>
      <div>
        <label>
          Name
          <input 
            value='Jari Bloodborne' 
            type='string'
            name='name'
          />
        </label>
        <label>
          Initiative
          <input 
            value='10' 
            type="number"
            name="level"
            min="1"
            max="30"
          />
        </label>
        <label>
          Team
          <input 
            value='green' 
            type="string"
            name='team'
          />
        </label>
      </div>
    </div>
  )
};

export default Character
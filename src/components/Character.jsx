import React, { useState, useEffect } from 'react'

function Character() {

  //declare variable to track initiative score called initScore
  const [initScore, setInitScore] = useState(1)
  const [charName, setCharName] = useState('name')
  const [teamColor, setTeamColor] = useState('')
  const [charNotes, setCharNotes] = useState('')
  const onInitChange = (event) => {
    event.preventDefault()
    setInitScore(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    
  })

  return (
    <div>
      <div>
        <form
            
        >
          <label>
            Name
            <input 
              value='Jari Bloodborne' 
              type='string'
              name='name'
            />
          </label>
          <form 
            onChange={onInitChange} 
            onSubmit={handleOnSubmit}
          >
            Initiative
            <input 
              value={initScore} 
              type="number"
              name="level"
              min="1"
              max="30"
            />
          </form>
          <label>
            Team
            <input 
              value='green' 
              type="string"
              name='team'
            />
          </label>
        </form>
      </div>
    </div>
  )
};

export default Character
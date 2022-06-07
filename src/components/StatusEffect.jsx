import React, { useState } from 'react';

const StatusEffect = (props) => {

  const [status, setStatus] = useState({
    name: 'new status effect',
    turns: 1,
  })
  // set state to equal the props
  // use the state as values in the rendered elements
  // create change handlers to update state

  return (
    <form>
      <label>
        <input type="string" value={status.name} />
      </label>
      <label>
        Turns
        <input type="number" value={status.turns} />
      </label>
      <Button 
        buttonColor="red"  
      >
        remove
      </Button>
    </form>
  )
}

export default StatusEffect
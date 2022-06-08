import React, { useState } from 'react';

const StatusEffect = (props) => {

  const [status, setStatus] = useState({
    name: props.status.name,
    duration: props.status.duration,
    unit: props.status.unit,
    index: props.status.index,
  })
  // set state to equal the props
  // use the state as values in the rendered elements
  // create change handlers to update state
  

  return (
    <form>
      <label
      onChange={handleOnChange}
      >
        <input type="string" value={status.name} />
      </label>
      <label>
        Turns
        <input type="number" value={status.duration} />
      </label>
      <label>
        <input   />
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
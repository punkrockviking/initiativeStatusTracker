import React, { useState } from 'react';

const StatusEffect = (props) => {

  

  return (
    <form>
      <label>
        <input type="string" value={props.name.value} />
      </label>
      <label>
        Turns
        <input type="number" value={props.turns.value} />
      </label>
      <Button 
        buttonColor="red" 
        onClick={props.onButtonClick}  
      >
        remove
      </Button>
    </form>
  )
}

export default StatusEffect
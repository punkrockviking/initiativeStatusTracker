import React, { useState, useEffect } from 'react';
import Button from './styledComponents/Button'
import StatusEffect from './StatusEffect'


const StatusList = (props) => {

  const [open, setOpen] = useState(false)
  const statusList = props.statusList
  const [statusItems, setStatusItems] = useState([{name: 'prone', turns: 1}])
  
  class StatusObj {
    constructor(name='new status', turns=0) {
      this.name = name,
      this.turns = turns
    }
  }

  const addStatus = () => {
    let newStatusItems = statusItems
    const newItem = new StatusObj()
    newStatusItems.push(newItem)
    setStatusItems(newStatusItems)
  }
  
  const listItems = statusList.map((status) => 
    <form>
      <label>
        <input type="string" defaultValue={status.name} />
      </label>
      <label>
        Turns
        <input type="number" defaultValue={status.turns} />
      </label>
      <Button 
        buttonColor="red" 
      >
        remove
      </Button>
    </form>
  )

  // const listItems = statusList.map((status) => 
  //   <form>
  //     <label>
  //       <input type="string" value={status} />
  //     </label>
  //     <label>
  //       Turns
  //       <input type="number" />
  //     </label>
  //     <Button 
  //       buttonColor="red" 
  //     >
  //       remove
  //     </Button>
  //   </form> 
  // )

  return (
    <div>
      <Button
        onClick={() => setOpen(!open) }   
      >
        Status Effects:
      </Button>
      <div>
        {open && (
          <Button
            onClick={addStatus}
          >
          Add Status
          </Button>
        )}
      </div>
      <div>
        {open && listItems}
      </div>
    </div>
  )
}

export default StatusList
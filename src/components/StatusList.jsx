import React, { useState } from 'react';
import Button from './styledComponents/Button'


const StatusList = (props) => {

  const [open, setOpen] = useState(false)
  const statusList = props.statusList
  const [statusItems, setStatusItems] = useState([])

  class StatusObj {
    constructor(name='new status', turns=0) {
      this.name = name,
      this.turns = turns
    }
  }
  
  const listItems = statusList.map((status) =>
    <form>
      <label>
        <input type="string" value={status} />
      </label>
      <label>
        Turns
        <input type="number" value="0" />
      </label>
      <Button buttonColor="red" >
        remove
      </Button>
    </form>
  )

  return (
    <div>
      <Button
        onClick={() => setOpen(!open) }   
      >
        Status Effects:
      </Button>
      <div>
        {open && (
          <Button>
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
import React, { useState, useEffect } from 'react';
import Button from './styledComponents/Button'
import StatusEffect from './StatusEffect'


const StatusList = (props) => {

  const [open, setOpen] = useState(false)
  const statusList = props.statusList
  const [statusItems, setStatusItems] = useState([{ name: 'prone', turns: 1 }])

  class StatusObj {
    constructor(name = 'new status', duration = '1', unit = 'turns', index) {
      this.name = name,
        this.duration = parseInt(duration),
        this.unit = unit,
        this.index = index
    }
  }

  const handleRemoveClick = (event) => {
    event.preventDefault()
  }

  const addStatus = () => {
    let newStatusItems = statusItems
    const newItem = new StatusObj()
    newStatusItems.push(newItem)
    setStatusItems(newStatusItems)
  }

  const listItems = statusList.map((status) =>
    <form key={Math.random()}>
      <label>
        <input type="text" defaultValue={status.name} />
      </label>
      <label>
        Duration:
        <input type="number" defaultValue={status.duration} min={0} max={60} />
        <select name="status" id="status">
          <option value="Rounds">Rounds</option>
          <option value="Minutes">Minutes</option>
          <option value="Hours">Hours</option>
          <option value="Days">Days</option>
        </select>
      </label>
      <Button
        onClick={handleRemoveClick}
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
      <h3>
        Status Effects:
      </h3>
      <div>
        {listItems}
      </div>
    </div>
  )
}

export default StatusList
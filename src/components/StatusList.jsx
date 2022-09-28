import React, { useState, useEffect } from 'react';
import Button from './styledComponents/Button'
import StatusEffect from './StatusEffect'


const StatusList = (props) => {

  const [open, setOpen] = useState(false)
  const statusList = props.statusList
  const [statusItems, setStatusItems] = useState([{ name: 'prone', turns: 1 }])

  // class StatusObj {
  //   constructor(name = 'new status', duration = '1', unit = 'turns', id) {
  //     this.name = name,
  //       this.duration = parseInt(duration),
  //       this.unit = unit,
  //       this.id = id
  //   }
  // }

  const handleRemoveClick = (event) => {
    event.preventDefault()
  }

  // const addStatus = () => {
  //   let newStatusItems = statusItems
  //   const newItem = new StatusObj()
  //   newStatusItems.push(newItem)
  //   setStatusItems(newStatusItems)
  // }

  // ToDo: status list resets all changed inputs to default when a new effect is added. need to save status effects into state and add function that updates state when inputs are changed

  // ToDo: need functionality of delete status button. use key to identify which arr index to delete
  // use arr.filter() and filter for where key !== key of the status i want to delete. This shallow copies the array to have only values that meet the peram set in filter. then reset state

  // ToDo: what should the key be? could have key be index, or an incrementing integer. if index is used then all other indecis after would need to be updated to keep consistency (not ideal)
  
  const listItems = statusList.map((status) =>
    <form key={status.name}>
      <label>
        <input type="text" defaultValue={status.id} />
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
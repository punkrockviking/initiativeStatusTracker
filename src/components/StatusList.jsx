import React, { useState, useEffect } from 'react';
import Button from './styledComponents/Button'
import StatusEffect from './StatusEffect'


const StatusList = (props) => {

  const [open, setOpen] = useState(false)
  const statusList = props.statusList
  const [statusItems, setStatusItems] = useState([{ name: 'prone', turns: 1 }])

  const handleRemoveClick = (event) => {
    event.preventDefault()
  }
  const handleChangeValue = (event) => {
    // event.preventDefault()
    // const { ident, name, value } = event.target
    // console.log(event.target)
    // props.updateStatusState(id, name, value)
  }

  // ToDo: status list resets all changed inputs to default when a new effect is added. need to save status effects into state and add function that updates state when inputs are changed

  // ToDo: need functionality of delete status button. use key to identify which arr index to delete
  // use arr.filter() and filter for where key !== key of the status i want to delete. This shallow copies the array to have only values that meet the peram set in filter. then reset state

  
  const listItems = statusList.map((status) =>
    <form key={status.id} onChange={handleChangeValue}>
      <label>
        <input type="text" ident="name" defaultValue={status.name} />
      </label>
      <label>
        Duration:
        <input type="number" ident="durNum" defaultValue={status.duration} min={0} max={60} />
        <select name="status" id="status" ident="unit">
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
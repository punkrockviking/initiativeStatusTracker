import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {

  const [selectedValue, setSelectedValue] = useState(selected)

  // const handleSelectedChange = (event) => {
  //   const { value } = event.target
  //   if (value === 'Red Team') {
  //     onSelecedChange({
  //       label: 'Red Team',
  //       value: 'green'
  //     })
  //   } else if (value === 'Green Team') {
      
  //   }
  // }
  
  const renderedOptions = options.map((option) => {
    return (
      <option
        key={option}
      >
        {option}
      </option>
    )
  })

  
  return (
    <div>
      <div>
        <label>Team Color: </label>
        <select onChange={() => onSelectedChange(event.target.value)}  >
          {renderedOptions}
        </select>
      </div>
    </div>
  )
}

export default Dropdown;
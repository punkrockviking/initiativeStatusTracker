import React from 'react';

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option.value} >
        {option.label}
      </option>
    )
  })
  
  return (
    <div>
      <div>
        <label>Team Color: </label>
          <select>
            {renderedOptions}
          </select>
      </div>
    </div>
  )
}

export default Dropdown;
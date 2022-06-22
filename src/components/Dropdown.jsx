import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option 
        key={option.value} 
        onClick={() => (onSelectedChange(option))}  
      >
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
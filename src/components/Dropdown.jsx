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
      <form>
        <label>Team Color: </label>
          <select>
            {renderedOptions}
          </select>
      </form>
    </div>
  )
}

export default Dropdown;
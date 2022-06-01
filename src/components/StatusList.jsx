import React from 'react';

const StatusList = (props) => {

  const statusList = props.statusList
  const listItems = statusList.map((status) =>
    <form>
        {status}
      <label>
        Turns
        <input type="number" value="0" />
      </label>
      <button>
        delete
      </button>
    </form>
  )

  return (
      <div>
        Status Effects:
        {listItems}
      </div>
  )
}

export default StatusList
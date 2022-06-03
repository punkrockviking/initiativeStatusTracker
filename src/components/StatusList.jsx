import React from 'react';

const StatusList = (props) => {

  const statusList = props.statusList
  const listItems = statusList.map((status) =>
    <form>
      <label>
        <input type="string" value={status} />
      </label>
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
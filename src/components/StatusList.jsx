import React from 'react';

const StatusList = (props) => {

  const statusList = props.statusList
  const listItems = statusList.map((status) =>
    <div>{status}</div>
  )

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default StatusList
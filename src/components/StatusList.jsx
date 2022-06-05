import React, { useState, useEffect } from 'react';
import Button from './styledComponents/Button'


const StatusList = (props) => {

  const [open, setOpen] = useState(false);
  const statusList = props.statusList
  useEffect(() => {
        const onBodyClick = (event) => {
        setOpen(!open);
        };
        // document.body.addEventListener('click', onBodyClick, { 
        //     capture: true 
        // });

        // return () => {
        //     document.body.removeEventListener('click', onBodyClick, {
        //         capture: true,
        //     });
        // };

    }, []);
  
  const listItems = statusList.map((status) =>
    <form>
      <label>
        <input type="string" value={status} />
      </label>
      <label>
        Turns
        <input type="number" value="0" />
      </label>
      <Button>
        remove
      </Button>
    </form>
  )

  return (
    <div>
      <div
        onClick={() => setOpen(!open) }   
      >
        Status Effects:
      </div>
      <div>
        {open && listItems}
      </div>
      
    </div>
  )
}

export default StatusList
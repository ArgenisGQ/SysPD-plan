import React from 'react' 

import tableDataUnitsActivities from '../../../admin/planning/variables/tableDataUnitsActivities.json'


  
const ListActivities= () => {
    const numbers = ["1 - uno dos tres uno dos tres uno dos tres uno dos tres ",
                     "2 - uno dos tres uno dos tres",
                     "3 - uno dos tres"];
                     
    const datos = [ tableDataUnitsActivities[0].idd,
                    tableDataUnitsActivities[0].strategy,
                    tableDataUnitsActivities[0].instrument,
                    tableDataUnitsActivities[0].type,
                    tableDataUnitsActivities[0].evidence,
                    tableDataUnitsActivities[0].feedback,
                    tableDataUnitsActivities[0].lapse,
                    tableDataUnitsActivities[0].weighing
                      ];
    
    const listItems = numbers.map((number) =>
                     <li key={number.toString()}>
                       {number}
                     </li>
                   );
    return (<>
        {console.log([datos])}
        <ul>{listItems}</ul>
    </>        
    )
  }
  
export default ListActivities
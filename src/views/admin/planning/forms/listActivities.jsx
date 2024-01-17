import React from 'react' 

import tableDataUnitsActivities from '../../../admin/planning/variables/tableDataUnitsActivities.json'

import tableDataUnitsActivities2 from '../../../admin/planning/variables/tableDataUnitsActivities2.json'


  
const ListActivities= (props) => {
    const { units, others } = props;
    
    const numbers = ["1 - uno dos tres uno dos tres uno dos tres uno dos tres ",
                     "2 - uno dos tres uno dos tres",
                     "3 - uno dos tres"];

    const datox = [ tableDataUnitsActivities[0].idd,
                    tableDataUnitsActivities[0].strategy,
                    tableDataUnitsActivities[0].instrument
                  ];

    const datoy = [ tableDataUnitsActivities2[0].activity[0].activity,
                    tableDataUnitsActivities2[1].activity[0].strategy,
                    tableDataUnitsActivities2[0].activity[0].instrument
                ];

    const datoxx = [tableDataUnitsActivities2]

    const datoyy = datoxx[0][0].activity[0]

    const datoxy = Object.values(datoxx)

    const datoz = tableDataUnitsActivities2[0].activity[0].activity
                     
                     
    const datos = [ tableDataUnitsActivities[0].idd,
                    tableDataUnitsActivities[0].strategy,
                    tableDataUnitsActivities[0].instrument,
                    tableDataUnitsActivities[0].type,
                    tableDataUnitsActivities[0].evidence,
                    tableDataUnitsActivities[0].feedback,
                    tableDataUnitsActivities[0].lapse,
                    tableDataUnitsActivities[0].weighing
                      ];
    
   /*  const listItems2 = datoz.map((number) =>
                     <li key={number.toString()}>
                       {number}
                     </li>
                   ); */

    const listItems = datoyy.map((unitx) =>
                      <li key={unitx}>
                        {unitx} - abc
                      </li>
                      );
    return (<>
        {console.log([datoy])}
        {console.log(datoxx[0][0].activity[0].strategy)}
        {console.log(datoyy)}
        <ul>{listItems}</ul>
    </>        
    )
  }
  
export default ListActivities
import React from 'react' 


  
const ListActivities= () => {
    const numbers = ["1 - uno dos tres uno dos tres uno dos tres uno dos tres ",
                     "2 - uno dos tres uno dos tres",
                     "3 - uno dos tres"];
    
    const listItems = numbers.map((number) =>
                     <li key={number.toString()}>
                       {number}
                     </li>
                   );
    return (
        <ul>{listItems}</ul>
    )
  }
  
export default ListActivities
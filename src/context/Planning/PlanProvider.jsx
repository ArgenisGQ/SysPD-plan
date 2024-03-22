import { useState} from 'react';
import { PlanContext } from './PlanContext';


export const PlanProvider = ( { children }) => {
  const [testx, setTestx] = useState(false)

  const next = (step) => {
    console.log("PASO ACTUAL NEXT: ", step)
  }
  
  const previous = (step) => {
    console.log("PASO ACTUAL PREVIOUS: ", step)
  }

  const reset = () => {

  }

  const test = () => {
    setTestx(true);
  }


  return (
    <PlanContext.Provider value={{ previous , next, reset, test, testx} }>
        {children}
    </PlanContext.Provider>
  )
}
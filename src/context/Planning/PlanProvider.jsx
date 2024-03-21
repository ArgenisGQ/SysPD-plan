import { useState} from 'react';
import { PlanContext } from './PlanContext';


export const PlanProvider = ( { children }) => {
  const next = (step) => {
    console.log("PASO ACTUAL NEXT: ", step)
  }
  
  const previous = (step) => {
    console.log("PASO ACTUAL PREVIOUS: ", step)
  }

  const reset = () => {

  }


  return (
    <PlanContext.Provider value={{ previous , next, reset} }>
        {children}
    </PlanContext.Provider>
  )
}
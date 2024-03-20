import { useState} from 'react';
import { PlanContext } from './PlanContext';


export const PlanProvider = ( { children }) => {
  const next = () => {

  }
  
  const previous = () => {

  }

  const reset = () => {

  }


  return (
    <PlanContext.Provider value={{ previous , next, reset} }>
        {children}
    </PlanContext.Provider>
  )
}
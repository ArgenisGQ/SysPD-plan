import { useEffect, useState} from 'react';
import { PlanContext } from './PlanContext';


export const PlanProvider = ( { children }) => {
  const [testx, setTestx] = useState(false)
  const [stepActive, setStepActive] = useState(1)
  const [buttonActive, setButtonActive] = useState(true)
  const [stepControl, setStepControl] = useState(1)
  const [stepGo, setStepGo] = useState(0);
  const [stepBack, setStepBack] = useState(0);
  const [readyForm, setReadyForm] = useState(false)


  const next = (step) => {
    setStepActive(step)
    console.log("PASO ACTUAL NEXT: ", step)
  }
  
  const previous = (step) => {
    setStepActive(step)
    console.log("PASO ACTUAL PREVIOUS: ", step)
  }

  const reset = () => {

  }

  const test = () => {
    setTestx(true);
  }

  const readyFormControl = () => {
    setReadyForm(true)
  }


  return (
    <PlanContext.Provider value={{ 
        previous, next, 
        reset, 
        test, testx,
        stepActive, setStepActive,
        buttonActive, setButtonActive,
        stepControl, setStepControl,
        stepGo, setStepGo,
        stepBack, setStepBack,
        readyForm,setReadyForm,
        readyFormControl
        }}>
        {children}
    </PlanContext.Provider>
  )
}
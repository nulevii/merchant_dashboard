import * as React from 'react'
import { InitialStateInterface } from '../../../store/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { increaseStep, decreaseStep } from '../../../store/actions'

export default function ProgressMobileStepper (): JSX.Element {
  const dispatch = useDispatch()
  const step = useSelector((state: InitialStateInterface) => state.step)
  // const styles =
  const stepWidth = `${String(step)}%`
  console.log(stepWidth)
  const handleNext = (): void => {
    dispatch(increaseStep())
  }

  const handleBack = (): void => {
    dispatch(decreaseStep())
  }

  return (
    <div>
        <p> Step {step} of 4 </p>
        <div className=' h-2 w-full border rounded border-MDDarkBlue95'>
          <div className={`h-2 w-${step}/4 rounded bg-MDDarkBlue95`}/>
        </div>
        <button onClick={handleBack} hidden={step === 4 }>
          Back
        </button>
        <button onClick={handleNext} hidden={step === 4 }>
          Next
        </button>
    </div>
  )
}

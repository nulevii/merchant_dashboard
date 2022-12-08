import * as React from 'react'
import { InitialStateInterface } from '../../../store/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { increaseStep, decreaseStep } from '../../../store/actions'

import sprite from '../../../assets/icons.svg'

export default function ProgressMobileStepper (): JSX.Element {
  const dispatch = useDispatch()

  const step = useSelector((state: InitialStateInterface) => state.step)
  const maxSteps = 4

  const stepPersent: string = String(step / maxSteps * 100) + '%'

  const handleNext = (): void => {
    dispatch(increaseStep())
  }

  const handleBack = (): void => {
    dispatch(decreaseStep())
  }

  return (
    <div className='mb-8'>
        <p className='mb-2 tracking-tight text-Shade40'> Step {step} of {maxSteps} </p>
        <div className='mb-2 h-2 w-full border rounded border-MDDarkBlue95'>
          <div className={'h-full rounded bg-MDDarkBlue95 transition-all'} style={{ width: stepPersent }}/>
        </div>

        <div className='flex justify-between leading-[18px] text-Shade40'>
        <button className='px-2' onClick={handleBack} hidden={step === 1 }>
          <svg className='mr-[2px] w-3 h-3 inline-block stroke-Shade40 fill-none'>
            <use href={sprite + '#icon_chevron-left'}></use>
          </svg>
          Back
        </button>
        <button className='px-2 stroke-Shade40 disabled:stroke-Shade80 disabled:text-Shade80' onClick={handleNext} hidden={step === 1 } disabled={step === 2}>
          Next
          <svg className='ml-[2px] w-3 h-3 inline-block stroke-inherit fill-none '>
            <use href={sprite + '#icon_chevron-right'}></use>
          </svg>
        </button>
        </div>

    </div>

  )
}

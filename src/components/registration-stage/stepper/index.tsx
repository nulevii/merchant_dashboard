import * as React from 'react'
import { InitialStateInterface } from '../../../store/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../store/actions'

import sprite from '../../../assets/icons.svg'
import { Stepper, Step, StepLabel, StepButton } from '@mui/material'

export default function ProgressMobileStepper (): JSX.Element {
  const dispatch = useDispatch()

  const step = useSelector((state: InitialStateInterface) => state.step)
  const { name, email, password } = useSelector((state: InitialStateInterface) => state.accountInfo)
  const userInfoBoolean = name === '' && email === '' && password === ''

  const handleNext = (): void => {
    dispatch(setStep(step + 1))
  }
  const handleBack = (): void => {
    dispatch(setStep(step - 1))
  }

  return (
  <div className='mb-8'>
<Stepper className='mb-12 text-DarkBlue60' orientation="vertical" activeStep={step === 4 ? step : step - 1}>
  <Step>
    <StepLabel >Welcome</StepLabel>
  </Step>
  <Step>
    <StepLabel>Connect your Shopify store</StepLabel>
  </Step>
  <Step>
    <StepLabel>Connect your customer support email</StepLabel>
  </Step>
  <Step>
    <StepLabel>Done</StepLabel>
  </Step>
</Stepper>
<div className=' flex justify-between leading-[18px] text-MDDarkBlue80'>
    <button className=' px-2 text-base bg-DarkBlue20 stroke-MDDarkBlue80 disabled:stroke-Shade80 disabled:text-Shade80'
     onClick={handleBack} disabled={(step === 1)} hidden={step === 1 && userInfoBoolean }>
      <svg className='ml-[2px] w-4 h-4 inline-block stroke-inherit fill-none '>
        <use href={sprite + '#icon_chevron-left'}></use>
      </svg>
      Back
    </button>
    <button className='px-2 text-base bg-DarkBlue20 stroke-MDDarkBlue80 disabled:stroke-Shade80 disabled:text-Shade80'
    onClick={handleNext} hidden={step === 1 && userInfoBoolean } disabled={ (step === 2) || (step === 3)}
>
      Next
      <svg className='ml-[2px] w-4 h-4 inline-block stroke-inherit fill-none '>
        <use href={sprite + '#icon_chevron-right'}></use>
      </svg>
    </button>
    </div>
    </div>

  )
}

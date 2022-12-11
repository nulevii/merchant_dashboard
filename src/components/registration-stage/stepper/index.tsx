import * as React from 'react'
import { InitialStateInterface } from '../../../store/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { setStep, closeConfirmStage, toggleNotUseGoogle, toggleNotUseShopify } from '../../../store/actions'

import sprite from '../../../assets/icons.svg'
import { Stepper, Step, StepLabel } from '@mui/material'

export default function ProgressMobileStepper (): JSX.Element {
  const dispatch = useDispatch()

  const step = useSelector((state: InitialStateInterface) => state.step)
  const notUseGoogle = useSelector((state: InitialStateInterface) => state.notUseGoogle)
  const notUseShopify = useSelector((state: InitialStateInterface) => state.notUseShopify)
  const { name, email, password } = useSelector((state: InitialStateInterface) => state.accountInfo)
  const userInfoBoolean = name === '' && email === '' && password === ''
  const handleNext = (): void => {
    dispatch(setStep(step + 1))
    dispatch(closeConfirmStage())
    if (notUseGoogle) { dispatch(toggleNotUseGoogle()) }
    if (notUseShopify) { dispatch(toggleNotUseShopify()) }
  }
  const handleBack = (): void => {
    dispatch(setStep(step - 1))
    dispatch(closeConfirmStage())
    if (notUseGoogle) { dispatch(toggleNotUseGoogle()) }
    if (notUseShopify) { dispatch(toggleNotUseShopify()) }
  }

  return (
  <div className='mb-8'>
<Stepper className='mb-12 text-DarkBlue60' orientation="vertical" activeStep={step === 4 ? step : step - 1}
sx={{

  '.MuiStepConnector-root span': {
    marginLeft: '3px',
    height: '48px',
    borderLeft: '4px solid #1976d2'
  },
  '.MuiStepLabel-root': {
    padding: '0px',
    color: 'red'
  },

  '.MuiStepLabel-label': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#5D7FA3'

  },
  '.MuiStepLabel-label.Mui-completed': {
    color: '#ffffff'
  },
  '.MuiStepLabel-label.Mui-active': {
    color: '#ffffff'
  },

  '.MuiSvgIcon-root': {
    // fill: '#123b5d',
    backgroundColor: '#123b5d',
    borderRadius: '50%',
    height: '32px',
    width: '32px',
    outline: '3px solid #1976d2'
  },
  '.MuiSvgIcon-root:not(.Mui-completed)': {
    color: '#00000000'
  },
  '.MuiSvgIcon-root.Mui-completed': {
    background: '#fff'

  },

  '.MuiSvgIcon-root.Mui-active': {
    color: '#1976d2',
    outline: '3px solid #1976d2',
    border: '5px solid #123b5d '

  },
  '.Mui-active .MuiStepIcon-text': {
    fill: '#ffffff'
  }
}}>
  <Step>
    <StepLabel StepIconProps={{ icon: '' }}>Welcome</StepLabel>
  </Step>
  <Step>
    <StepLabel StepIconProps={{ icon: '' }}>Connect your Shopify store</StepLabel>
  </Step>
  <Step>
    <StepLabel StepIconProps={{ icon: '' }}>Connect your customer support email</StepLabel>
  </Step>
  <Step>
    <StepLabel StepIconProps={{ icon: '' }}>Done</StepLabel>
  </Step>
</Stepper>
<div className=' flex justify-between leading-[18px] text-MDDarkBlue80'>
    <button className=' px-3 py-1 text-base bg-DarkBlue20 stroke-MDDarkBlue80 disabled:bg-transparent disabled:stroke-DarkBlue60 disabled:text-darstroke-DarkBlue60'
     onClick={handleBack} disabled={(step === 1)} hidden={step === 1 && userInfoBoolean }>
      <svg className='mr-2 w-4 h-4 inline-block stroke-inherit fill-none '>
        <use href={sprite + '#icon_chevron-left'}></use>
      </svg>
      Back
    </button>
    <button className='px-3 py-1 text-base bg-DarkBlue20 stroke-MDDarkBlue80 disabled:bg-transparent disabled:stroke-DarkBlue60 disabled:text-darstroke-DarkBlue60'
    onClick={handleNext} hidden={step === 1 && userInfoBoolean } disabled={ (step === 2) || (step === 3)}
>
      Next
      <svg className='ml-2 w-4 h-4 inline-block stroke-inherit fill-none '>
        <use href={sprite + '#icon_chevron-right'}></use>
      </svg>
    </button>
    </div>
    </div>

  )
}

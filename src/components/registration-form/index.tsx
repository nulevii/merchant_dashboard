import React from 'react'
import { useSelector } from 'react-redux'

import sprite from '../../assets/icons.svg'
import { InitialStateInterface } from '../../store/reducer'

import ConfirmStage from './confirm-stage'
import RegStages from './reg-stages'
import ProgressMobileStepper from './stepper'
import Loader from '../loader'

function RegistrationForm (): JSX.Element {
  const isCompleteStage = useSelector((state: InitialStateInterface) => state.confirmStageBoolean)
  const loadingStatus = useSelector((state: InitialStateInterface) => state.loading)
  const step = useSelector((state: InitialStateInterface) => state.step)
  if (loadingStatus) {
    return <Loader/>
  }
  if (isCompleteStage) {
    return <ConfirmStage />
  }

  return (
    <section className='py-4 px-8 text-xs leading-4 '>
      <a href="#" className='mb-4 flex items-center gap-[2px]'>
      <svg className='w-8 h-8'>
        <use href={sprite + '#chad-logo'}></use>
      </svg>
      <h1 className='not-italic font-bold text-2xl leading-8 text-Unlinked21'>Chad</h1>
      </a>
      {(step !== 4) ? <ProgressMobileStepper /> : null}

      <RegStages />
    </section>
  )
}

export default RegistrationForm

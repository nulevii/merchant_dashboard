import React from 'react'
import { useSelector } from 'react-redux'

import sprite from '../../assets/icons.svg'
import { InitialStateInterface } from '../../store/reducer'

import ConfirmStage from './confirm-stage'
import RegStages from './reg-stages'
import ProgressMobileStepper from './stepper'
import Loader from '../loader'
// import bgImage from '../../assets/background.jpg'

function RegistrationForm (): JSX.Element {
  const isConfirmStage = useSelector((state: InitialStateInterface) => state.confirmStageBoolean)
  const loadingStatus = useSelector((state: InitialStateInterface) => state.loading)
  const step = useSelector((state: InitialStateInterface) => state.step)
  if (loadingStatus) {
    return <Loader/>
  }
  if (isConfirmStage) {
    return <div className='bg-form-pattern h-screen flex flex-grow items-center justify-center
    pc:max-w-[872px]'>
    <section className='flex-grow py-4 px-8 text-xs leading-4 h-screen bg-Shade100
    tablet:max-w-[540px] tablet:h-auto tablet:px-[52px] tablet:py-[3] tablet:shadow-lg tablet:rounded-lg'>
    <ConfirmStage />
    </section>
    </div>
  }

  return (
    <div className={`bg-form-pattern h-screen flex items-center justify-center flex-grow
    ${(step > 4) ? '' : 'pc:max-w-[872px]'}`}>
      <section className='flex-grow py-4 px-8 text-xs leading-4 h-screen bg-Shade100
      tablet:max-w-[540px] tablet:h-auto tablet:px-[72px] tablet:pt-20 tablet:pb-16 tablet:shadow-lg tablet:rounded-lg'>
        <a href="#" className='mb-4 flex items-center gap-[2px]'>
        <svg className='w-8 h-8'>
          <use href={sprite + '#chad-logo'}></use>
        </svg>
        <h1 className='not-italic font-bold text-2xl leading-8 text-Unlinked21'>Chad</h1>
        </a>
        {(step > 4) ? null : <ProgressMobileStepper />}

        <RegStages />
      </section>
    </div>
  )
}

export default RegistrationForm

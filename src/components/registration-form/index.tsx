import React from 'react'

import sprite from '../../assets/icons.svg'
import ProgressMobileStepper from './stepper'

import RegStages from './reg-stages'
function RegistrationForm (): JSX.Element {
  return (
    <section className='py-4 px-8 text-xs leading-4 '>
      <a href="#" className='mb-4 flex items-center gap-[2px]'>
      <svg className='w-8 h-8'>
        <use href={sprite + '#chad-logo'}></use>
      </svg>
      <h1 className='not-italic font-bold text-2xl leading-8 text-Unlinked21'>Chad</h1>
      </a>
      <ProgressMobileStepper />
      <RegStages />
    </section>
  )
}

export default RegistrationForm

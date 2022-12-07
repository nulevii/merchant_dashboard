import React from 'react'

import sprite from '../../assets/icons.svg'
import ProgressMobileStepper from './stepper'
function RegistrationForm (): JSX.Element {
  return (
    <section className='pt-4 pr-8 pb-10 pl-8 text-xs leading-4 w-screen'>
      <a href="#" className='flex items-center gap-[2px]'>
      <svg className='w-8 h-8'>
        <use href={sprite + '#chad-logo'}></use>
      </svg>
      <h2 className=' not-italic font-bold text-2xl leading-8 text-Unlinked21'>Chad</h2>
      </a>
      <article>
        <ProgressMobileStepper />
      </article>

    </section>
  )
}

export default RegistrationForm

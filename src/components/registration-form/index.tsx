import React from 'react'
import sprite from '../../assets/icons.svg'
function RegistrationForm (): JSX.Element {
  return (
    <section className='pt-4 pr-8 pb-10 pl-8'>
      <svg className='w-8 h-8 inline-block'>
        <use href={sprite + '#chad-logo'}></use>
      </svg>
      <h2 className='inline-block'>Chad</h2>
    </section>
  )
}

export default RegistrationForm

import React from 'react'
import { useDispatch } from 'react-redux'
import AdvantagesList from '../advantages-list'
import { supportEmailAdvantages } from '../../../../utilities/constants'
import { increaseStep } from '../../../../store/actions'

import sprite from '../../../../assets/icons.svg'
function StageThree (): JSX.Element {
  const dispatch = useDispatch()

  return (
    <>
      <h2 className='mb-2 font-semibold text-2xl leading-7 flex items-center text-DarkBlue20 flex-none order-7 self-stretch flex-grow-0'>Connect to customer support email</h2>
      <p className='mb-8 text-sm leading-5  text-Shade40 '>Allows Chad to send automated responses on your behalf from your usual support mailbox</p>
      <AdvantagesList Advantages={supportEmailAdvantages}/>
      <button className='mb-4  w-full  rounded-sm flex items-center text-sm font-medium  align-top border border-Unlinked9 text-Shade100 bg-Unlinked9' onClick={() => { dispatch(increaseStep()) }}>
      <svg className='w-12 h-12 inline-block bg-Shade100'>
        <use href={sprite + '#chad-logo'}></use>
      </svg>
      <span className='flex-grow'> Connect Gmail account</span>
        </button>
      <a className='text-center block cursor-pointer leading-[18px] text-Shade40'>I don’t use Gmail </a>

    </>
  )
}

export default StageThree

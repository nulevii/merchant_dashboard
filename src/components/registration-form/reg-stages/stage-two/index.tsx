import React from 'react'
import { useDispatch } from 'react-redux'

import { shopifyAdvantages } from '../../../../utilities/constants'
import AdvantagesList from '../advantages-list'
import { increaseStep } from '../../../../store/actions'
function StageTwo (): JSX.Element {
  const dispatch = useDispatch()

  return (
    <>
      <h2 className='mb-2 font-semibold text-2xl leading-7 flex items-center text-DarkBlue20 flex-none order-7 self-stretch flex-grow-0'>Connect to Shopify Store</h2>
      <p className='mb-8 text-sm leading-5  text-Shade40 '>Installs the Chad widget in your Shopify store and sets it up to display your customer’s order
       information and self-serve options.</p>
      <AdvantagesList Advantages={shopifyAdvantages} />
      <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0' onClick={() => { dispatch(increaseStep()) }}>Create account</button>
      <a className='text-center block cursor-pointer leading-[18px] text-Shade40'>I don’t use Shopify </a>

    </>
  )
}

export default StageTwo

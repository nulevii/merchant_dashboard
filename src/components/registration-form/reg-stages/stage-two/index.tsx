import React from 'react'
import { useDispatch } from 'react-redux'

import { shopifyAdvantages, stageTwoCaption, stageTwoText } from '../../../../utilities/constants'
import AdvantagesList from '../advantages-list'
import { openConfirmStage, setConfirmStage } from '../../../../store/actions'
import StageInfo from '../stage-info'
import { getStore } from '../../../../store/sagas'
function StageTwo (): JSX.Element {
  const dispatch = useDispatch()
  const onAddStore = (): void => {
    dispatch(openConfirmStage())
    dispatch(setConfirmStage('STORE_CONNECTED'))
  }
  return (
    <>
      <StageInfo stageCaption={stageTwoCaption} stageText={stageTwoText} />
      <AdvantagesList Advantages={shopifyAdvantages} />
      <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0' onClick={onAddStore }>Connect store</button>
      <a className='text-center block cursor-pointer leading-[18px] text-Shade40'>I don’t use Shopify </a>
    </>
  )
}

export default StageTwo

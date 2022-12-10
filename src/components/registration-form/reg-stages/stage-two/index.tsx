import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  shopifyAdvantages,
  stageTwoCaption,
  stageTwoText,
  notUseShopifyCaption,
  notUseShopifyText,
  platforms
} from '../../../../utilities/constants'
import AdvantagesList from '../advantages-list'
import { getStoreFetch, openLoading, toggleNotUseShopify, setConfirmStage, openConfirmStage } from '../../../../store/actions'
import StageInfo from '../stage-info'
import { InitialStateInterface } from '../../../../store/reducer'
import SelectElement from '../select'
function StageTwo (): JSX.Element {
  const dispatch = useDispatch()
  const notUseShopify = useSelector((state: InitialStateInterface) => state.notUseShopify)

  if (notUseShopify) {
    const onSubmit = (): void => {
      dispatch(toggleNotUseShopify())
      dispatch(setConfirmStage('PLATFORM_RESPONSE_STAGE'))
      dispatch(openConfirmStage())
    }
    const onConnect = (): void => {
      dispatch(toggleNotUseShopify())
    }
    return (
      <>
        <StageInfo stageCaption={notUseShopifyCaption} stageText={notUseShopifyText} />
        <SelectElement platforms={platforms}/>
        <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0'
        onClick={onSubmit }>
          Submit
        </button>
        <p className='text-center leading-[18px] text-Shade40'>
          Actually use Shopify?
          <a onClick={onConnect} className='text-ChadBlue0' href="#">
            {' '}Connect
          </a>
        </p>
      </>
    )
  }

  const onAddStore = (): void => {
    dispatch(openLoading())
    dispatch(getStoreFetch())
  }
  const onLink = (): void => {
    dispatch(toggleNotUseShopify())
  }
  return (
    <>
      <StageInfo stageCaption={stageTwoCaption} stageText={stageTwoText} />
      <AdvantagesList Advantages={shopifyAdvantages} />
      <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0'
      onClick={onAddStore }>
        Connect store
      </button>
      <a className='text-center block cursor-pointer leading-[18px] text-Shade40'
      onClick={onLink} >
        I don’t use Shopify
      </a>
    </>
  )
}

export default StageTwo

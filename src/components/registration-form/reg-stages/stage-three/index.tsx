import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdvantagesList from '../advantages-list'
import { supportEmailAdvantages, stageThreeCaption, stageThreeText, noGmailCaption, noGmailText, MailPlatforms } from '../../../../utilities/constants'
import { openLoading, getGmailFetch, toggleNotUseGoogle, setConfirmStage, openConfirmStage } from '../../../../store/actions'
import { InitialStateInterface } from '../../../../store/reducer'
import sprite from '../../../../assets/icons.svg'

import StageInfo from '../stage-info'
import SelectElement from '../select'
function StageThree (): JSX.Element {
  const dispatch = useDispatch()
  const notUseGoogle = useSelector((state: InitialStateInterface) => state.notUseGoogle)

  if (notUseGoogle) {
    const onSubmit = (): void => {
      dispatch(toggleNotUseGoogle())
      dispatch(setConfirmStage('PLATFORM_RESPONSE_STAGE'))
      dispatch(openConfirmStage())
    }
    const onConnect = (): void => {
      dispatch(toggleNotUseGoogle())
    }
    return (
      <>
        <StageInfo stageCaption={noGmailCaption} stageText={noGmailText} />
        <SelectElement platforms={MailPlatforms}/>
        <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0'
        onClick={onSubmit }>
          Submit
        </button>
        <p className='text-center leading-[18px] text-Shade40'>
          Actually use Gmail?
          <a onClick={onConnect} className='text-ChadBlue0' href="#">
            {' '}Connect
          </a>
        </p>
      </>
    )
  }
  const onAddGoogle = (): void => {
    dispatch(openLoading())
    dispatch(getGmailFetch())
  }
  const onLink = (): void => {
    dispatch(toggleNotUseGoogle())
  }
  return (
    <>
      <StageInfo stageCaption={stageThreeCaption} stageText={stageThreeText} />
      <AdvantagesList Advantages={supportEmailAdvantages}/>
      <button className='mb-4  w-full  rounded-sm flex items-center text-sm font-medium  align-top border border-Unlinked9 text-Shade100 bg-Unlinked9'
       onClick={onAddGoogle}>
      <svg className='w-12 h-12 inline-block bg-Shade100'>
        <use href={sprite + '#icon-google'}></use>
      </svg>
      <span className='flex-grow'> Connect Gmail account</span>
        </button>
      <a className='text-center block cursor-pointer leading-[18px] text-Shade40' onClick={onLink}>I don’t use Gmail </a>

    </>
  )
}

export default StageThree

import React from 'react'
import { useDispatch } from 'react-redux'
import AdvantagesList from '../advantages-list'
import { supportEmailAdvantages, stageThreeCaption, stageThreeText } from '../../../../utilities/constants'
import { openLoading, getGmailFetch } from '../../../../store/actions'

import sprite from '../../../../assets/icons.svg'

import StageInfo from '../stage-info'
function StageThree (): JSX.Element {
  const dispatch = useDispatch()
  const onAddGoogle = (): void => {
    dispatch(openLoading())
    dispatch(getGmailFetch())
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
      <a className='text-center block cursor-pointer leading-[18px] text-Shade40'>I don’t use Gmail </a>

    </>
  )
}

export default StageThree

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { increaseStep, closeConfirmStage } from '../../../store/actions'

import ConfirmStageLayout from './confirm-stage-layout'

function ConfirmStage (): JSX.Element {
  const dispatch = useDispatch()
  const confirmStage = useSelector((state: InitialStateInterface) => state.confirmStage)

  if (confirmStage === 'STORE_CONNECTED') {
    const buttonAction = (): void => {
      dispatch(closeConfirmStage())
      dispatch(increaseStep())
    }
    const onLink = (): void => {
      dispatch(closeConfirmStage())
    }
    const properties = {
      image: 'https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2021/07/salesforce-logo.jpg?w=1024',
      caption: 'Store Connected',
      text: 'Chad is now able to manage customer support requests for [STORE-NAME].',
      confirmIcon: true,
      button: 'Continue',
      buttonAction,
      linkText: 'Wrong store?',
      link: 'Connect another one',
      onLink
    }

    return <ConfirmStageLayout properties ={properties}/>
  }

  return <div>loading</div>
}

export default ConfirmStage

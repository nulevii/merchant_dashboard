import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { increaseStep, closeConfirmStage, setConfirmStage } from '../../../store/actions'

import ConfirmStageLayout from './confirm-stage-layout'

function ConfirmStage (): JSX.Element {
  const dispatch = useDispatch()
  const confirmStage = useSelector((state: InitialStateInterface) => state.confirmStage)

  if (confirmStage === 'STORE_CONNECTED') {
    const shopifyStore = useSelector((state: InitialStateInterface) => state.shopifyStore)
    const image = (shopifyStore?.shop_logo_url !== undefined) ? shopifyStore?.shop_logo_url : 'https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2021/07/salesforce-logo.jpg?w=1024'
    const storeName: string = ((shopifyStore?.shop_name !== undefined) ? shopifyStore?.shop_name : 'Not found').toUpperCase()
    const buttonAction = (): void => {
      dispatch(closeConfirmStage())
      dispatch(increaseStep())
    }
    const onLink = (): void => {
      dispatch(closeConfirmStage())
    }
    const properties = {
      image,
      caption: 'Store Connected',
      text: `Chad is now able to manage customer support requests for ${storeName}.`,
      confirmIcon: true,
      button: 'Continue',
      buttonAction,
      linkText: 'Wrong store?',
      link: 'Connect another one',
      onLink
    }

    return <ConfirmStageLayout properties ={properties}/>
  }

  if (confirmStage === 'STORE_ALREADY_CONNECTED') {
    const shopifyStore = useSelector((state: InitialStateInterface) => state.shopifyStore)
    const image = (shopifyStore?.shop_logo_url !== undefined) ? shopifyStore?.shop_logo_url : 'https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2021/07/salesforce-logo.jpg?w=1024'
    const storeName: string = ((shopifyStore?.shop_name !== undefined) ? shopifyStore?.shop_name : 'Not found').toUpperCase()
    const buttonAction = (): void => {
      dispatch(closeConfirmStage())
      dispatch(increaseStep())
    }
    const onLink = (): void => {
      dispatch(closeConfirmStage())
    }
    const properties = {
      image,
      caption: `${storeName} already connected `,
      confirmIcon: true,
      button: 'Continue',
      buttonAction,
      linkText: 'Wrong store?',
      link: 'Connect another one',
      onLink
    }

    return <ConfirmStageLayout properties ={properties}/>
  }

  if (confirmStage === 'FINAL_STAGE') {
    const buttonAction = (): void => {
      dispatch(setConfirmStage('LOGIN'))
    }
    const properties = {
      caption: 'You’re ready to go!',
      text: 'Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer.',
      confirmIcon: false,
      button: 'Ok',
      buttonAction
    }

    return <ConfirmStageLayout properties ={properties}/>
  }

  return <div>loading</div>
}

export default ConfirmStage

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { setStep, closeConfirmStage, addAccountInfo } from '../../../store/actions'

import ConfirmStageLayout from './confirm-stage-layout'
import Loader from '../../loader'

function ConfirmStage (): JSX.Element {
  const dispatch = useDispatch()
  const confirmStage = useSelector((state: InitialStateInterface) => state.confirmStage)

  if (confirmStage === 'STORE_CONNECTED') {
    const shopifyStore = useSelector((state: InitialStateInterface) => state.shopifyStore)
    const image = (shopifyStore?.shop_logo_url !== undefined) ? shopifyStore?.shop_logo_url : 'https://wp.salesforce.com/en-us/wp-content/uploads/sites/4/2021/07/salesforce-logo.jpg?w=1024'
    const storeName: string = ((shopifyStore?.shop_name !== undefined) ? shopifyStore?.shop_name : 'Not found').toUpperCase()
    const buttonAction = (): void => {
      dispatch(closeConfirmStage())
      dispatch(setStep(3))
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
      dispatch(setStep(3))
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

  if (confirmStage === 'PLATFORM_RESPONSE_STAGE') {
    const buttonAction = (): void => {
      dispatch(addAccountInfo({ email: '', password: '', name: '', google_token: '', shop_token: '' }))
      dispatch(setStep(4))
      dispatch(closeConfirmStage())
    }
    const properties = {
      caption: 'Response received',
      text: 'Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform.',
      confirmIcon: false,
      button: 'Done',
      buttonAction
    }

    return <ConfirmStageLayout properties ={properties}/>
  }

  if (confirmStage === 'FINAL_STAGE') {
    const buttonAction = (): void => {
      dispatch(setStep(5))
      dispatch(closeConfirmStage())
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

  if (confirmStage === 'USE_DESKTOP_STAGE') {
    const { email } = useSelector((state: InitialStateInterface) => state.accountInfo)
    const shopLogo = useSelector((state: InitialStateInterface) => state.shopifyStore?.shop_logo_url)
    const buttonAction = (): void => {
      dispatch(setStep(5))
      dispatch(closeConfirmStage())
    }
    const onLink = (): void => {
      dispatch(addAccountInfo({ email: '', password: '', name: '', google_token: '', shop_token: '' }))
      dispatch(setStep(5))
      dispatch(closeConfirmStage())
    }
    const properties = {
      image: shopLogo,
      caption: 'Use your desktop to access Chad',
      text: 'Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer.',
      confirmIcon: false,
      button: 'Ok',
      buttonAction,
      linkText: `Not ${email}?`,
      link: 'Logout',
      onLink
    }

    return <ConfirmStageLayout properties ={properties}/>
  }

  return <Loader />
}

export default ConfirmStage

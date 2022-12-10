import { Actions } from './actions'
import { AccountInfoInterface, shopifyStoreInterface } from './interfaces'
import {
  OPEN_LOADING,
  CLOSE_LOADING,
  SET_STEP,
  CLOSE_CONFIRM_STAGE,
  OPEN_CONFIRM_STAGE,
  SET_CONFIRM_STAGE,
  ADD_ACCOUNT_INFO,
  TOGLE_NOT_USE_GOOGLE,
  TOGLE_NOT_USE_SHOPIFY,
  GET_STORE_SUCCESS,
  GET_GMAIL_SUCCESS,
  POST_REGISTER_SUCCESS
} from './action-types'

export const initialState: InitialStateInterface = {
  loading: false,
  step: 1,
  confirmStageBoolean: false,
  confirmStage: '',
  accountInfo: {
    name: '',
    email: '',
    password: '',
    shop_token: '',
    google_token: ''
  },
  shopifyStore: null,
  gmailKey: '',
  notUseShopify: false,
  notUseGoogle: false
}

export interface InitialStateInterface {
  loading: boolean
  step: number
  confirmStageBoolean: boolean
  confirmStage: string
  accountInfo: AccountInfoInterface
  gmailKey: string
  shopifyStore: shopifyStoreInterface | null
  notUseShopify: boolean
  notUseGoogle: boolean
}

export function reducer (state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
  switch (action.type) {
    case OPEN_LOADING: {
      const loading = true
      return { ...state, loading } }
    case CLOSE_LOADING: {
      const loading = false
      return { ...state, loading } }
    case SET_STEP: {
      const step = action.payload
      return { ...state, step } }
    case OPEN_CONFIRM_STAGE: {
      const newConfirmStageBoolean = true
      return { ...state, confirmStageBoolean: newConfirmStageBoolean } }
    case CLOSE_CONFIRM_STAGE: {
      const newConfirmStageBoolean = false
      return { ...state, confirmStageBoolean: newConfirmStageBoolean } }
    case SET_CONFIRM_STAGE: {
      const newConfirmStage = action.payload
      return { ...state, confirmStage: newConfirmStage } }
    case TOGLE_NOT_USE_SHOPIFY: {
      const notUseShopify = !state.notUseShopify
      return { ...state, notUseShopify } }
    case TOGLE_NOT_USE_GOOGLE: {
      const notUseGoogle = !state.notUseGoogle
      return { ...state, notUseGoogle } }
    case ADD_ACCOUNT_INFO: {
      const newAccountInfo = { ...state.accountInfo, ...action.payload }
      return { ...state, accountInfo: newAccountInfo } }

    case GET_STORE_SUCCESS: {
      const shopifyResponse = action.payload as shopifyStoreInterface
      console.log(shopifyResponse)
      const loading = false
      const confirmStageBoolean = true
      if (state.accountInfo.shop_token === shopifyResponse.token) {
        const confirmStage = 'STORE_ALREADY_CONNECTED'
        return { ...state, confirmStage, loading, confirmStageBoolean }
      }
      const newAccountInfo = { ...state.accountInfo }
      newAccountInfo.shop_token = shopifyResponse.token
      const confirmStage = 'STORE_CONNECTED'
      return { ...state, shopifyStore: shopifyResponse, accountInfo: newAccountInfo, loading, confirmStageBoolean, confirmStage }
    }
    case GET_GMAIL_SUCCESS: {
      const googleResponse = action.payload as shopifyStoreInterface
      console.log(googleResponse)
      const newAccountInfo = { ...state.accountInfo }
      newAccountInfo.google_token = googleResponse.token

      return { ...state, accountInfo: newAccountInfo }
    }
    case POST_REGISTER_SUCCESS: {
      const confirmStageBoolean = true
      const confirmStage = 'FINAL_STAGE'
      const loading = false
      return { ...state, confirmStageBoolean, confirmStage, loading }
    }
    default:
      return state
  }
}

import { Actions } from './actions'
import { AccountInfoInterface, shopifyStoreInterface } from './interfaces'
import {
  OPEN_LOADING,
  CLOSE_LOADING,
  INCREASE_STEP,
  DECREASE_STEP,
  CLOSE_CONFIRM_STAGE,
  OPEN_CONFIRM_STAGE,
  SET_CONFIRM_STAGE,
  ADD_ACCOUNT_INFO,
  GET_STORE_SUCCESS
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
  gmailKey: ''
}

export interface InitialStateInterface {
  loading: boolean
  step: number
  confirmStageBoolean: boolean
  confirmStage: string
  accountInfo: AccountInfoInterface
  gmailKey: string
  shopifyStore: shopifyStoreInterface | null
}

export function reducer (state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
  switch (action.type) {
    case OPEN_LOADING: {
      const loading = true
      return { ...state, loading } }
    case CLOSE_LOADING: {
      const loading = false
      return { ...state, loading } }
    case INCREASE_STEP: {
      const increasedStep = state.step + 1
      return { ...state, step: increasedStep } }
    case DECREASE_STEP: {
      const decreasedStep = state.step - 1
      return { ...state, step: decreasedStep } }
    case OPEN_CONFIRM_STAGE: {
      const newConfirmStageBoolean = true
      return { ...state, confirmStageBoolean: newConfirmStageBoolean } }
    case CLOSE_CONFIRM_STAGE: {
      const newConfirmStageBoolean = false
      return { ...state, confirmStageBoolean: newConfirmStageBoolean } }
    case SET_CONFIRM_STAGE: {
      const newConfirmStage = action.payload
      return { ...state, confirmStage: newConfirmStage } }
    case ADD_ACCOUNT_INFO: {
      const newAccountInfo = { ...state.accountInfo, ...action.payload }
      return { ...state, accountInfo: newAccountInfo } }

    case GET_STORE_SUCCESS: {
      const newshopifyStore = action.payload as shopifyStoreInterface
      const loading = false
      const confirmStageBoolean = true
      if (state.accountInfo.shop_token === newshopifyStore.token) {
        const confirmStage = 'STORE_ALREADY_CONNECTED'
        return { ...state, confirmStage, loading, confirmStageBoolean }
      }
      const newAccountInfo = { ...state.accountInfo }
      newAccountInfo.shop_token = newshopifyStore.token
      const confirmStage = 'STORE_CONNECTED'
      return { ...state, shopifyStore: newshopifyStore, accountInfo: newAccountInfo, loading, confirmStageBoolean, confirmStage }
    }
    default:
      return state
  }
}

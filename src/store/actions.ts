import {
  OPEN_LOADING, CLOSE_LOADING,
  SET_STEP,
  CLOSE_CONFIRM_STAGE,
  OPEN_CONFIRM_STAGE,
  SET_CONFIRM_STAGE,
  TOGLE_NOT_USE_GOOGLE,
  TOGLE_NOT_USE_SHOPIFY,
  ADD_ACCOUNT_INFO,
  GET_STORE_FETCH,
  GET_STORE_SUCCESS,
  GET_GMAIL_FETCH,
  GET_GMAIL_SUCCESS,
  POST_REGISTER_FETCH,
  POST_REGISTER_SUCCESS
} from './action-types'

import { AccountInfoInterface } from './interfaces'

export const openLoading = (): OpenLoadingInterface => ({
  type: OPEN_LOADING
})
interface OpenLoadingInterface {
  type: typeof OPEN_LOADING
}

export const closeLoading = (): CloseLoadingInterface => ({
  type: CLOSE_LOADING
})
interface CloseLoadingInterface {
  type: typeof CLOSE_LOADING
}

export const setStep = (payload: number): SetStepInterface => ({
  payload,
  type: SET_STEP
})
interface SetStepInterface {
  type: typeof SET_STEP
  payload: number
}

export const openConfirmStage = (): OpenConfirmStageInterface => ({
  type: OPEN_CONFIRM_STAGE
})
interface OpenConfirmStageInterface {
  type: typeof OPEN_CONFIRM_STAGE
}

export const setConfirmStage = (payload: string): SetConfirmStageInterface => ({
  type: SET_CONFIRM_STAGE,
  payload
})
interface SetConfirmStageInterface {
  type: typeof SET_CONFIRM_STAGE
  payload: string
}

export const closeConfirmStage = (): CloseConfirmStageInterface => ({
  type: CLOSE_CONFIRM_STAGE
})
interface CloseConfirmStageInterface {
  type: typeof CLOSE_CONFIRM_STAGE
}

export const toggleNotUseShopify = (): ToggleNotUseShopifyInterface => ({
  type: TOGLE_NOT_USE_SHOPIFY
})
interface ToggleNotUseShopifyInterface {
  type: typeof TOGLE_NOT_USE_SHOPIFY
}

export const toggleNotUseGoogle = (): ToggleNotUseGoogleInterface => ({
  type: TOGLE_NOT_USE_GOOGLE
})
interface ToggleNotUseGoogleInterface {
  type: typeof TOGLE_NOT_USE_GOOGLE
}

export const addAccountInfo = (payload: AccountInfoInterface): AddAccountInfoInterface => ({
  type: ADD_ACCOUNT_INFO,
  payload
})
interface AddAccountInfoInterface {
  type: typeof ADD_ACCOUNT_INFO
  payload: AccountInfoInterface
}

export const getStoreFetch = (): GetStoreFetchInterface => ({
  type: GET_STORE_FETCH
})
interface GetStoreFetchInterface {
  type: typeof GET_STORE_FETCH
}

interface GetStoreSuccessInterface {
  type: typeof GET_STORE_SUCCESS
  payload: object
}

export const getGmailFetch = (): GetGmailFetchInterface => ({
  type: GET_GMAIL_FETCH
})
interface GetGmailFetchInterface {
  type: typeof GET_GMAIL_FETCH
}

interface GetGmailSuccessInterface {
  type: typeof GET_GMAIL_SUCCESS
  payload: object
}

export const postRegisterFetch = (payload: AccountInfoInterface): PostRegisterFetchInterface => ({
  type: POST_REGISTER_FETCH,
  payload
})
interface PostRegisterFetchInterface {
  type: typeof POST_REGISTER_FETCH
  payload: AccountInfoInterface
}

interface PostRegisterSuccessInterface {
  type: typeof POST_REGISTER_SUCCESS
  result: object
}

export type Actions =
OpenLoadingInterface |
CloseLoadingInterface |
SetStepInterface |
AddAccountInfoInterface |
OpenConfirmStageInterface |
CloseConfirmStageInterface |
SetConfirmStageInterface |
ToggleNotUseGoogleInterface |
ToggleNotUseShopifyInterface |
GetStoreFetchInterface |
GetStoreSuccessInterface |
GetGmailFetchInterface |
GetGmailSuccessInterface |
PostRegisterFetchInterface |
PostRegisterSuccessInterface

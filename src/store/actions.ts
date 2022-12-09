import {
  INCREASE_STEP, DECREASE_STEP,
  CLOSE_CONFIRM_STAGE,
  OPEN_CONFIRM_STAGE,
  SET_CONFIRM_STAGE,
  ADD_ACCOUNT_INFO,
  GET_STORE_FETCH,
  GET_STORE_SUCCESS
} from './action-types'
import { AccountInfoInterface } from './interfaces'
export const increaseStep = (): IncreaseStepInterface => ({
  type: INCREASE_STEP
})
interface IncreaseStepInterface {
  type: typeof INCREASE_STEP
}

export const decreaseStep = (): DecreaseStepInterface => ({
  type: DECREASE_STEP
})
interface DecreaseStepInterface {
  type: typeof DECREASE_STEP
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

export const addAccountInfo = (payload: AccountInfoInterface): AddAccountInfoInterface => ({
  type: ADD_ACCOUNT_INFO,
  payload
})
interface AddAccountInfoInterface {
  type: typeof ADD_ACCOUNT_INFO
  payload: AccountInfoInterface
}

export const getStoreFetch = (): any => ({
  type: GET_STORE_FETCH
})

export type Actions =
IncreaseStepInterface |
DecreaseStepInterface |
AddAccountInfoInterface |
OpenConfirmStageInterface |
CloseConfirmStageInterface |
SetConfirmStageInterface

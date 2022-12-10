import {
  OPEN_LOADING, CLOSE_LOADING,
  INCREASE_STEP, DECREASE_STEP,
  CLOSE_CONFIRM_STAGE,
  OPEN_CONFIRM_STAGE,
  SET_CONFIRM_STAGE,
  ADD_ACCOUNT_INFO,
  GET_STORE_FETCH,
  GET_STORE_SUCCESS
} from './action-types'

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

interface LoginInfo { email: string, name: string, password: string }
export const addAccountInfo = (payload: LoginInfo): AddAccountInfoInterface => ({
  type: ADD_ACCOUNT_INFO,
  payload
})
interface AddAccountInfoInterface {
  type: typeof ADD_ACCOUNT_INFO
  payload: LoginInfo
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

export type Actions =
OpenLoadingInterface |
CloseLoadingInterface |
IncreaseStepInterface |
DecreaseStepInterface |
AddAccountInfoInterface |
OpenConfirmStageInterface |
CloseConfirmStageInterface |
SetConfirmStageInterface |
GetStoreFetchInterface |
GetStoreSuccessInterface

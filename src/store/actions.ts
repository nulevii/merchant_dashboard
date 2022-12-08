import { INCREASE_STEP, DECREASE_STEP, ADD_ACCOUNT_INFO } from './action-types'
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

export const addAccountInfo = (payload: AccountInfoInterface): AddAccountInfoInterface => ({
  type: ADD_ACCOUNT_INFO,
  payload
})
interface AddAccountInfoInterface {
  type: typeof ADD_ACCOUNT_INFO
  payload: AccountInfoInterface
}

export type Actions =
IncreaseStepInterface |
DecreaseStepInterface |
AddAccountInfoInterface

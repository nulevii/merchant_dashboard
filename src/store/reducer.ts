import { Actions } from './actions'
import { AccountInfoInterface } from './interfaces'
import { INCREASE_STEP, DECREASE_STEP, ADD_ACCOUNT_INFO } from './action-types'
export const initialState: InitialStateInterface = {
  step: 1,
  accountInfo: {
    userName: '',
    userEmail: '',
    userPassword: ''
  },
  shopifyKey: '',
  gmailKey: ''
}

export interface InitialStateInterface {
  step: number
  accountInfo: AccountInfoInterface
  gmailKey: string
  shopifyKey: string
}

export function reducer (state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
  switch (action.type) {
    case INCREASE_STEP: {
      const increasedStep = state.step + 1
      return { ...state, step: increasedStep } }
    case DECREASE_STEP: {
      const decreasedStep = state.step - 1
      return { ...state, step: decreasedStep } }

    case ADD_ACCOUNT_INFO: {
      const newAccountInfo = action.payload
      return { ...state, accountInfo: newAccountInfo } }
    default:
      return state
  }
}

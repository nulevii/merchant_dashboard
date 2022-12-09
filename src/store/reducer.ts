import { Actions } from './actions'
import { AccountInfoInterface } from './interfaces'
import { INCREASE_STEP, DECREASE_STEP, CLOSE_CONFIRM_STAGE, OPEN_CONFIRM_STAGE, SET_CONFIRM_STAGE, ADD_ACCOUNT_INFO } from './action-types'
export const initialState: InitialStateInterface = {
  step: 1,
  confirmStageBoolean: false,
  confirmStage: '',
  accountInfo: {
    name: '',
    email: '',
    password: ''
  },
  shopifyKey: '',
  gmailKey: ''
}

export interface InitialStateInterface {
  step: number
  confirmStageBoolean: boolean
  confirmStage: string
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
    case OPEN_CONFIRM_STAGE: {
      const newConfirmStageBoolean = true
      console.log('je;;')
      return { ...state, confirmStageBoolean: newConfirmStageBoolean } }
    case CLOSE_CONFIRM_STAGE: {
      const newConfirmStageBoolean = false
      return { ...state, confirmStageBoolean: newConfirmStageBoolean } }
    case SET_CONFIRM_STAGE: {
      const newConfirmStage = action.payload
      return { ...state, confirmStage: newConfirmStage } }

    case ADD_ACCOUNT_INFO: {
      const newAccountInfo = action.payload
      return { ...state, accountInfo: newAccountInfo } }
    default:
      return state
  }
}

import { Actions } from './actions'
import {
  INCREASE_STEP, DECREASE_STEP
} from './action-types'
export const initialState: InitialStateInterface = {
  step: 1
}

export interface InitialStateInterface {
  step: number
}

export function reducer (state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
  switch (action.type) {
    case INCREASE_STEP: {
      const increasedStep = state.step + 1
      return { ...state, step: increasedStep } }
    case DECREASE_STEP: {
      const decreasedStep = state.step - 1
      return { ...state, step: decreasedStep } }
    default:
      return state
  }
}

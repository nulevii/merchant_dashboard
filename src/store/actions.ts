import { INCREASE_STEP, DECREASE_STEP } from './action-types'

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

export type Actions =
IncreaseStepInterface |
DecreaseStepInterface

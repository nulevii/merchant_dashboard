import * as React from 'react'
import { InitialStateInterface } from '../../../store/reducer'
import { useSelector } from 'react-redux'

import StageOne from './stage-one'
import StageTwo from './stage-two'
import StageThree from './stage-three'
function RegStages (): JSX.Element {
  const step = useSelector((state: InitialStateInterface) => state.step)

  if (step === 1) {
    return <StageOne />
  }

  if (step === 2) {
    return <StageTwo />
  }
  if (step === 3) {
    return <StageThree />
  }
  return <div></div>
}

export default RegStages

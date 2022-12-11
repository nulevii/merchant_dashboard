import React from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import ProgressMobileStepper from './stepper'
function RegistrationStage (): JSX.Element {
  const step = useSelector((state: InitialStateInterface) => state.step)
  return (
<div className={`hidden ${(step > 4) ? '' : 'pc:flex'} items-center justify-center h-screen flex-grow bg-gradient-to-t from-[#19476C] to-[#0D3251]`}>
    <ProgressMobileStepper />
</div>
  )
}

export default RegistrationStage

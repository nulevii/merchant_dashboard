import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { increaseStep, addAccountInfo } from '../../../../store/actions'
import { InitialStateInterface } from '../../../../store/reducer'
import { validationRegExp, stageOneCaption, stageOneText } from '../../../../utilities/constants'

import StageInfo from '../stage-info'
import sprite from '../../../../assets/icons.svg'
function StageOne (): JSX.Element {
  const dispatch = useDispatch()

  const [passwordShown, setPasswordShown] = useState(false)
  const { name, email, password } = useSelector((state: InitialStateInterface) => state.accountInfo)
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched',
    defaultValues: { name, email, password }
  })

  const onTogglePassword = (): void => {
    setPasswordShown(!passwordShown)
  }

  return (
    <>
      <StageInfo stageCaption={stageOneCaption} stageText={stageOneText} />
      <form onSubmit={ handleSubmit(({ email, name, password }) => {
        dispatch(increaseStep())
        dispatch(addAccountInfo({ email, name, password }))
      })}>
      <label className='mb-6 block'>
        <p className='mb-2 font-medium text-xs leading-4 text-Shade40'>Email</p><section></section>

        <input className={`w-full py-[10px] pl-4 pr-[10px] rounded text-base text-MDShade0 bg-MDShade100 placeholder-MDShade80
         outline outline-1 transition-[outline] ${(errors.email !== undefined) ? 'outline-Unlinked19' : 'focus:outline-ChadBlue0'}`}
          placeholder='gigachad@trychad.com' type="text"
         {...register('email', { required: 'This field cannot be empty', pattern: { value: validationRegExp, message: 'Please enter valid email' } })} />
         <p className='font-light text-xs text-Unlinked19'>{errors.email?.message as string}</p>
      </label>

      <label className='mb-6 block'>
        <p className='mb-2 font-medium text-xs leading-4 text-Shade40'>Your name</p>
        <input className={`w-full py-[10px] pl-4 pr-[10px] rounded text-base text-MDShade0 bg-MDShade100 placeholder-MDShade80
         outline outline-1 transition-[outline] ${(errors.name !== undefined) ? 'outline-Unlinked19' : 'focus:outline-ChadBlue0'}`}
         placeholder='Giga Chad' type="text"
         {...register('name', { required: 'This field cannot be empty' })} />
         <p className='font-light text-xs text-Unlinked19'>{errors.name?.message as string}</p>
      </label>

      <label className='mb-6 block'>
        <p className='mb-2 font-medium text-xs leading-4 text-Shade40'>Password</p>
        <div className='flex items-center relative'>
        <input className={`w-full py-[10px] pl-4 pr-8 rounded text-base text-MDShade0 bg-MDShade100 placeholder-MDShade80
         outline outline-1 transition-[outline] ${(errors.password !== undefined) ? 'outline-Unlinked19' : 'focus:outline-ChadBlue0'}`}
         placeholder='Enter password' type={passwordShown ? 'text' : 'password'}
         {...register('password', { required: 'This field cannot be empty', minLength: { value: 8, message: 'Minimum password length is 8 characters' } })} />
          <button className='absolute right-2' onClick={onTogglePassword} type='button'>
         <svg className='w-4 h-4 fill-transparent stroke-Shade40'>
            <use href={sprite + (passwordShown ? '#icon_eye' : '#icon_eye-off')}></use>
         </svg>
         </button>
         </div>
        <p className='font-light text-xs text-Unlinked19'>{errors.password?.message as string}</p>
      </label>

      <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0' type="submit">Create account</button>
      </form>
      <p className='text-center leading-[18px] text-Shade40'>Already have an account? <a className='text-ChadBlue0' href="#">Login</a> </p>
    </>
  )
}

export default StageOne

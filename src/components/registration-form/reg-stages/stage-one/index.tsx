import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { increaseStep } from '../../../../store/actions'
import { InitialStateInterface } from '../../../../store/reducer'
import { validationRegExp } from '../../../../utilities/constants'

function StageOne (): JSX.Element {
  const dispatch = useDispatch()
  const { userName, userEmail, userPassword } = useSelector((state: InitialStateInterface) => state.accountInfo)
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <>
      <h2 className='mb-2 font-semibold text-2xl leading-7 flex items-center text-DarkBlue20 flex-none order-7 self-stretch flex-grow-0'>Welcome to Chad</h2>
      <p className='mb-8 text-sm leading-5  text-Shade40 '>Go live in 10 minutes!
       Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</p>

      <form onSubmit={handleSubmit((data) => {
        console.log(data)
        dispatch(increaseStep())
      })}>
      <label className='mb-6 block'>
        <p className='mb-2 font-medium text-xs leading-4 text-Shade40'>Email</p>
        <input className='w-full py-[10px] pl-4 pr-[10px] rounded text-base   text-MDShade0 bg-MDShade100 placeholder-MDShade80
         outline outline-1 outline-transparent hover:outline-ChadBlue0 focus:outline-ChadBlue0 transition-[outline]'
         style={{ outlineColor: (errors.email !== null) ? 'red' : '' }} placeholder='gigachad@trychad.com' type="email"
         {...register('email', { required: 'This field cannot be empty', pattern: { value: validationRegExp, message: 'Please enter valid email' } })} />
         <p className=' font-medium text-xs leading-4 text-Shade40'>{errors.email?.message as string}</p>
      </label>

      <label className='mb-6 block'>
        <p className='mb-2 font-medium text-xs leading-4 text-Shade40'>Your name</p>
        <input className='w-full py-[10px] pl-4 pr-[10px] rounded text-base   text-MDShade0 bg-MDShade100 placeholder-MDShade80
         outline outline-1 outline-transparent hover:outline-ChadBlue0 focus:outline-ChadBlue0 transition-[outline]'

         placeholder='Giga Chad' type="text"
         {...register('name', { required: 'This field cannot be empty' })} />
         <p className=' font-medium text-xs leading-4 text-Shade40'>{errors.name?.message as string}</p>
      </label>

      <label className='mb-6 block'>
        <p className='mb-2 font-medium text-xs leading-4 text-Shade40'>Password</p>
        <input className='w-full py-[10px] pl-4 pr-[10px] rounded text-base text-MDShade0 bg-MDShade100 placeholder-MDShade80
         outline outline-1 outline-transparent hover:outline-ChadBlue0 focus:outline-ChadBlue0 transition-[outline]'
         placeholder='Enter password' type="password"
         {...register('password', { required: 'This field cannot be empty' })} />
        <p className=' font-medium text-xs leading-4 text-Shade40'>{errors.password?.message as string}</p>
      </label>

      <button className='mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0' type="submit">Create account</button>
      </form>
      <p className='text-center leading-[18px] text-Shade40'>Already have an account? <a className='text-ChadBlue0' href="#">Login</a> </p>
    </>
  )
}

export default StageOne

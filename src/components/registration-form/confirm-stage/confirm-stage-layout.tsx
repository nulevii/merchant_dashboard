import React from 'react'
import sprite from '../../../assets/icons.svg'
import succesImage from '../../../assets/success.png'
function ConfirmStageLayout ({ properties }:
{ properties: {
  caption?: string
  text?: string
  image?: string
  confirmIcon: boolean
  button: string
  buttonAction: () => void
  linkText?: string
  link?: string
  onLink?: () => void } }): JSX.Element {
  const { caption, text, image, confirmIcon, button, buttonAction, linkText, link, onLink } = properties
  const userImage = (image !== undefined) ? image : succesImage
  return <section className="pt-28 pb-4 px-8 text-xs leading-4 flex flex-col items-center">
      <div className="relative">
        <img
          className="w-20 h-20   mb-8 border object-cover rounded-full"
          src= {userImage}
          alt="Shop logo"
        />
        {confirmIcon
          ? <svg className="w-6 h-6 p-1 inline-block rounded-full absolute top-0 right-0 stroke-2 stroke-Shade100 fill-transparent bg-Success10">
          <use href={sprite + '#icon_check'}></use>
        </svg>
          : null}

      </div>
      <h2 className="mb-2 text-center font-medium text-base leading-5 text-DarkBlue20">
        {caption}
      </h2>
      <p className="mb-8 text-center text-sm leading-5  text-Shade40">
      {text}
      </p>
      <button
        className="mb-4  w-full py-[10px] rounded-lg text-sm font-medium  align-top text-Shade100 bg-ChadBlue0"
        type="button"
        onClick={buttonAction}
      >
        {button}
      </button>
      <p className="text-center leading-[18px] text-Shade40">
        {linkText}{' '}
        <a onClick={onLink} className="text-ChadBlue0" href="#">
          {link}
        </a>
      </p>
    </section>
}

export default ConfirmStageLayout

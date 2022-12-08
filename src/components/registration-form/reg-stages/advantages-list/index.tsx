import React from 'react'
import sprite from '../../../../assets/icons.svg'
import { generateKey } from '../../../../utilities/keyGenerator'
function AdvantagesList ({ Advantages }: { Advantages: Array<{ AdvantageHeading: string, AdvantageText: string }> }): JSX.Element {
  return (
    <ul className='p-4 mb-8 rounded-lg bg-MDShade100'>
      {Advantages.map(({ AdvantageHeading, AdvantageText }) => {
        return (
          <li key={generateKey()} className='pl-6 mb-4'>
          <h3 className='relative flex items-center font-medium text-sm leading-5 text-DarkBlue20'>
            <svg className='w-4 h-4 inline-block absolute left-[-24px] fill-transparent stroke-Success10'>
              <use href={sprite + '#icon_check'}></use>
            </svg>
            {AdvantageHeading}
          </h3>
          <p className='text-Shade40 leading-[18px]'>{AdvantageText}</p>
        </li>
        )
      })}
    </ul>
  )
}

export default AdvantagesList

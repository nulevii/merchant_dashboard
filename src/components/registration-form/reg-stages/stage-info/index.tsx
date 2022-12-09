import React from 'react'

function StageInfo ({ stageCaption, stageText }: { stageCaption: string, stageText: string }): JSX.Element {
  return (
      <>
      <h2 className='mb-2 font-semibold text-2xl leading-7 flex items-center text-DarkBlue20 flex-none order-7 self-stretch flex-grow-0'>
        {stageCaption}
      </h2>
      <p className='mb-8 text-sm leading-5  text-Shade40 '>
        {stageText}
      </p>
     </>
  )
}

export default StageInfo

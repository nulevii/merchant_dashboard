import { CircularProgress, CircularProgressProps, circularProgressClasses } from '@mui/material'
import React from 'react'

function Loader (): JSX.Element {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-Shade100 '>
      <CircularProgress
      className='mb-5'
      variant="indeterminate"
      disableShrink
      sx={{
        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
        animationDuration: '750ms',

        left: 0
      }}
      size={120}
      thickness={4}
      />
      <div>One moment please...</div>
  </div>
  )
}

export default Loader

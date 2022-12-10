import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

function SelectElement ({ platforms }: { platforms: string[] }): JSX.Element {
  const [platform, setPlatform] = React.useState<string>('none')

  const handleChange = (event: SelectChangeEvent<typeof platform>): void => {
    const {
      target: { value }
    } = event
    setPlatform(
      value
    )
  }
  return (
    <div>
      <p className='mb-2 text-Shade40 font-medium text-xs '>Platform</p>
    <FormControl className='mb-8 border-0 bg-MDShade100' sx={{ width: 1 }}>
      <Select
      className='h-11 '
      placeholder='afsdfasdf'
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
        value={platform}
        onChange={handleChange}
      >
          <MenuItem value="none" disabled>
            Select Platform
          </MenuItem>
        {platforms.map((platform) => (
          <MenuItem
            key={platform}
            value={platform}
          >
            {platform}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
  )
}

export default SelectElement

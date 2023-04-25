import { Stack, Typography, Divider } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={8}>
      <Typography variant='caption'>
        <u>Terms</u>
      </Typography>

      <Typography variant='caption'>
        <u>Privacy policy</u>
      </Typography>

      <Typography variant='caption'>
        <u>Need help?</u>
      </Typography>
    </Stack>
  )
}

export default Footer

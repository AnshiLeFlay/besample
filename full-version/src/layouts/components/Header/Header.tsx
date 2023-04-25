import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

const Header = () => {
    return (
        <Box
            px={15}
            pt={7.5}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                position: 'absolute',
                top: 0
            }}
        >
            <Image width={189} height={40} src='/logo.png' alt={''} />
            <Typography variant='caption'>
                Empowering social scientists
                <br />
                to reach beyond the West
            </Typography>
        </Box>
    )
}

export default Header

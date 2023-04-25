import { Box, Typography, Divider } from '@mui/material'
import React from 'react'

const SignUpFooter = () => {
    return (
        <>
            <Box my={5} sx={{ textAlign: 'center' }}>
                <Typography>Already have account? Sign In</Typography>
            </Box>
            <Divider />
            <Box mt={6} mb={3}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='caption'>
                        By creating a Besample account, you agree to our
                        <br />
                        <u>
                            <b>Terms and conditions</b>
                        </u>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default SignUpFooter

// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined'
import InfoIcon from '@mui/icons-material/Info'

// ** Icon Imports

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Third Party Imports
import toast from 'react-hot-toast'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'
import SignUpFooter from '../SignUpFooter'
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Icon from 'src/@core/components/icon'

//import styles from './styles.module.css'
/* m/p 1 = 4px = 0.25rem */

interface State {
    password: string
    password2: string
    showPassword: boolean
    showPassword2: boolean
}

const steps = [
    {
        title: 'Account Setup',
        subtitle: ''
    },
    {
        title: 'Verification',
        subtitle: ''
    },
    {
        title: 'Create password',
        subtitle: ''
    },
    {
        title: 'About you',
        subtitle: ''
    },
    {
        title: 'Affilation',
        subtitle: ''
    }
]

//styles
const StepperSx = {
    maxWidth: '560px',
    '& .MuiStepConnector-root': {
        top: '4px !important',
        left: '-50%',
        right: 'calc(50% - 1px)'
    },
    '& .MuiStepConnector-line': {
        marginTop: '22px',
        zIndex: '-1'
    },
    '& .MuiStepConnector-root.Mui-disabled .MuiStepConnector-line': {
        borderColor: '#AEBABF',
        position: 'relative',
        zIndex: '-1'
    }
}

const StepperSignUp = () => {
    // ** States
    const [showPassword1, setShowPassword1] = useState<boolean>(false)
    const [showPassword2, setShowPassword2] = useState<boolean>(false)
    const [activeStep, setActiveStep] = useState<number>(0)
    const [state, setState] = useState<State>({
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false
    })

    // Handle Stepper
    /*
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  */
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
        if (activeStep === steps.length - 1) {
            toast.success('Form Submitted')
        }
    }
    const handleReset = () => {
        setActiveStep(0)
        setState({ ...state, password: '', password2: '' })
    }

    // Handle Password

    // Handle Confirm Password

    // Handle Language

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography mb={2.5} variant='h5'>
                                Create account
                            </Typography>
                            <Box mb={5} sx={{ textAlign: 'center' }} px={6}>
                                <Typography variant='caption'>
                                    Currently, only institutionally affiliated researchers
                                    <br />
                                    can create a Besample account. Please use your
                                    <br />
                                    institutional email address to sign up
                                </Typography>
                            </Box>
                        </Box>
                        <TextField
                            size='medium'
                            fullWidth
                            label='Your institutional email'
                            sx={{ mb: 4 }}
                            placeholder='example@uni.edu'
                        />
                        <Box mt={4}>
                            <Button
                                sx={{ height: '56px' }}
                                size='large'
                                fullWidth
                                variant='contained'
                                onClick={handleNext}
                            >
                                Verify email
                            </Button>
                        </Box>
                        <SignUpFooter />
                    </Grid>
                )
            case 1:
                return (
                    <Fragment key={step}>
                        <Grid item xs={12}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'rgba(51, 115, 139, 1)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        outline: '6px solid rgba(110, 116, 31, 0.1)',
                                        borderRadius: 16
                                    }}
                                    mb={5}
                                >
                                    <DraftsOutlinedIcon sx={{ fontSize: '26px', color: 'white' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h5'>
                                        Check your email
                                        <br />
                                        for a verification link
                                    </Typography>
                                </Box>
                            </Box>
                            <Box mt={4}>
                                <Button
                                    sx={{ height: '56px' }}
                                    size='large'
                                    fullWidth
                                    variant='contained'
                                    onClick={handleNext}
                                >
                                    test
                                </Button>
                            </Box>
                            <SignUpFooter />
                        </Grid>
                    </Fragment>
                )
            case 2:
                return (
                    <Fragment key={step}>
                        <Grid alignItems={'center'} item xs={12}>
                            <Box mb={4} sx={{ textAlign: 'center' }}>
                                <Typography variant='h5'>Create a password</Typography>
                            </Box>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '5px 10px 6px 6px',
                                    gap: '8px',
                                    background: '#F5F7F7',
                                    border: '1px solid #E1EAED',
                                    borderRadius: '50px',
                                    width: 'fit-content',
                                    margin: '0 auto',
                                    marginBottom: '1rem'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: '#2F454D',
                                        color: 'white',
                                        borderRadius: '50%'
                                    }}
                                >
                                    E
                                </Box>
                                <Typography>email@harvard.edu</Typography>
                            </Box>
                            <FormControl fullWidth>
                                <OutlinedInput
                                    placeholder='Password'
                                    id='auth-login-v2-password-1'
                                    type={showPassword1 ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onMouseDown={e => e.preventDefault()}
                                                onClick={() => setShowPassword1(!showPassword1)}
                                            >
                                                <Icon
                                                    icon={showPassword1 ? 'tabler:eye' : 'tabler:eye-off'}
                                                    fontSize={20}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Box mb={3} sx={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                                <InfoIcon sx={{ fontSize: 12, marginTop: 0.5 }} />
                                <Typography sx={{ lineHeight: '140%' }} variant='caption'>
                                    Must be at least 8 symbols, must contain
                                    <br />a letter, a number, and a special character
                                </Typography>
                            </Box>
                            <FormControl fullWidth>
                                <OutlinedInput
                                    id='auth-login-v2-password-2'
                                    placeholder='Confirm password'
                                    type={showPassword2 ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                edge='end'
                                                onMouseDown={e => e.preventDefault()}
                                                onClick={() => setShowPassword2(!showPassword2)}
                                            >
                                                <Icon
                                                    icon={showPassword2 ? 'tabler:eye' : 'tabler:eye-off'}
                                                    fontSize={20}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Box mt={9}>
                                <Button
                                    sx={{ height: '56px' }}
                                    size='large'
                                    fullWidth
                                    variant='contained'
                                    onClick={handleNext}
                                >
                                    Next step
                                </Button>
                            </Box>
                            <SignUpFooter />
                        </Grid>
                    </Fragment>
                )
            case 3:
                return <Fragment key={step}></Fragment>
            case 4:
                return <Fragment key={step}></Fragment>
            default:
                return 'Unknown Step'
        }
    }

    const renderContent = () => {
        if (activeStep === steps.length) {
            return (
                <Fragment>
                    <Typography>All steps are completed!</Typography>
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button size='large' variant='contained' onClick={handleReset}>
                            Reset
                        </Button>
                    </Box>
                </Fragment>
            )
        } else {
            return (
                <form onSubmit={e => e.preventDefault()}>
                    <Grid container spacing={5}>
                        {getStepContent(activeStep)}
                    </Grid>
                </form>
            )
        }
    }

    return (
        <Fragment>
            <StepperWrapper>
                <Stepper activeStep={activeStep} alternativeLabel sx={StepperSx}>
                    {steps.map((step, index) => {
                        return (
                            <Step key={index}>
                                <div className='step-label'>
                                    <div>
                                        <Typography variant='caption'>{step.title}</Typography>
                                    </div>
                                </div>
                                <StepLabel StepIconComponent={StepperCustomDot}></StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </StepperWrapper>
            <Box>
                <Stack mt={14} alignItems='center'>
                    <Card sx={{ width: 420 }}>
                        <CardContent sx={{ padding: 9 }}>{renderContent()}</CardContent>
                    </Card>
                </Stack>
            </Box>
        </Fragment>
    )
}

export default StepperSignUp

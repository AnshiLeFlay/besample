// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
//import Link from 'next/link'
import Image from 'next/image'

//import background from '../public/background.svg'

// ** MUI Components
import Box from '@mui/material/Box'

// ** Icon Imports
//import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Header from 'src/layouts/components/Header/Header'
import Footer from 'src/layouts/components/Footer/Footer'
import StepperSignUp from 'src/layouts/components/Stepper/StepperSignUp'

// ** Hooks
//import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
//import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components

const Register = () => {
    // ** States
    //const [showPassword, setShowPassword] = useState<boolean>(false)

    /*
         sx={{
          p: [6, 12],
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        */

    return (
        <Box
            py={7.5}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Header />
            <Box sx={{ width: '100%', maxWidth: '560px' }}>
                <StepperSignUp />
            </Box>
            <Footer />
        </Box>
    )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register

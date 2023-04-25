// ** MUI Imports
import MuiBox, { BoxProps } from '@mui/material/Box'
import { StepIconProps } from '@mui/material/StepIcon'
import { styled, useTheme } from '@mui/material/styles'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// Styled Box component
const Box = styled(MuiBox)<BoxProps>(() => ({
    width: 7,
    height: 7,
    borderWidth: 1,
    borderRadius: '50%',
    borderStyle: 'solid'
}))

const StepperCustomDot = (props: StepIconProps) => {
    // ** Props
    const { active, completed, error } = props

    // ** Hooks
    const theme = useTheme()

    if (error) {
        return (
            <Icon icon='tabler:alert-triangle' fontSize={7} color={theme.palette.error.main} transform='scale(1.2)' />
        )
    } else if (completed) {
        return (
            <Box
                sx={{
                    borderWidth: 1,
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.main'
                }}
            />
        )
    } else {
        return (
            <Box
                sx={{
                    borderColor: '#AEBABF',
                    backgroundColor: '#AEBABF',
                    ...(active && {
                        borderWidth: 1,
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.main'
                    })
                }}
            />
        )
    }
}

export default StepperCustomDot

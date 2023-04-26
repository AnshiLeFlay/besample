import Box from '@mui/system/Box';
import React, { ReactElement } from 'react';

const StepMessage = (props: {icon?: ReactElement, children?: ReactElement | string, color?: string}) => {

    return (
        <Box sx={{ textAlign: "center" }}>
        <Box
            sx={{
                width: 50,
                height: 50,
                backgroundColor: props.color,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                outline:
                    "6px solid rgba(110, 116, 31, 0.1)",
                borderRadius: '16px',
            }}
            mb={5}
        >
            {props.icon}
        </Box>
        <Box>
            {props.children}
        </Box>
    </Box>
    )
}

export default StepMessage;
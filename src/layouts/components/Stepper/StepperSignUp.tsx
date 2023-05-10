// ** React Imports
import React, { Fragment, useState, ChangeEvent, useRef } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Step from "@mui/material/Step";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

// ** Icon Imports

// ** Custom Components Imports
import StepperCustomDot from "./StepperCustomDot";

// ** Styled Component
import StepperWrapper from "src/@core/styles/mui/stepper";

import { useDispatch } from "react-redux";
//import { regUser, saveReg } from "src/store/apps/user";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import FirstEmailInput from "./Steps/FirstEmailInput";
import SecondEmailVerification from "./Steps/SecondEmailVerification";
import ThirdPasswords from "./Steps/ThirdPasswords";
import FourthAbout from "./Steps/FourthAbout";
import FifthAffilation from "./Steps/FifthAffilation";

//import styles from './styles.module.css'
/* m/p 1 = 4px = 0.25rem */

const steps = [
    {
        title: "Account Setup",
        subtitle: "",
    },
    {
        title: "Verification",
        subtitle: "",
    },
    {
        title: "Create password",
        subtitle: "",
    },
    {
        title: "About you",
        subtitle: "",
    },
    {
        title: "Affilation",
        subtitle: "",
    },
];

//styles
const StepperSx = {
    maxWidth: "560px",
    "& .MuiStepConnector-root": {
        top: "4px !important",
        left: "-50%",
        right: "calc(50% - 1px)",
    },
    "& .MuiStepConnector-line": {
        marginTop: "22px",
        zIndex: "-1",
    },
    "& .MuiStepConnector-root.Mui-disabled .MuiStepConnector-line": {
        borderColor: "#AEBABF",
        position: "relative",
        zIndex: "-1",
    },
};

const StepperSignUp = (props: any) => {
    // ** States
    const dispatch = useDispatch();
    const activeStep = useSelector((state: RootState) => state.stepper.step);
    const verifyStep = useSelector((state: RootState) => state.user.step);
    const checked = useSelector(
        (state: RootState) => state.stepper.checkedStatus
    );
    const academic = useSelector(
        (state: RootState) => state.stepper.academicStatus
    );

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <FirstEmailInput />;
            case 1:
                return (
                    <SecondEmailVerification
                        checked={checked}
                        academic={academic}
                    />
                );
            case 2:
                return <ThirdPasswords />;
            case 3:
                return <FourthAbout />;
            case 4:
                return <FifthAffilation />;
            default:
                return "Unknown Step";
        }
    };

    const renderContent = () => {
        if (activeStep === steps.length) {
            return (
                <Fragment>
                    <Typography>All steps are completed!</Typography>
                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button size="large" variant="contained">
                            Reset
                        </Button>
                    </Box>
                </Fragment>
            );
        } else {
            return (
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid container spacing={5}>
                        {getStepContent(activeStep)}
                    </Grid>
                </form>
            );
        }
    };

    return (
        <Fragment>
            <StepperWrapper>
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={StepperSx}
                >
                    {steps.map((step, index) => {
                        return (
                            <Step key={index}>
                                <div className="step-label">
                                    <div>
                                        <Typography variant="caption">
                                            {step.title}
                                        </Typography>
                                    </div>
                                </div>
                                <StepLabel
                                    StepIconComponent={StepperCustomDot}
                                ></StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </StepperWrapper>
            <Box>
                <Stack mt={14} alignItems="center">
                    <Card sx={{ width: 420 }}>
                        <CardContent sx={{ padding: 9 }}>
                            {renderContent()}
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Fragment>
    );
};

export default StepperSignUp;

//old code - delete after tests
//const verifyPayload = useSelector((state: RootState) => state.user.verify);

/*
    const [email, setEmail] = useState<string>(
        // @ts-ignore
        verifyPayload?.email !== undefined ? verifyPayload.email : ""
    );
    */

/*
    const [activeStep, setActiveStep] = useState<number>(
        verifyStep === 1 ? 1 : 0
    );
    */

/*
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {
        //заменить на switch
        if (activeStep === 0) {
            // @ts-ignore
            dispatch(regUser({ email: email }));
        }
        if (activeStep === 2 && lockPasswords) return;
        if (activeStep === 3) {
            console.log(title, firstName, middleName, lastName);
        }
        if (activeStep === 4) {
            //console.log(primaryAffilation, primaryAffilationTitle);

            //console.log("pass from stepper", password1);
            dispatch(
                // @ts-ignore
                saveReg({
                    // @ts-ignore
                    resetCode: verifyPayload?.reset,
                    password: password1,
                    userData: {
                        name: `${title} ${firstName} ${middleName} ${lastName}`,
                    },
                })
            );
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if (activeStep === steps.length - 1) {
            toast.success("Form Submitted");
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    */

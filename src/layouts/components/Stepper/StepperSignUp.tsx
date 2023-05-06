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
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// ** Icon Imports

// ** Custom Components Imports
import StepperCustomDot from "./StepperCustomDot";

// ** Third Party Imports
import toast from "react-hot-toast";

// ** Styled Component
import StepperWrapper from "src/@core/styles/mui/stepper";
import SignUpFooter from "../SignUpFooter";
import { FormControl } from "@mui/material";

import Email from "./Email";
import Holder from "./Holder";
import { useDispatch } from "react-redux";
import { regUser, saveReg } from "src/store/apps/user";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import FirstEmailInput from "./Steps/FirstEmailInput";
import SecondEmailVerification from "./Steps/SecondEmailVerification";
import ThirdPasswords from "./Steps/ThirdPasswords";
import FourthAbout from "./Steps/FourthAbout";

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
    const verifyStep = useSelector((state: RootState) => state.user.step);
    const verifyPayload = useSelector((state: RootState) => state.user.verify);

    const [email, setEmail] = useState<string>(
        // @ts-ignore
        verifyPayload?.email !== undefined ? verifyPayload.email : ""
    );

    const [university, setUniversity] = useState<string>("");

    const [lockPasswords, setLockPasswords] = useState<boolean>(true);
    const [password1, setPassword1] = useState<string>("");
    const [title, setTitle] = useState<string>("No title");
    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [primaryAffilation, setPrimaryAffilation] = useState<string>("");
    const [primaryAffilationTitle, setPrimaryAffilationTitle] =
        useState<string>("");

    const [activeStep, setActiveStep] = useState<number>(
        verifyStep === 1 ? 1 : 0
    );

    const [affilationVal, setAffilationVal] = useState<string>("yes");

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChangeAffilation = (event: ChangeEvent<HTMLInputElement>) => {
        setAffilationVal((event.target as HTMLInputElement).value);
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
        setUniversity("");
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <FirstEmailInput />;
            case 1:
                return (
                    <SecondEmailVerification checked={false} academic={false} />
                );
            case 2:
                return <ThirdPasswords />;
            case 3:
                return <FourthAbout />;
            case 4:
                return (
                    <Fragment key={step}>
                        <Grid alignItems={"center"} item xs={12}>
                            <Box mb={2.5} sx={{ textAlign: "center" }}>
                                <Typography variant="h5">Affilation</Typography>
                            </Box>
                            <Box mb={2.5} sx={{ textAlign: "center" }}>
                                <Typography variant="subtitle1">
                                    Is this your primary affiliation?
                                </Typography>
                            </Box>
                            <Holder>
                                <Typography variant="body2">
                                    {university}
                                </Typography>
                            </Holder>
                            <FormControl
                                sx={{
                                    flexWrap: "wrap",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <RadioGroup
                                    row
                                    value={affilationVal}
                                    name="affilation-radio"
                                    onChange={handleChangeAffilation}
                                    aria-label="simple-radio"
                                >
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio />}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        value="no"
                                        control={<Radio />}
                                        label="No"
                                    />
                                </RadioGroup>
                                {affilationVal === "no" && (
                                    <Box>
                                        <TextField
                                            size="medium"
                                            fullWidth
                                            sx={{ mb: 4 }}
                                            placeholder="What is your primary affiliation?"
                                            onChange={(e) =>
                                                setPrimaryAffilation(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <FormControl sx={{ width: "100%" }}>
                                            <Select
                                                defaultValue="Other"
                                                placeholder="Position"
                                                fullWidth
                                                id="affilation-position-select"
                                                onChange={(e) =>
                                                    setPrimaryAffilationTitle(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <MenuItem value=""></MenuItem>
                                                <MenuItem value={"Professor"}>
                                                    Professor
                                                </MenuItem>
                                                <MenuItem
                                                    value={
                                                        "Associate professor"
                                                    }
                                                >
                                                    Associate professor
                                                </MenuItem>
                                                <MenuItem
                                                    value={
                                                        "Assistant professor"
                                                    }
                                                >
                                                    Assistant professor
                                                </MenuItem>
                                                <MenuItem
                                                    value={"Visiting scholar"}
                                                >
                                                    Visiting scholar
                                                </MenuItem>
                                                <MenuItem value={"Post-doc"}>
                                                    Post-doc
                                                </MenuItem>
                                                <MenuItem
                                                    value={"Graduate Student"}
                                                >
                                                    Graduate Student
                                                </MenuItem>
                                                <MenuItem
                                                    value={"Research Assistant"}
                                                >
                                                    Research Assistant
                                                </MenuItem>
                                                <MenuItem value={"Lab Manager"}>
                                                    Lab Manager
                                                </MenuItem>
                                                <MenuItem
                                                    value={
                                                        "Undergraduate Student"
                                                    }
                                                >
                                                    Undergraduate Student
                                                </MenuItem>
                                                <MenuItem value={"Other"}>
                                                    Other
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                )}
                            </FormControl>
                            <Box mt={4}>
                                <Button
                                    sx={{ height: "56px" }}
                                    size="large"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleNext}
                                >
                                    Welcome to Besample
                                </Button>
                            </Box>
                            <SignUpFooter />
                        </Grid>
                    </Fragment>
                );
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
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleReset}
                        >
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

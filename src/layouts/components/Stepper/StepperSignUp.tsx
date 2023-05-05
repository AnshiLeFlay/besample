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
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import InfoIcon from "@mui/icons-material/Info";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

// ** Icon Imports

// ** Custom Components Imports
import StepperCustomDot from "./StepperCustomDot";

// ** Third Party Imports
import toast from "react-hot-toast";

// ** Styled Component
import StepperWrapper from "src/@core/styles/mui/stepper";
import SignUpFooter from "../SignUpFooter";
import {
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import Icon from "src/@core/components/icon";
import Email from "./Email";
import Holder from "./Holder";
import StepMessage from "./StepMessage";
import { useDispatch } from "react-redux";
import { regUser, saveReg } from "src/store/apps/user";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import FirstEmailInput from "./Steps/FirstEmailInput";
import SecondEmailVerification from "./Steps/SecondEmailVerification";

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
    const [checked, setChecked] = useState<boolean>(false);
    const [university, setUniversity] = useState<string>("");
    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    const [lockPasswords, setLockPasswords] = useState<boolean>(true);
    const ref1 = useRef<any>(null);
    const ref2 = useRef<any>(null);
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
        setChecked(false);
        setUniversity("");
    };

    const handlePasswordEqualCheck = () => {
        if (
            ref1?.current?.children[0]?.value === "" ||
            ref2?.current?.children[0]?.value === ""
        )
            return;
        if (
            ref1?.current?.children[0]?.value ===
            ref2?.current?.children[0]?.value
        ) {
            setLockPasswords(false);
            setPassword1(ref1?.current?.children[0]?.value);
        } else setLockPasswords(true);
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
                return (
                    <Fragment key={step}>
                        <Grid alignItems={"center"} item xs={12}>
                            <Box mb={4} sx={{ textAlign: "center" }}>
                                <Typography variant="h5">
                                    Create a password
                                </Typography>
                            </Box>
                            <Email>{email}</Email>
                            <FormControl fullWidth>
                                <OutlinedInput
                                    placeholder="Password"
                                    id="auth-login-v2-password-1"
                                    autoComplete="new-password"
                                    ref={ref1}
                                    type={showPassword1 ? "text" : "password"}
                                    onChange={handlePasswordEqualCheck}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onMouseDown={(e) =>
                                                    e.preventDefault()
                                                }
                                                onClick={() =>
                                                    setShowPassword1(
                                                        !showPassword1
                                                    )
                                                }
                                            >
                                                <Icon
                                                    icon={
                                                        showPassword1
                                                            ? "tabler:eye"
                                                            : "tabler:eye-off"
                                                    }
                                                    fontSize={20}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Box
                                mb={3}
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "5px",
                                }}
                            >
                                <InfoIcon
                                    sx={{ fontSize: 12, marginTop: 0.5 }}
                                />
                                <Typography
                                    sx={{ lineHeight: "140%" }}
                                    variant="caption"
                                >
                                    Must be at least 8 symbols, must contain
                                    <br />a letter, a number, and a special
                                    character
                                </Typography>
                            </Box>
                            <FormControl fullWidth>
                                <OutlinedInput
                                    id="auth-login-v2-password-2"
                                    autoComplete="new-password"
                                    ref={ref2}
                                    placeholder="Confirm password"
                                    type={showPassword2 ? "text" : "password"}
                                    onChange={handlePasswordEqualCheck}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onMouseDown={(e) =>
                                                    e.preventDefault()
                                                }
                                                onClick={() =>
                                                    setShowPassword2(
                                                        !showPassword2
                                                    )
                                                }
                                            >
                                                <Icon
                                                    icon={
                                                        showPassword2
                                                            ? "tabler:eye"
                                                            : "tabler:eye-off"
                                                    }
                                                    fontSize={20}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Box mt={9}>
                                <Button
                                    sx={{ height: "56px" }}
                                    size="large"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleNext}
                                >
                                    Next step
                                </Button>
                            </Box>
                            <SignUpFooter />
                        </Grid>
                    </Fragment>
                );
            case 3:
                return (
                    <Fragment key={step}>
                        <Grid alignItems={"center"} item xs={12}>
                            <Box mb={2.5} sx={{ textAlign: "center" }}>
                                <Typography variant="h5">About you</Typography>
                            </Box>
                            <Box mb={5} sx={{ textAlign: "center" }}>
                                <Typography variant="caption">
                                    Complete your profile to launch studies
                                    <br />
                                    and collaborate with others
                                </Typography>
                            </Box>
                            <Email>{email}</Email>
                            <Box sx={{ display: "flex", gap: "0.25rem" }}>
                                <FormControl>
                                    <Select
                                        defaultValue="No title"
                                        id="title-select"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    >
                                        <MenuItem value="No title">
                                            No title
                                        </MenuItem>
                                        <MenuItem value={"Mr."}>Mr.</MenuItem>
                                        <MenuItem value={"Ms."}>Ms.</MenuItem>
                                        <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                                        <MenuItem value={"Dr."}>Dr.</MenuItem>
                                        <MenuItem value={"Prof."}>
                                            Prof.
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    size="medium"
                                    fullWidth
                                    sx={{ mb: 4 }}
                                    placeholder="First Name"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </Box>
                            <TextField
                                size="medium"
                                fullWidth
                                sx={{ mb: 4 }}
                                placeholder="Middle Name"
                                onChange={(e) => setMiddleName(e.target.value)}
                            />
                            <TextField
                                size="medium"
                                fullWidth
                                sx={{ mb: 4 }}
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <Box mt={4}>
                                <Button
                                    sx={{ height: "56px" }}
                                    size="large"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleNext}
                                >
                                    Next step
                                </Button>
                            </Box>
                            <SignUpFooter />
                        </Grid>
                    </Fragment>
                );
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

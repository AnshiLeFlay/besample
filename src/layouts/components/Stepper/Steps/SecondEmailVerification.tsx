import React, { Fragment } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import SignUpFooter from "../../SignUpFooter";
import Email from "../Email";
import StepMessage from "../StepMessage";
import { useDispatch, useSelector } from "react-redux";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { RootState } from "src/store";
import { backStep, nextStep } from "src/store/apps/stepper";

const SecondEmailVerification = (props: {
    checked: boolean;
    academic: boolean;
}) => {
    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.stepper.step);
    const email = useSelector((state: RootState) => state.stepper.email);
    const { checked, academic } = props;

    return (
        <Fragment key={step}>
            <Grid item xs={12}>
                {checked &&
                    (academic ? (
                        <>
                            <StepMessage
                                color="rgba(184, 193, 52, 1)"
                                icon={
                                    <CelebrationOutlinedIcon
                                        sx={{
                                            fontSize: "26px",
                                            color: "white",
                                        }}
                                    />
                                }
                            >
                                <>
                                    <Typography variant="h5">
                                        Success!
                                    </Typography>
                                    <Box mt={2.5} mb={4}>
                                        <Typography variant="caption">
                                            Your institutional email is verified
                                        </Typography>
                                    </Box>
                                    <Email>{email}</Email>
                                    <Box mt={9}>
                                        <Button
                                            sx={{ height: "56px" }}
                                            size="large"
                                            fullWidth
                                            variant="contained"
                                            onClick={() => dispatch(nextStep)}
                                        >
                                            Next step
                                        </Button>
                                    </Box>
                                </>
                            </StepMessage>
                        </>
                    ) : (
                        <>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography variant="h5">
                                    We're still working on
                                    <br />
                                    verifying your email
                                </Typography>
                                <Box mt={2.5}>
                                    <Typography variant="caption">
                                        Currently, only institutionally
                                        affiliated researchers can create a
                                        Besample account.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box mt={9}>
                                <Button
                                    sx={{ height: "56px" }}
                                    size="large"
                                    fullWidth
                                    variant="contained"
                                    onClick={() => {
                                        dispatch(backStep);
                                    }}
                                >
                                    Try another email
                                </Button>
                            </Box>
                        </>
                    ))}
                {!checked && (
                    <>
                        <StepMessage
                            color="rgba(51, 115, 139, 1)"
                            icon={
                                <DraftsOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: "white",
                                    }}
                                />
                            }
                        >
                            <Typography variant="h5">
                                Check your email
                                <br />
                                for a verification link
                            </Typography>
                        </StepMessage>
                        <SignUpFooter />
                    </>
                )}
            </Grid>
        </Fragment>
    );
};

export default SecondEmailVerification;

/* old code - delete after tests
<Fragment key={step}>
    <Grid item xs={12}>
        {checked &&
            (university !== "" ? (
                <>
                    <StepMessage
                        color="rgba(184, 193, 52, 1)"
                        icon={
                            <CelebrationOutlinedIcon
                                sx={{
                                    fontSize: "26px",
                                    color: "white",
                                }}
                            />
                        }
                    >
                        <>
                            <Typography variant="h5">
                                Success!
                            </Typography>
                            <Box mt={2.5} mb={4}>
                                <Typography variant="caption">
                                    Your institutional email
                                    is verified
                                </Typography>
                            </Box>
                            <Email>{email}</Email>
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
                        </>
                    </StepMessage>
                </>
            ) : (
                <>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5">
                            We're still working on
                            <br />
                            verifying your email
                        </Typography>
                        <Box mt={2.5}>
                            <Typography variant="caption">
                                Currently, only
                                institutionally affiliated
                                researchers can create a
                                Besample account.
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={9}>
                        <Button
                            sx={{ height: "56px" }}
                            size="large"
                            fullWidth
                            variant="contained"
                            onClick={() => {
                                handleBack();
                                setChecked(false);
                            }}
                        >
                            Try another email
                        </Button>
                    </Box>
                </>
            ))}
        {!checked && (
            <>
                <StepMessage
                    color="rgba(51, 115, 139, 1)"
                    icon={
                        <DraftsOutlinedIcon
                            sx={{
                                fontSize: "26px",
                                color: "white",
                            }}
                        />
                    }
                >
                    <Typography variant="h5">
                        Check your email
                        <br />
                        for a verification link
                    </Typography>
                </StepMessage>
                <SignUpFooter />
            </>
        )}
    </Grid>
</Fragment>
*/

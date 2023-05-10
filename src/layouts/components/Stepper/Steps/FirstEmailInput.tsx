import React, { useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import SignUpFooter from "../../SignUpFooter";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, nextStep } from "src/store/apps/stepper";
import { regUser } from "src/store/apps/user";
import { RootState } from "src/store";

const FirstEmailInput = () => {
    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => state.stepper.email);
    const status = useSelector((state: RootState) => state.user.status);

    const handleSend = async () => {
        // @ts-ignore
        dispatch(regUser({ email: email }));
        //dispatch(nextStep);
    };

    useEffect(() => {
        console.log(status);
        if (status?.status !== undefined) {
            if (status.status === "success") {
                if (status?.code !== undefined) {
                    switch (status.code) {
                        case "login":
                            //redirect to login page with prefilled email
                            break;
                        case "reset":
                            //redirect to reset password page
                            break;
                        case "verifyEmail":
                        case "regEmail":
                            //check your email
                            dispatch(nextStep());
                            break;
                        default:
                            break;
                    }
                }
            } else {
                console.log("error", status?.message);
            }
        }
    }, [status, dispatch]);

    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography mb={2.5} variant="h5">
                    Create account
                </Typography>
                <Box mb={5} sx={{ textAlign: "center" }} px={6}>
                    <Typography variant="caption">
                        Currently, only institutionally affiliated researchers
                        <br />
                        can create a Besample account. Please use your
                        <br />
                        institutional email address to sign up
                    </Typography>
                </Box>
            </Box>
            <TextField
                size="medium"
                fullWidth
                label="Your institutional email"
                sx={{ mb: 4 }}
                placeholder="example@uni.edu"
                value={email}
                onChange={(e) => dispatch(changeEmail(e.target.value))}
            />
            <Box mt={4}>
                <Button
                    sx={{ height: "56px" }}
                    size="large"
                    fullWidth
                    variant="contained"
                    onClick={handleSend}
                >
                    Verify email
                </Button>
            </Box>
            <SignUpFooter />
        </Grid>
    );
};

export default FirstEmailInput;

/* old code - delete after tests
<Grid item xs={12}>
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <Typography mb={2.5} variant="h5">
            Create account
        </Typography>
        <Box mb={5} sx={{ textAlign: "center" }} px={6}>
            <Typography variant="caption">
                Currently, only institutionally affiliated
                researchers
                <br />
                can create a Besample account. Please use
                your
                <br />
                institutional email address to sign up
            </Typography>
        </Box>
    </Box>
    <TextField
        size="medium"
        fullWidth
        label="Your institutional email"
        sx={{ mb: 4 }}
        placeholder="example@uni.edu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <Box mt={4}>
        <Button
            sx={{ height: "56px" }}
            size="large"
            fullWidth
            variant="contained"
            onClick={handleNext}
        >
            Verify email
        </Button>
    </Box>
    <SignUpFooter />
</Grid>
*/

import React, { Fragment, useState } from "react";
import {
    Grid,
    Typography,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
} from "@mui/material";
import { Box } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";
import SignUpFooter from "../../SignUpFooter";
import Icon from "src/@core/components/icon";
import Email from "../Email";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import {
    nextStep,
    setPassword,
    setPasswordConfirm,
} from "src/store/apps/stepper";

const ThirdPasswords = () => {
    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);

    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.stepper.step);
    const email = useSelector((state: RootState) => state.stepper.email);
    const password = useSelector((state: RootState) => state.stepper.password);
    const passwordConfirm = useSelector(
        (state: RootState) => state.stepper.passwordConfirm
    );

    //const handlePasswordEqualCheck = () => {};

    return (
        <Fragment key={step}>
            <Grid alignItems={"center"} item xs={12}>
                <Box mb={4} sx={{ textAlign: "center" }}>
                    <Typography variant="h5">Create a password</Typography>
                </Box>
                <Email>{email}</Email>
                <FormControl fullWidth>
                    <OutlinedInput
                        placeholder="Password"
                        id="auth-login-v2-password-1"
                        autoComplete="new-password"
                        type={showPassword1 ? "text" : "password"}
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() =>
                                        setShowPassword1(!showPassword1)
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
                    <InfoIcon sx={{ fontSize: 12, marginTop: 0.5 }} />
                    <Typography sx={{ lineHeight: "140%" }} variant="caption">
                        Must be at least 8 symbols, must contain
                        <br />a letter, a number, and a special character
                    </Typography>
                </Box>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="auth-login-v2-password-2"
                        autoComplete="new-password"
                        placeholder="Confirm password"
                        type={showPassword2 ? "text" : "password"}
                        value={passwordConfirm}
                        onChange={(e) =>
                            dispatch(setPasswordConfirm(e.target.value))
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() =>
                                        setShowPassword2(!showPassword2)
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
                        onClick={() => dispatch(nextStep)}
                    >
                        Next step
                    </Button>
                </Box>
                <SignUpFooter />
            </Grid>
        </Fragment>
    );
};

export default ThirdPasswords;

/* old code - delete after tests
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
*/

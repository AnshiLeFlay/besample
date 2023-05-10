import React, { ChangeEvent, Fragment, useState } from "react";
import {
    Grid,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import SignUpFooter from "../../SignUpFooter";
import Holder from "../Holder";
import {
    changeAffilation,
    nextStep,
    setPosition,
} from "src/store/apps/stepper";
import { saveReg } from "src/store/apps/user";

const FifthAffilation = () => {
    const [affilationVal, setAffilationVal] = useState<string>("yes");

    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.stepper.step);
    const resetToken = useSelector(
        (state: RootState) => state.user.verify?.reset
    );
    const password = useSelector((state: RootState) => state.stepper.password);
    const firstName = useSelector(
        (state: RootState) => state.stepper.about.firstName
    );
    const middleName = useSelector(
        (state: RootState) => state.stepper.about.middleName
    );
    const lastName = useSelector(
        (state: RootState) => state.stepper.about.lastName
    );
    const title = useSelector((state: RootState) => state.stepper.about.title);
    const university = useSelector(
        (state: RootState) => state.stepper.university
    );

    const handleChangeAffilation = (event: ChangeEvent<HTMLInputElement>) => {
        setAffilationVal((event.target as HTMLInputElement).value);
    };

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
                    <Typography variant="body2">{university}</Typography>
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
                                    dispatch(changeAffilation(e.target.value))
                                }
                            />
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    defaultValue="Other"
                                    placeholder="Position"
                                    fullWidth
                                    id="affilation-position-select"
                                    onChange={(e) =>
                                        dispatch(setPosition(e.target.value))
                                    }
                                >
                                    <MenuItem value=""></MenuItem>
                                    <MenuItem value={"Professor"}>
                                        Professor
                                    </MenuItem>
                                    <MenuItem value={"Associate professor"}>
                                        Associate professor
                                    </MenuItem>
                                    <MenuItem value={"Assistant professor"}>
                                        Assistant professor
                                    </MenuItem>
                                    <MenuItem value={"Visiting scholar"}>
                                        Visiting scholar
                                    </MenuItem>
                                    <MenuItem value={"Post-doc"}>
                                        Post-doc
                                    </MenuItem>
                                    <MenuItem value={"Graduate Student"}>
                                        Graduate Student
                                    </MenuItem>
                                    <MenuItem value={"Research Assistant"}>
                                        Research Assistant
                                    </MenuItem>
                                    <MenuItem value={"Lab Manager"}>
                                        Lab Manager
                                    </MenuItem>
                                    <MenuItem value={"Undergraduate Student"}>
                                        Undergraduate Student
                                    </MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
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
                        onClick={() => {
                            dispatch(
                                // @ts-ignore
                                saveReg({
                                    // @ts-ignore
                                    resetCode: resetToken,
                                    password: password,
                                    userData: {
                                        name: `${title} ${firstName} ${middleName} ${lastName}`,
                                    },
                                })
                            );
                            dispatch(nextStep());
                        }}
                    >
                        Welcome to Besample
                    </Button>
                </Box>
                <SignUpFooter />
            </Grid>
        </Fragment>
    );
};

export default FifthAffilation;
/* old code - delete after tests
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
*/

import React, { Fragment } from "react";
import {
    Grid,
    Typography,
    FormControl,
    Select,
    MenuItem,
    TextField,
    Button,
} from "@mui/material";
import { Box } from "@mui/system";
import SignUpFooter from "../../SignUpFooter";
import Email from "../Email";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import {
    changeFirstName,
    changeLastName,
    changeMiddleName,
    changeTitle,
    nextStep,
} from "src/store/apps/stepper";

const FourthAbout = () => {
    const dispatch = useDispatch();
    const step = useSelector((state: RootState) => state.stepper.step);
    const email = useSelector((state: RootState) => state.stepper.email);
    const title = useSelector((state: RootState) => state.stepper.about.title);
    const firstName = useSelector(
        (state: RootState) => state.stepper.about.firstName
    );
    const middleName = useSelector(
        (state: RootState) => state.stepper.about.middleName
    );
    const lastName = useSelector(
        (state: RootState) => state.stepper.about.lastName
    );

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
                                dispatch(changeTitle(e.target.value))
                            }
                            value={title}
                        >
                            <MenuItem value="No title">No title</MenuItem>
                            <MenuItem value={"Mr."}>Mr.</MenuItem>
                            <MenuItem value={"Ms."}>Ms.</MenuItem>
                            <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                            <MenuItem value={"Dr."}>Dr.</MenuItem>
                            <MenuItem value={"Prof."}>Prof.</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        size="medium"
                        fullWidth
                        sx={{ mb: 4 }}
                        placeholder="First Name"
                        onChange={(e) =>
                            dispatch(changeFirstName(e.target.value))
                        }
                        value={firstName}
                    />
                </Box>
                <TextField
                    size="medium"
                    fullWidth
                    sx={{ mb: 4 }}
                    placeholder="Middle Name"
                    onChange={(e) => dispatch(changeMiddleName(e.target.value))}
                    value={middleName}
                />
                <TextField
                    size="medium"
                    fullWidth
                    sx={{ mb: 4 }}
                    placeholder="Last Name"
                    onChange={(e) => dispatch(changeLastName(e.target.value))}
                    value={lastName}
                />
                <Box mt={4}>
                    <Button
                        sx={{ height: "56px" }}
                        size="large"
                        fullWidth
                        variant="contained"
                        onClick={() => dispatch(nextStep())}
                    >
                        Next step
                    </Button>
                </Box>
                <SignUpFooter />
            </Grid>
        </Fragment>
    );
};

export default FourthAbout;

/* old code - delete after tests
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
*/

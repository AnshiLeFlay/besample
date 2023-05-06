// ** Redux Imports
import { Dispatch } from "redux";
import { createSlice, createAction } from "@reduxjs/toolkit";

export const changeEmail = createAction(
    "stepper/changeEmail",
    (email: string) => {
        return {
            payload: {
                email,
            },
        };
    }
);

export const setStep = createAction("stepper/step", (step: number) => {
    return {
        payload: {
            step,
        },
    };
});

export const setPassword = createAction(
    "stepper/password",
    (password: string) => {
        return {
            payload: {
                password,
            },
        };
    }
);

export const setPasswordConfirm = createAction(
    "stepper/passwordConfirm",
    (password: string) => {
        return {
            payload: {
                password,
            },
        };
    }
);

export const changeTitle = createAction("stepper/title", (title: string) => {
    return {
        payload: {
            title,
        },
    };
});

export const changeFirstName = createAction(
    "stepper/firstName",
    (firstName: string) => {
        return {
            payload: {
                firstName,
            },
        };
    }
);

export const changeMiddleName = createAction(
    "stepper/middleName",
    (middleName: string) => {
        return {
            payload: {
                middleName,
            },
        };
    }
);

export const changeLastName = createAction(
    "stepper/lastName",
    (lastName: string) => {
        return {
            payload: {
                lastName,
            },
        };
    }
);

export const nextStep = createAction("stepper/nextStep");
export const backStep = createAction("stepper/backStep");

export const appStepperSlice = createSlice({
    name: "appStepper",
    initialState: {
        step: 0,
        email: "",
        password: "",
        passwordConfirm: "",
        about: {
            title: "No title",
            firstName: "",
            middleName: "",
            lastName: "",
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeEmail, (state, action) => {
                state.email = action.payload.email;
            })
            .addCase(setStep, (state, action) => {
                state.step = action.payload.step;
            })
            .addCase(nextStep, (state) => {
                state.step++;
            })
            .addCase(backStep, (state) => {
                state.step--;
            })
            .addCase(setPassword, (state, action) => {
                state.password = action.payload.password;
            })
            .addCase(setPasswordConfirm, (state, action) => {
                state.passwordConfirm = action.payload.password;
            })
            .addCase(changeTitle, (state, action) => {
                state.about.title = action.payload.title;
            })
            .addCase(changeFirstName, (state, action) => {
                state.about.firstName = action.payload.firstName;
            })
            .addCase(changeMiddleName, (state, action) => {
                state.about.middleName = action.payload.middleName;
            })
            .addCase(changeLastName, (state, action) => {
                state.about.lastName = action.payload.lastName;
            });
    },
});

export default appStepperSlice.reducer;

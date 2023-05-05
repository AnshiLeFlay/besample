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

export const nextStep = createAction("stepper/nextStep");
export const backStep = createAction("stepper/backStep");

export const appStepperSlice = createSlice({
    name: "appStepper",
    initialState: {
        step: 0,
        email: "",
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
            });
    },
});

export default appStepperSlice.reducer;

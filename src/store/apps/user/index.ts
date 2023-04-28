// ** Redux Imports
import { Dispatch } from "redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { API_REG } from "src/utils/endpoints";

interface DataParams {
    q: string;
    role: string;
    status: string;
    currentPlan: string;
}

interface Redux {
    getState: any;
    dispatch: Dispatch<any>;
}

// ** Fetch Users
export const fetchData = createAsyncThunk(
    "appUsers/fetchData",
    async (params: DataParams) => {
        const response = await axios.get("/apps/users/list", {
            params,
        });

        return response.data;
    }
);

// ** Add User
export const addUser = createAsyncThunk(
    "appUsers/addUser",
    async (
        data: { [key: string]: number | string },
        { getState, dispatch }: Redux
    ) => {
        const response = await axios.post("/apps/users/add-user", {
            data,
        });
        dispatch(fetchData(getState().user.params));

        return response.data;
    }
);

// ** Delete User
export const deleteUser = createAsyncThunk(
    "appUsers/deleteUser",
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axios.delete("/apps/users/delete", {
            data: id,
        });
        dispatch(fetchData(getState().user.params));

        return response.data;
    }
);

// Reg user
export const regUser = createAsyncThunk(
    "appUsers/regUser",
    async (data: any) => {
        const { email } = data;
        try {
            const response = await axios.post(
                API_REG,
                {
                    name: "newUser",
                    email: email,
                    password: "password123",
                    passwordConfirm: "password123",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("res", response.data);

            return response.data;
        } catch (error: any) {
            console.log("error", error.message);
            return error.message;
        }
    }
);

export const appUsersSlice = createSlice({
    name: "appUsers",
    initialState: {
        data: [],
        total: 1,
        params: {},
        allData: [],
        status: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload.users;
                state.total = action.payload.total;
                state.params = action.payload.params;
                state.allData = action.payload.allData;
            })
            .addCase(regUser.fulfilled, (state, action) => {
                state.status = action.payload;
            });
    },
});

export default appUsersSlice.reducer;

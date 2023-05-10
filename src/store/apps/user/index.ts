// ** Redux Imports
import { Dispatch } from "redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

import { API_EMAIL_VERIFY, API_REG, API_RESET_PASS } from "src/utils/endpoints";
import { display } from "@mui/system";

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

/* Custom */
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

            console.log("regUser res", response.data);

            return response.data;
        } catch (error: any) {
            console.log("error", error.message);
            return error.message;
        }
    }
);

//Verify email
export const verifyEmail = createAsyncThunk(
    "appUsers/verifyEmail",
    async (data: any) => {
        const { code } = data;
        try {
            const response = await axios.get(`${API_EMAIL_VERIFY}/${code}`);

            return response.data;
        } catch (error: any) {
            console.log("error", error.message);
            return error.message;
        }
    }
);

//saveRegistration
export const saveReg = createAsyncThunk(
    "appUsers/saveReg",
    async (data: any) => {
        const { resetCode, password, userData } = data;

        try {
            //const response = await axios.get(`${API_EMAIL_VERIFY}/${code}`);
            const response = await axios.patch(
                `${API_RESET_PASS}/${resetCode}`,
                {
                    password: password,
                    passwordConfirm: password,
                    data: userData,
                },
                {
                    headers: {
                        "content-type": "application/json",
                    },
                }
            );

            return response.data;
        } catch (error: any) {
            console.log("error", error.message);
            return error.message;
        }
    }
);

interface initialState {
    data: any;
    total: any;
    params: any;
    allData: any;
    status: any;
    verify: any;
    step: any;
}

const initialState: any = {
    data: [],
    total: 1,
    params: {},
    allData: [],
    status: {},
    verify: {},
    step: 0,
};

export const appUsersSlice = createSlice({
    name: "appUsers",
    initialState,
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
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.step = 1;
                state.verify = action.payload;
            });
    },
});

export default appUsersSlice.reducer;

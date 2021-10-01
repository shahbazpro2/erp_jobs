import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserApi } from "../api/auth";

interface userTypes {
    user: {}
}

const initialState: userTypes = {
    user: {}
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserState: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        },
        setLogoutState: (state) => {
            state.user = {}
            localStorage.removeItem('token')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserApi.fulfilled, (state, { payload }) => {
            if (!payload.error) {
                state.user = payload.data.user[0]
            } else {
                if (payload.error && payload.status === 401) {
                    localStorage.removeItem('token')
                }
                state.user = {}
            }
        })
    },
})

export const {
    setUserState,
    setLogoutState
} = authSlice.actions;

export default authSlice.reducer;

import { url_loginUser } from "@components/functions/pageUrls";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import router from "next/router";
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
            router.push(url_loginUser)
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

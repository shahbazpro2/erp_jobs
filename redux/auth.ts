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
    },
    extraReducers: (builder) => {
        builder.addCase(getUserApi.fulfilled, (state, { payload }) => {
            if (!payload.error) {
                state.user = payload.data.user[0]
            } else {
                localStorage.removeItem('token')
                state.user = {}
            }
        })
    },
})

export const {
    setUserState
} = authSlice.actions;

export default authSlice.reducer;

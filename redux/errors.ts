import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface errorType {
    graphqlError: string[]
}

const initialState: errorType = {
    graphqlError: []
}


export const errorSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setGraphqlError: (state, action: PayloadAction<string[]>) => {
            console.log('action', action.payload)
            state.graphqlError = action.payload
        },
    },
})

export const {
    setGraphqlError
} = errorSlice.actions;

export default errorSlice.reducer;

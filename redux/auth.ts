import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface HeaderTypes {
    header: boolean,
    headerHeight: number,
    scrollOnOff: boolean,
    navigation: any
}
const initialState: HeaderTypes = {
    header: true,
    headerHeight: 0,
    scrollOnOff: true,
    navigation: {}
}

export const generalSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        setHeaderState: (state, action: PayloadAction<boolean>) => {
            state.header = action.payload
        },
        setHeaderHight: (state, action: PayloadAction<number>) => {
            state.headerHeight = action.payload
        },
        setScrollOnOff: (state, action: PayloadAction<boolean>) => {
            state.scrollOnOff = action.payload
        },
        setNavigation: (state, action: PayloadAction<any>) => {
            state.navigation = action.payload
        }
    }
})

export const {
    setHeaderState,
    setHeaderHight,
    setScrollOnOff,
    setNavigation
} = generalSlice.actions;

export default generalSlice.reducer;

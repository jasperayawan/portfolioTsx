import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
    darkmode: boolean
}
const initialState: DarkModeState = {
    darkmode: false,
}

export const DarkModeSlice = createSlice({
    name: 'DarkMode',
    initialState,
    reducers: {
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkmode = action.payload
        }
    }
})

export const { setDarkMode } = DarkModeSlice.actions
export default DarkModeSlice.reducer;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LogInState {
    LogIn: boolean,
    count: number
}

const initialState: LogInState = {
    LogIn: false,
    count: 0
}

export const logInSlice = createSlice({
    name: 'logIn',
    initialState,
    reducers:{
        counter(state, action: PayloadAction<number>) {
            state.count += action.payload
        }
    }
})

export default logInSlice.reducer
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import logInReducer from './reducers/logInReducer/LogInSlice'

const rootReducer = combineReducers({
    logInReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']
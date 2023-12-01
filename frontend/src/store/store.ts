import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {goalAPI} from "../services/GoalService";


const rootReducer = combineReducers({
    [goalAPI.reducerPath]: goalAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(goalAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice } from './index';


export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
}) 
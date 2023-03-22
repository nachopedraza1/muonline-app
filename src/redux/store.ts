import { configureStore } from '@reduxjs/toolkit'
import { guidesSlice } from './slices';

export const store = configureStore({
    reducer: {
        guides: guidesSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
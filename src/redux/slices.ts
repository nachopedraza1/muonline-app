import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Guide } from '../interfaces/interfaces';

const initialState = {
    guide: {} as Guide
}

export const guidesSlice = createSlice({
    name: 'guideList',
    initialState,
    reducers: {
        setGuide: (state, { payload }: PayloadAction<Guide>) => {
            state.guide = payload;
        },
    },
})

export const { setGuide } = guidesSlice.actions;
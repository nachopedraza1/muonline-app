import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { guideList } from '../helpers';
import { GuideType } from '../interfaces/interfaces';

interface Guides {
    guide: GuideType | {}
}

const initialState: Guides = {
    guide: guideList[0]
}

export const guidesSlice = createSlice({
    name: 'guides',
    initialState,
    reducers: {
        setGuides: (state, { payload }: PayloadAction<GuideType | {}>) => {
            state.guide = payload
        },
    },
})

export const { setGuides } = guidesSlice.actions;
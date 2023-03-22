import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { guideList } from '../helpers';
import { GuideType } from '../interfaces/interfaces';

const initialState: GuideType[] = guideList;

export const guidesSlice = createSlice({
    name: 'guides',
    initialState: {
        guideList
    },
    reducers: {
        setGuides: (state, { payload }: PayloadAction<GuideType[]>) => {
            state.guideList = payload;
        },
    },
})

export const { setGuides } = guidesSlice.actions;
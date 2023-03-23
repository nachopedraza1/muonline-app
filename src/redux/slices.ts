import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GuideType } from '../interfaces/interfaces';

const initialState = {
    guides: {
        id: "",
        name: "",
        type: "",
        info: {
            infoBoss: "",
            infoDrop: "",
        },
        maps: {
            mapName: "",
            mapUrlTex: "",
            mapUrl: ""
        },
        media: {
            photoUrl: "",
            photoWidth: "",
        },
        drop: [
            {
                itemName: "",
                itemUrl: "",
                quantity: 1,
            },
        ],
        stats: [
            { id: 1, name: "", value: "", iconUrl: "" },
        ],
    },
}

export const guidesSlice = createSlice({
    name: 'guides',
    initialState,
    reducers: {
        setGuides: (state, { payload }: PayloadAction<GuideType>) => {
            state.guides = payload;
        },
    },
})

export const { setGuides } = guidesSlice.actions;
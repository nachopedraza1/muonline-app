import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Events, Monster } from '../interfaces/interfaces';


const initialState = {
    monsters: {
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
    events: {} as Events
}

export const guidesSlice = createSlice({
    name: 'guideList',
    initialState,
    reducers: {
        setMonsterGuide: (state, { payload }: PayloadAction<Monster>) => {
            state.events = initialState.events;
            state.monsters = payload;
        },
        setEventGuide: (state, { payload }: PayloadAction<Events>) => {
            state.monsters = initialState.monsters;
            state.events = payload;
        }
    },
})

export const { setMonsterGuide, setEventGuide } = guidesSlice.actions;
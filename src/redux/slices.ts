import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DropList, Events, Monster } from '../interfaces/interfaces';


const initialState = {
    monsters: {
        id: "",
        name: "",
        type: "",
        quantity: 1,
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
    events: {} as Events,
    dropList: {} as DropList,
}

export const guidesSlice = createSlice({
    name: 'guideList',
    initialState,
    reducers: {
        setMonsterGuide: (state, { payload }: PayloadAction<Monster>) => {
            state.dropList = initialState.dropList;
            state.events = initialState.events;
            state.monsters = payload;
        },
        setEventGuide: (state, { payload }: PayloadAction<Events>) => {
            state.dropList = initialState.dropList;
            state.monsters = initialState.monsters;
            state.events = payload;
        },
        setDropGuide: (state, { payload }: PayloadAction<DropList>) => {
            state.monsters = initialState.monsters;
            state.events = initialState.events;
            state.dropList = payload;
        }
    },
})

export const { setMonsterGuide, setEventGuide, setDropGuide } = guidesSlice.actions;
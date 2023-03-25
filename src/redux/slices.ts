import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GuideType, Events } from '../interfaces/interfaces';


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
    events: {
        id: "",
        type: "",
        name: "",
        infoItems: [""],
        entryTittle: "",
        entryItems: [""],
        urlEntryImg: "",
        imgEntryName: "",
        rulesTitle: "",
        rulesItems: [""],
        rooms: [{ level: 1, reward: "", entryLevel: "" }]
    }
}

export const guidesSlice = createSlice({
    name: 'guideList',
    initialState,
    reducers: {
        setMonsterGuide: (state, { payload }: PayloadAction<GuideType>) => {
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
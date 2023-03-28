import { SetStateAction } from 'react';

export interface ModalType {
    openModal: boolean,
    handleClose: (value: SetStateAction<boolean>) => void,
    handleOpen?: (value: SetStateAction<boolean>) => void,
}

export interface TabPanelProps {
    children?: React.ReactNode,
    index: number,
    value: number,
}

export interface SubMenuProps {
    children?: React.ReactNode,
    typeMenu?: string,
    openSubmenu?: string,
    handleClose?: () => void,
}

export interface Monster {
    id: string,
    name: string,
    type: string,
    quantity: number,
    info: Info,
    maps: Maps,
    media: Media
    drop: Drop[],
    stats: Stats[],
}

export interface Stats {
    id: number,
    name: string,
    value: string,
    iconUrl: string,
}

export interface Maps {
    mapName: string,
    mapUrlTex: string,
    mapUrl: string,
}

export interface Drop {
    itemUrl: string,
    itemName: string,
    quantity: number,
}

export interface Media {
    photoUrl: string,
    photoWidth: string,
}

export interface Info {
    infoBoss: string,
    infoDrop: string,
}

export interface Events {
    id: string,
    type: string,
    name: string,
    infoItems?: string[],
    entryTittle?: string,
    imgEntryName?: string,
    urlEntryImg?: string,
    urlMapImg?: string,
    entryItems?: string[]
    rulesTitle?: string,
    rulesItems?: string[],
    rooms?: room[]
}

export interface room {
    level?: number | string,
    reward?: string,
    rewardList?: string[],
    entryLevel?: string,
    entryLevel2?: string,
}

export interface SliderHero {
    id: number,
    name: string,
    heroUrl: string,
    heroClass: string,
    info: string,
    stats: Stat[]
}

export interface Stat {
    tittle: string,
    value: number,
    color: string,
}

export interface SetDisplayHero {
    handleTouchSlider: (value: number) => void,
}
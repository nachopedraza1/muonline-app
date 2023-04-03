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


export interface SliderHero {
    id: number,
    name: string,
    heroUrl: string,
    heroClass: string,
    info: string,
    stats: StatCharacter[]
}

export interface SetDisplayHero {
    handleTouchSlider: (value: number) => void,
}


export interface Guide {
    id: string,
    name: string,
    type: string,
    quantity?: number,
    info?: Info,
    maps?: Maps,
    mapsDrop?: Maps[],
    drop?: Drop[],
    media?: Media
    stats?: Stats[],
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

export interface StatCharacter {
    tittle: string,
    value: number,
    color: string,
}

export interface Stats {
    id: number,
    name: string,
    value: string,
    iconUrl: string,
}

export interface Maps {
    mapName: string,
    mapUrlTex?: string,
    mapUrl: string,
    info?: string,
}

export interface Drop {
    itemUrl: string,
    itemName: string,
    quantity: number,
}

export interface Media {
    photoUrl?: string,
    photoWidth?: string,
}

export interface Info {
    infoMap?: string,
    infoBoss?: string,
    infoDrop?: string,
}

export interface room {
    level?: number | string,
    reward?: string,
    rewardList?: string[],
    entryLevel?: string,
    entryLevel2?: string,
}
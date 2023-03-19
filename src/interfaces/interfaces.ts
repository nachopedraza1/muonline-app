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

export interface GuideType {
    id: string,
    name: string,
    type: string,
    info: Info,
    maps: Maps,
    media: Media
    drop: Drop[],
    stats: Stats,
}

export interface Stats {
    level: string,
    defense: string,
    minDmg: string,
    maxDmg: string,
    hp: string,
    atkrate: string,
    iceResist: string,
    poisonResist: string,
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

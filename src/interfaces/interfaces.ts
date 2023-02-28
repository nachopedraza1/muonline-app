import { SetStateAction } from 'react';

export interface ModalType {
    open: boolean,
    handleClose: (value: SetStateAction<boolean>) => void;
    handleOpen?: (value: SetStateAction<boolean>) => void;
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
import { ReactNode } from "react";


export enum ButtonType {
    Primary = 'primary',
    Error = 'error',
}

export type ButtonClassnamesType = {
    [k in ButtonType]: string;
}

export type ButtonPropsType = {
    title: string | null;
    type: ButtonType;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    iconBefore?: ReactNode | null;
    iconAfter?: ReactNode | null;
}
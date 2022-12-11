import React, { FC } from 'react'
//@ts-ignore
import styles from './Label.module.css';
import classNames from 'classnames';


type LabelProps = {
    title: string;
};

const Label: FC<LabelProps> = ({ title  }: any) => {
    
    return (
    <div >
        <div className={classNames(styles.label)}>{title}</div>
    </div>
    )
};
export default Label
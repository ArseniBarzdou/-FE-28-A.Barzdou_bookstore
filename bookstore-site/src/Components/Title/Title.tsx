import React from 'react'
//@ts-ignore
import styles from './Title.module.css'

const Title = ({ title }: any) => {
    return (
        <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{title} </h1>
        </div>
    );
};
export default Title
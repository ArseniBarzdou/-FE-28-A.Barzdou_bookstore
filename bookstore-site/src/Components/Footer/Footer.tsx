import React from "react";
//@ts-ignore

import styles from "./Footer.module.css";



const Footer = () => {
    return <div className={styles.footerWrapper}>
    <div className={styles.footerContent}>
        <div>
            @2022 Bookstore 
        </div>
        <div>
            All rights reserver
        </div>
    </div>
</div>
};

export default Footer;

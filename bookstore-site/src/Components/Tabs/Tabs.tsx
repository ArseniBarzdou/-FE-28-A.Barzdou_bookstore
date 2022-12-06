import { allowedNodeEnvironmentFlags } from "process";
import React, { useState, FC, MouseEvent } from "react";
//@ts-ignore
import styles from "./Tabs.module.css";
import classNames from "classnames";
import { TabsProps } from "./types";





export const TABS_NAME = [
    { key: "all",tabTitle: "All" },
    { key: "mf",tabTitle: "My Favorite"},
    { key: "p",tabTitle: "Popular"},
];

const Tabs : FC<TabsProps> = ({ tabs, onClick, activeTab }) => {
  const targetTabs = (evt:MouseEvent<HTMLButtonElement>) =>{
    console.log(evt.target)

  }
  return (
    <div className={`${styles.wrapper} ${styles.wrapperTabs}`}>
      <ul className={styles.tabList}>
        {TABS_NAME.map((tab) => {
          if(tab.key!=='disabled'){
            return <li key={tab.key}><button onClick={targetTabs}>{tab.tabTitle}</button></li>
          }else{
            return <li key={tab.key}><button onClick={targetTabs} disabled>{tab.tabTitle}</button></li>
          }
        }
        )}
        </ul>

      </div>
    );
  };
  
  export default Tabs;
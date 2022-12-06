import React, { useState} from "react";

//@ts-ignore

import styles from "./Subscribe.module.css";
import classNames from "classnames";
import Title from "../Title";
import InputSub from "../InputSub";
import Label from "../Label";



const Subscribe =() => {
    const [value, setValue] = useState<string>("");

    const onChange = (inputValue: string) => {
        setValue(inputValue);
    };


    return (
        <div className={classNames(styles.Sub__Wrapper)}>
            <div className={classNames(styles.Sub__Block)}>
                <Label title={'Subscribe to Newsletter'} />
                <div className={classNames(styles.Sub__Text)}>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</div>
                <div className={classNames(styles.Sub__input)}>
                <InputSub 
                placeholder={"Your email"}
                onChange={onChange}
                value={value}/>
                </div>
            </div>
        </div>
    )
};

export default Subscribe;
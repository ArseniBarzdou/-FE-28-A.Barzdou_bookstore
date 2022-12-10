import React, {FC,ChangeEvent} from 'react'
//@ts-ignore
import styles from './InputSearch.module.css'
import {
    IconSearch
    } from '../../../src/Assets/Icons';
    import classNames from "classnames"


type InputProps = {
    value: string, 
    onChange: (value:string)=>void, 
    placeholder?: string, 
    disabled?: boolean, 
    error?: boolean,
}

const InputSearch: FC<InputProps> = ({value, onChange, placeholder='', disabled, error}) => {

    const onInputChange = (evt:ChangeEvent<HTMLInputElement>)=>{
    onChange(evt.target.value)
}
    return(
        <div>
        <input type="text" onChange={onInputChange} value={value} placeholder={placeholder} className={`${styles.input} ${ error ? styles.error : ''}`} disabled={disabled}/>
        </div>
    )
}
export default InputSearch;
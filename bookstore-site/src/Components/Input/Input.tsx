import React, {FC,ChangeEvent} from 'react'
//@ts-ignore
import styles from './Input.module.css'

type InputProps = {
    value: string, 
    onChange: (value:string)=>void, 
    placeholder?: string, 
    disabled?: boolean, 
    error?: boolean,
}

const Input: FC<InputProps> = ({value, onChange, placeholder='', disabled, error}) => {

    const onInputChange = (evt:ChangeEvent<HTMLInputElement>)=>{
    onChange(evt.target.value)
}
    return(

        <input type="text" onChange={onInputChange} value={value} placeholder={placeholder} className={`${styles.input} ${ error ? styles.error : ''}`} disabled={disabled}/>
    )
}
export default Input;
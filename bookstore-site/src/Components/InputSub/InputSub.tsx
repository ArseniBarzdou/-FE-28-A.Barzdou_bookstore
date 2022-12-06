import React, {FC,ChangeEvent} from 'react'
//@ts-ignore
import styles from './InputSub.module.css'

    import classNames from "classnames"
    import Button, { ButtonType } from "../../Components/Button";


type InputProps = {
    value: string, 
    onChange: (value:string)=>void, 
    placeholder?: string, 
    disabled?: boolean, 
    error?: boolean,
}

const InputSub: FC<InputProps> = ({value, onChange, placeholder='', disabled, error}) => {

    const onInputChange = (evt:ChangeEvent<HTMLInputElement>)=>{
    onChange(evt.target.value)
}
    return(
        <div className={classNames(styles.inputSearch__Wrapper )}>
        <input type="text" onChange={onInputChange} value={value} placeholder={placeholder} className={`${styles.input} ${ error ? styles.error : ''}`} disabled={disabled}/>
            <div className={classNames(styles.icons)}>
                    <Button
                        type={ButtonType.Primary}
                        title={"SUBSCRIBE"}
                        onClick={() => {
                        console.log("primary");
                        }}
                        className={styles.signInBtn}
                        disabled={false}
                    />
            </div>
        </div>
    )
}
export default InputSub;
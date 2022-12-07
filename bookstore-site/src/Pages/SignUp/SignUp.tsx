import React, {FC, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";


// @ts-ignore
import styles from './SignUp.module.css'
import classNames from "classnames";
import Title from "../../Components/Title";
import Button, { ButtonType } from "../../Components/Button";
import Label from "../../Components/Label";
import { PathNames } from "../Router/Router";
import Input from "../../Components/Input";
import {IconArrowLeft} from '../../../src/Assets/Icons';
import { createNewUser } from "../../Redux/Reducers/authReducer";



const validateEmail = (email: string) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignUp = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailTouch, setEmailTouch] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordTouch, setPasswordTouch] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);


    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };

    // const onChangeEmail = (value: string) => {
    //     setEmail(value);
    //     setEmailTouch(true);
    // };


    useEffect(() => {
        if (emailTouch && !validateEmail(email)) {
        setEmailError("Set correct email");
        } else {
        setEmailError("");
        }
    }, [emailTouch, email]);

    useEffect(() => {
        if (passwordTouch && password.length < 8) {
        setPasswordError("Enter more than 8 characters");
        } else {
        setPasswordError("");
        }
    }, [passwordTouch, password]);

    useEffect(() => {
        if (confirmPasswordTouched && confirmPassword.length < 8) {
            setConfirmPasswordError("Enter more than 8 characters");
        } else if (confirmPasswordTouched && confirmPassword != password) {
            setConfirmPasswordError(
            "Confirm validation failed. Password does not match"
        );
        } else {
            setConfirmPasswordError("");
        }
    }, [confirmPasswordTouched, confirmPassword, password]);
    
    const onSignUp = ()=>{
        dispatch(createNewUser({username: name, email, password}))
    };

    return (
        <div className={classNames(styles.container)}>
            <div className={styles.block__title}>
                <div> 
                    <Link to={PathNames.Home}>
                        <IconArrowLeft/>
                    </Link>
                </div>
            </div>
            <div className={classNames(styles.wrapper__place)} >
                <div className={classNames(styles.block__header)}>
                    <div className={classNames(styles.block__Signin)}>
                        <Link to={PathNames.SignIn}>
                            <Label title={'Sign IN'} />
                        </Link>
                    </div>
                    <div className={classNames(styles.block__Signup)}>
                    <Link to={PathNames.SignUp}>
                        <Label title={'Sign UP'} />
                    </Link>
                    </div>
                </div >
                    <div className={classNames(styles.block__Text)}>Name</div>
                        <div>
                        <Input 
                            placeholder={"Name"}
                            onChange={setName}
                            value={name}
                        />
                    </div>
                    <div className={classNames(styles.block__Text)}>Email</div>
                        <div>
                        <Input 
                            placeholder={"Your email"}
                            onChange={setEmail}
                            value={email}
                            error={!!emailError}
                        />
                        {emailTouch && emailError && <div>{emailError}</div>}
                    </div>
                <div>
                    <div className={classNames(styles.block__Text)}>Password</div>
                    <Input
                    placeholder={"Your password"}
                    onChange={setPassword}
                    value={password}
                    error={!!passwordError}
                    />
                    {passwordTouch && passwordError && <div className={classNames(styles.passwordError)} >{passwordError}</div>}
                </div>
                <div>
                    <div className={classNames(styles.block__Text)}>Confirm password</div>
                    <Input
                    placeholder={"Confirm password"}
                    onChange={setConfirmPassword}
                    value={confirmPassword}
                    error={!!confirmPasswordError}
                    />
                    {confirmPasswordTouched && confirmPasswordError && <div className={classNames(styles.passwordError)} >{confirmPasswordError}</div>}
                </div>
                <div>
                    <Button
                        type={ButtonType.Primary}
                        title={"Sign Up"}
                        onClick={onSignUp}
                        className={styles.signInBtn}
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    )
};

export default  SignUp;
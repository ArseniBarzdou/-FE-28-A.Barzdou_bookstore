import React, {FC, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";


// @ts-ignore
import styles from './SignIn.module.css'
import classNames from "classnames";
import Title from "../../Components/Title";
import Button, { ButtonType } from "../../Components/Button";
import Label from "../../Components/Label";
import { PathNames } from "../Router/Router";
import Input from "../../Components/Input";
import {IconArrowLeft} from '../../../src/Assets/Icons';
import { authUser } from "../../Redux/Reducers/authReducer";



const validateEmail = (email: string) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
  
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);


    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };



    useEffect(() => {
        if (emailTouched && !validateEmail(email)) {
            setEmailError("Set correct email");
        } else {
            setEmailError("");
        }
    }, [emailTouched, email]);
    
    useEffect(() => {
        if (passwordTouched && password.length < 8) {
            setPasswordError("Enter more than 8 characters");
        } else {
            setPasswordError("");
        }
    }, [passwordTouched, password]);

    const onSignIn = () => {
        dispatch(authUser({ email, password }));
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
                    <Label title={'Sign IN'} />

                    </div>
                    <div className={classNames(styles.block__Signup)}>
                    <Link to={PathNames.SignUp}>
                        <Label title={'Sign UP'} />
                    </Link>
                    </div>
                </div >


                    <div className={classNames(styles.block__Text)}>Email</div>
                    <div>
                        <Input 
                            placeholder={"Your email"}
                            onChange={setEmail}
                            value={email}
                            error={!!emailError}
                        />
                        {emailTouched && emailError && <div>{emailError}</div>}
                    </div>
                <div>
                    <div className={classNames(styles.block__Text)}>Password</div>
                    <Input
                    placeholder={"Your password"}
                    onChange={setPassword}
                    value={password}
                    error={!!passwordError}
                    />
                    {passwordTouched && passwordError && <div className={classNames(styles.passwordError)} >{passwordError}</div>}
                    <div className={classNames(styles.forgotPassword)}>Forgot password?</div>
                </div>
                <div>
                    <Button
                        type={ButtonType.Primary}
                        title={"Sign In"}
                        onClick={onSignIn}
                        className={styles.signInBtn}
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    )
};

export default  SignIn;
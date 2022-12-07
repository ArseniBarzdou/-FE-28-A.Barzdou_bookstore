import React, { useState, useEffect  } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';

// @ts-ignore

import styles from "./Header.module.css";
import classNames from "classnames"

import { PathNames } from '../../Pages/Router/Router';
import { useDispatch, useSelector } from "react-redux";


import InputSearch from "../InputSearch";
import {BookstoreIcon,
        CartIcon,
        FavoriteIcon,
        UserIcon,
        } from '../../../src/Assets/Icons';
import AuthSelectors from "../../Redux/Selectors/authSelectors";


const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const currentUser = useSelector(AuthSelectors.getCurrentUser);


    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
        setValue(inputValue);
    };


    return (
        <div className={classNames(styles.header)}>
            <nav className={styles.nav}>
            <div className={classNames(styles.logo)}>
                <Link to={PathNames.Home}>
                    <BookstoreIcon/>
                </Link>

            </div>
            <InputSearch  
            placeholder={"Search..."}
            onChange={onChange}
            value={value}/>
            <div className={classNames(styles.icons)}>
            
            <FavoriteIcon/>
            
                
                <CartIcon/>
                {currentUser ? (<UserIcon/>) : (<NavLink
            to={PathNames.SignIn}
            className={classNames({
                [styles.activeLink]: location.pathname === PathNames.SignIn,            })}>
                <UserIcon/>
            </NavLink>
            )}
            </div>
            </nav>

        </div>
    )
}

export default Header;
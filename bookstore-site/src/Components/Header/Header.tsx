import React, { useState, useEffect  } from 'react';
import { useLocation, NavLink, Link, useNavigate } from 'react-router-dom';

// @ts-ignore

import styles from "./Header.module.css";
import classNames from "classnames"

import { PathNames } from '../../Pages/Router/Router';
import { useDispatch, useSelector } from "react-redux";
import { IconSearch } from '../../../src/Assets/Icons';


import {BookstoreIcon,
        CartIcon,
        FavoriteIcon,
        UserIcon,
        } from '../../../src/Assets/Icons';
import AuthSelectors from "../../Redux/Selectors/authSelectors";
import { searchForPosts } from "../../Redux/Reducers/PostReducers"
import InputSearch from '../InputSearch';

const Header = ({ onClick }: any) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const currentUser = useSelector(AuthSelectors.getCurrentUser);


    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
        setValue(inputValue);
    };

    const onSearch = () => {
            if (value.length > 0) {
            dispatch(
                    searchForPosts({
                        search: value,
                        offset: 0,
                        isOverwrite: true
                    })
                );
            navigate(`/search/${value}`, { state: { searchElement: value } });
            setValue("");
            onClick();
            }
    };
    

    return (
        <div className={classNames(styles.header)}>
            <nav className={styles.nav}>
            <div className={classNames(styles.logo)}>
                <Link to={PathNames.Home}>
                    <BookstoreIcon/>
                </Link>

            </div>
            <div className={classNames(styles.inputSearch__Wrapper )}>
            <InputSearch
            placeholder={"Search..."}
            onChange={onChange}
            
            value={value}/>
            <div className={classNames(styles.iconsSearch)} onClick={onSearch}>
                <IconSearch />
            </div>
            </div>
            <div className={classNames(styles.icons)}>
                <NavLink
                to={PathNames.FavoriteCard}>
                    <FavoriteIcon/>
                </NavLink>
                
                <NavLink
                to={PathNames.CartList}>
                <CartIcon/>
                </NavLink>

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
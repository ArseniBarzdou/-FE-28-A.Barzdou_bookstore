import React, { FC,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import {Link} from 'react-router-dom';

//@ts-ignore

import styles from './BookCard.module.css';
import { PathNames } from "../Router/Router";
import {IconArrowLeft} from '../../../src/Assets/Icons';
import Title from '../../Components/Title';
import Subscribe from '../../Components/Subscribe';
import PopularBooks from '../../Components/PopularBooks';
import Book from '../../Components/Book';
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { getPosts } from '../../Redux/Reducers/PostReducers';
import CardList from '../../Components/CardList';
import { CardListType, LikeStatus, BookProps } from "../../Utils/globalTypes";
import Label from '../../Components/Label';

const BookCard = () => {
    //   const { theme, onChangeTheme } = useThemeContext();
    //   const isDarkTheme = theme === Theme.Dark;
        // const post = useSelector(postSelectors.getSinglePost);
        const cardsList = useSelector(PostsSelectors.getCardsList);
        const dispatch = useDispatch();
    
        
        useEffect(() => {
            dispatch(getPosts());
        }, []);
    
        return (
            <div>
            <div>

                <div>
                {/* <Book post={post}/> */}
                </div>
                <div>
                    <Subscribe/>
                    <div className={styles.labelWrapper}>
                    <Label  title={"Similar books"}></Label>
                    </div>
                    <PopularBooks cardList={cardsList}/>
                </div>
            </div>
            </div>
        )
    };

export default BookCard;
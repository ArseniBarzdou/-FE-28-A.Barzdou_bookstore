import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";


//@ts-ignore

import styles from './BookCard.module.css';
import { PathNames } from "../Router/Router";
import {IconArrowLeft} from '../../../src/Assets/Icons';
import Title from '../../Components/Title';
import Subscribe from '../../Components/Subscribe';
import PopularBooks from '../../Components/PopularBooks';
import Book from '../../Components/Book';
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { getSinglePost } from '../../Redux/Reducers/PostReducers';
import { CardListType, LikeStatus, BookProps } from "../../Utils/globalTypes";
import Label from '../../Components/Label';
import BackHome from '../../Components/BackHome';


const BookCard = () => {
    const params = useParams();

    const book = useSelector(PostsSelectors.getSinglePost);
    const cardsList = useSelector(PostsSelectors.getCardsList);
    const dispatch = useDispatch();
    const { isbn13 } = params;

        
    useEffect(() => {
        if (isbn13) {
            dispatch(getSinglePost(isbn13));
        }
    }, [isbn13]);

        return (
            <div>
                <BackHome/>
            <div>

                <div>
                <Book post={book}/>
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
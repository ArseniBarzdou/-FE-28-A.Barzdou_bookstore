import React, { FC, useEffect,useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";


//@ts-ignore

import styles from "./FavoriteList.module.css";
import { PathNames } from "../Router/Router";
import Title from '../../Components/Title';
import PopularBooks from '../../Components/PopularBooks';
import Book from '../../Components/Book';
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { 
    getSinglePost,  
    setActiveTab,
    setFavouritePost,
    getMyFavoriteList,
    getPosts,
} from '../../Redux/Reducers/PostReducers';
import CardList from '../../Components/CardList';
import Tabs from '../../Components/Tabs';
import { 
    CardListType, 
    DEFAULT_PAGE_NUMBER,
    PER_PAGE,
} from "../../Utils";
import Label from '../../Components/Label';
import FavList from '../../Components/FavList';

const FavoriteList = () => {
    const favList = useSelector(PostsSelectors.getFavoritePosts);

    const params = useParams();
    const cardsCount = useSelector(PostsSelectors.getCardsCount);

    const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
    const pagesCount = Math.ceil(cardsCount / PER_PAGE);


    const cardsList = useSelector(PostsSelectors.getCardsList);
    const dispatch = useDispatch();
    const { isbn13 } = params;

        
    useEffect(() => {
        if (isbn13) {
            dispatch(getSinglePost(isbn13));
        }
    }, [isbn13]);
    console.log(favList)

    useEffect(() => {
        const offset = (page - 1) * PER_PAGE;
        
        dispatch(getMyFavoriteList({ offset }));
    }, [page]);

        return (
            <div>
            <div>
            <Title title={"Favorites"}/>

                <div>
                    <FavList   
                        FavoritePosts={favList}
                    />
                </div>
                <div>
                    <div className={styles.labelWrapper}>
                        <Label  title={"Popular Books"}></Label>
                    </div>
                        <PopularBooks cardList={cardsList}/>
                </div>
            </div>
            </div>
        )
    };

export default FavoriteList;
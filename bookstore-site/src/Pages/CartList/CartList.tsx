import React, { FC, useEffect,useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";


//@ts-ignore

import styles from "./CartList.module.css";
import { PathNames } from "../Router/Router";
import {IconArrowLeft} from '../../../src/Assets/Icons';
import Title from '../../Components/Title';
import Subscribe from '../../Components/Subscribe';
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
    LikeStatus,   
    TabsNames,
    DEFAULT_PAGE_NUMBER,
    PER_PAGE,
} from "../../Utils";
import Label from '../../Components/Label';

const CartList = () => {
    const activeTab = useSelector(PostsSelectors.getActiveTab);




    const params = useParams();
    const cardsCount = useSelector(PostsSelectors.getCardsCount);

    const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
    const pagesCount = Math.ceil(cardsCount / PER_PAGE);


    const isMyFav = activeTab === TabsNames.Favorites;
    const onTabClick = (isbn13: TabsNames) => {
        dispatch(setActiveTab(isbn13));
    };

    // useEffect(() => {
    //     dispatch(
    //         getMyFavoriteList()
    //     )
    // }, [page, isMyFav]);

    // useEffect(() => {
    //     if (isMyFav) {
    //         dispatch(getMyFavoriteList(isbn13));
    //     }
    // }, [isMyFav]);

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
            <div>
            <Title title={"Your Cart"}/>

            </div>
            </div>
        )
    };

export default CartList;
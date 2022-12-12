import React, { FC, useEffect,useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";


//@ts-ignore

import styles from "./Cart.module.css";
import { PathNames } from "../Router/Router";
import Title from '../../Components/Title';
import Book from '../../Components/Book';
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { 
    getSinglePost,  
    setActiveTab,
    setCartPost,
    getMyCartList,
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
import FavoriteCard from '../../Components/FavoriteCard';
import CartList from '../../Components/CartList';

const Cart = () => {
    const cartList = useSelector(PostsSelectors.getCartPosts);

    const params = useParams();
    const cardsCount = useSelector(PostsSelectors.getCardsCount);

    const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
    const pagesCount = Math.ceil(cardsCount / PER_PAGE);


    const dispatch = useDispatch();
    const { isbn13 } = params;

        
    useEffect(() => {
        if (isbn13) {
            dispatch(getSinglePost(isbn13));
        }
    }, [isbn13]);
    console.log(cartList)

    useEffect(() => {
        const offset = (page - 1) * PER_PAGE;
        
        dispatch(getMyCartList({ offset }));
    }, [page]);

        return (
            <div>
            <div>
            <Title title={"Your Cart"}/>

                    <div>
                        <CartList   
                            CartPosts={cartList}
                        />
                    </div>
                </div>
            </div>
        )
    };

export default Cart;
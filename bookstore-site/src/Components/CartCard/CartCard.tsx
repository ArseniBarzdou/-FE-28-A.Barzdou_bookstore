import React, {FC} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';

//@ts-ignore;

import styles from './CartCard.module.css';
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { CardListType } from "../../Utils/globalTypes";
import { CartProps } from './types';

import { 
    FavoriteIcon
} from '../../Assets/Icons';
import { 
    setCartPost,
} from "../../Redux/Reducers/PostReducers";





const CartCard: FC<CartProps> = ({ post }) =>{
    
    const { price, image, title,subtitle, rating, isbn13, authors, year, publisher, pdf, url, desc} = post;
    
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const cartPostsList: CardListType = useSelector(
        PostsSelectors.getCartPosts
    );

    const currentPostIndex = cartPostsList.findIndex(post => post.isbn13 === isbn13);
    const isFavorite = currentPostIndex !== -1;

    const onAddCart = (event: any) => {
        event.stopPropagation();
        dispatch(setCartPost(post));
    };

    const onNavigateToPost = () => {
        navigate(`/books/${isbn13}`);
    };

    return( 
    <>
        <div className={classNames(styles.cartWrapper)} onClick={onNavigateToPost}>
            <div className={classNames(styles.cartImage)}><img src={image} alt="img" /></div>
            <div className={classNames(styles.cartMiddle)}>
                <div className={classNames(styles.cartInfo)}>
                    <div className={classNames(styles.cartTitle)}>{title}</div>
                    <div className={classNames(styles.cartAuthors)}>{authors},{publisher}, {year}</div>
                </div>
                <div className={classNames(styles.cartBottom)}>
                    <div className={classNames(styles.cartReview)}>-1+</div>
                </div>
            </div>
            <div className={classNames(styles.cartLike)}>
                <div className={classNames(styles.cartPrice)}>
                    {price}
                </div>
            </div>
            <div className={classNames(styles.cartLike)}>
                <div
                    onClick={onAddCart}
                    className={classNames(styles.cartCancel )}>
                    +
                </div>
            </div>
        </div>
    </>
    )
}

export default CartCard;
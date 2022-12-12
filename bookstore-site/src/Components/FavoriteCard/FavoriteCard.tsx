import React, {FC} from 'react';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';

//@ts-ignore;

import styles from './FavoriteCard.module.css';
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { CardListType } from "../../Utils/globalTypes";
import { FavProps } from './types';

import { 
    FavoriteIcon
} from '../../../src/Assets/Icons';
import { 
    setFavouritePost,
} from "../../Redux/Reducers/PostReducers";





const FavoriteCard: FC<FavProps> = ({ post }) =>{
    
    const { price, image, title,subtitle, rating, isbn13, authors, year, publisher, pdf, url, desc} = post;
    
    const dispatch = useDispatch();

    const favouritePostsList: CardListType = useSelector(
        PostsSelectors.getFavoritePosts
    );

    const currentPostIndex = favouritePostsList.findIndex(post => post.isbn13 === isbn13);
    const isFavorite = currentPostIndex !== -1;

    const onAddFavourite = (event: any) => {
        event.stopPropagation();
        dispatch(setFavouritePost(post));
    };

    return( 
    <>
        <div className={classNames(styles.favoriteWrapper)}>
            <div className={classNames(styles.favoriteImage)}><img src={image} alt="img" /></div>
            <div className={classNames(styles.favoriteMiddle)}>
                <div className={classNames(styles.favoriteInfo)}>
                    <div className={classNames(styles.favoriteTitle)}>{title}</div>
                    <div className={classNames(styles.favoriteAuthors)}>{authors},{publisher}, {year}</div>
                </div>
                <div className={classNames(styles.favoriteBottom)}>
                    <div className={classNames(styles.favoritePrice)}>{price}</div>
                    <div className={classNames(styles.favoriteReview)}>{rating}</div>
                </div>
            </div>
                <div className={classNames(styles.favoriteLike)}>
                    <div
                        onClick={onAddFavourite}
                        className={classNames({ [styles.favouritePost]: isFavorite })}>
                        <FavoriteIcon />
                    </div>
                </div>
        </div>
    </>
    )
}

export default FavoriteCard;
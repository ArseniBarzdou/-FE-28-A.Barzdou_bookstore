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
            <div><img src={image} alt="img" /></div>
            <div>
                <div>
                    <div>{title}title</div>
                    <div>authors{authors},{publisher}, {year}</div>
                </div>
                <div>
                    <div>{price}11</div>
                    <div>{rating}4</div>
                </div>
                <div>
                <div
                        onClick={onAddFavourite}
                        className={classNames({ [styles.favouritePost]: isFavorite })}>
                        <FavoriteIcon />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default FavoriteCard;
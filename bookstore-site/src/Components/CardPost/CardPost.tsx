import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore
import styles from "./CardPost.module.css";
// import { CardSize } from "../CardList/CardList";
import classNames from "classnames";


// import {
//     setFavouritePost,
//     setLikeStatus,
//     setSelectedPost,
//     setSelectedImgPost,
//     setSingleImgModalVisible,
//     setSinglePostModalVisible,
// } from "../../Redux/reducers/PostsReducer";
import { CardListType, LikeStatus, CardPostProps } from "../../Utils/globalTypes";
import { ReviewIcon } from "../../Assets/Icons";
// import PostsSelectors from "../../Redux/selectors/postSelectors";





const CardPost: FC<CardPostProps> = ({ post }) => {
    const { image, subtitle, price, title, isbn13, rating } = post;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNavigateToPost = () => {
        navigate(`/books/${isbn13}`);
      };


    // const favouritePostsList: CardListType = useSelector(
    //     PostsSelectors.getFavoritePosts
    // );

    // const currentPostIndex = favouritePostsList.findIndex(post => post.id === id);
    // const isFavorite = currentPostIndex !== -1;
    
    // const onAddFavourite = (event:any) =>{
    //     event.stopPropagation()
    //     dispatch(setFavouritePost(post))
    // };

    // const  onStatusClick = ( status: LikeStatus) =>{
    //     dispatch(setLikeStatus({status, id }));
    // }

    // const onOpenPostModal = (event: any) => {
    //     event.stopPropagation();
    //     dispatch(setSelectedPost(post));
    //     dispatch(setSinglePostModalVisible(true));
    // };

    // const onOpenImgModal=(event:any)=>{
    //     event.stopPropagation();
    //     dispatch(setSelectedImgPost(post));
    //     dispatch(setSingleImgModalVisible(true));
    // }

    return (
    <>
        <div
        className={classNames(styles.post)} onClick={onNavigateToPost}
        >

        <div className={classNames(styles.smallPost)}>
                <div className={styles.imgWrapper}>  <img src={image} alt="img" /></div>
                <div className={styles.textWrap}>
                <div className={styles.textTitle}>{title}</div>
                <div className={styles.textSubtitle}>{subtitle}</div>
            </div>
            <div className={classNames(styles.infoWrapper)}>
                <div className={styles.infoPrice}>{price}</div>
                <div className={styles.infoReview}>{rating}
                    <ReviewIcon/>
                </div>
            </div>
        </div>


        </div>
    </>
    );
};

export default CardPost;


import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore
import styles from "./CardPost.module.css";
import classNames from "classnames";


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


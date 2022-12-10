import React, { FC } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classNames from 'classnames';

//@ts-ignore

import styles from './Book.module.css';
import Button, { ButtonType } from "../Button";

// import { CardListType, LikeStatus, BookProps } from "../../Utils/globalTypes";
import { FacebookIcon, TwitterIcon, DotsIcon } from "../../Assets/Icons";
import { PathNames } from "../../Pages/Router/Router";
import {IconArrowLeft} from '../../../src/Assets/Icons';
import { BookProps } from './types';
// import { CardListType, LikeStatus, BookProps } from "../../Utils/globalTypes";





const Book: FC<BookProps> = ({ post }) => {
    const { price, image, title,subtitle, rating, isbn13, authors, year, publisher, pdf, url} = post || {};

    const dispatch = useDispatch();
    
    return (
        <>
            <div> 
                <Link to={PathNames.Home}>
                    <IconArrowLeft/>
                </Link>
            </div>
        <div className={classNames(styles.bookContainer)}>
            <div className={styles.bookTitle}>{title}</div>
            <div className={classNames(styles.bookInfo)}>
            <div className={styles.leftSideList}>  
                <div className={classNames(styles.imgWrapper)}>
                    <img src={image} alt="img" />
                </div>
                <div className={classNames(styles.likeStatus)}>

                </div>
            </div>
            <div className={styles.rightSideList}>
                <div className={styles.infoPrice}>{price}</div>
                <div className={styles.infoReview}>{rating}</div>
                <div className={classNames(styles.infoBookLeft)}>                   
                    <div className={classNames(styles.infoText)}>Authors</div>
                    <div className={classNames(styles.infoText)}>Publisher</div>
                    <div className={classNames(styles.infoText)}>Language</div>
                    <div className={classNames(styles.infoText)}>Format</div>
                </div>
                <div className={classNames(styles.infoBookRight)}>                   
                    <div className={classNames(styles.infoBooksText)}>{authors}</div>
                    <div className={classNames(styles.infoBooksText)}>{publisher}, {year}</div>
                    <div className={classNames(styles.infoBooksText)}>English</div>
                    <div className={classNames(styles.infoBooksText)}>Paper book/ ebook (PDF)</div>
                </div>
                <div>
                    More deatials
                </div>
                <Button 
                    type={ButtonType.Primary}
                    title={"Add To Card"}
                    onClick={() => {
                    console.log("primary");
                    }}
                    className={styles.signInBtn}
                    disabled={false}/>
                <div>
                    <a href={pdf}>Preview Book</a>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};


export default Book;

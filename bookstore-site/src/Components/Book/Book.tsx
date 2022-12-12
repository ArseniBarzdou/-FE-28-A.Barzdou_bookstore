import React, { FC, useMemo } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames';

//@ts-ignore

import styles from './Book.module.css';
import Button, { ButtonType } from "../Button";

import { PathNames } from "../../Pages/Router/Router";
import PostsSelectors from "../../Redux/Selectors/postSelectors";
import { 
    FavoriteIcon,
    FacebookIcon,
    TwitterIcon,
    DotsIcon,
} from '../../../src/Assets/Icons';
import { 
    setFavouritePost,
    setActiveTab,
} from "../../Redux/Reducers/PostReducers";
import { CardListType, TabsNames } from "../../Utils/globalTypes";
import { BookProps } from './types';
import Title from '../Title';
import Tabs from '../Tabs';





const Book: FC<BookProps> = ({ post }) => {
    const { price, image, title,subtitle, rating, isbn13, authors, year, publisher, pdf, url, desc} = post || {};

    const tabs = useMemo(
        () => [
            {
                key: TabsNames.All,
                title: "Description",
                disabled: false
            },
            {
                key: TabsNames.Favorites,
                title: "Authors",
                disabled: true,
            },
            {
                key: TabsNames.Popular,
                title: "Reviews",
                disabled: true,

            }
        ],
        []
    );


    const dispatch = useDispatch();

    const favouritePostsList: CardListType = useSelector(
        PostsSelectors.getFavoritePosts
    );

    const activeTab = useSelector(PostsSelectors.getActiveTab);

    const onTabClick = (id: TabsNames) => {
        dispatch(setActiveTab(id));
    };

    const currentPostIndex = favouritePostsList.findIndex(post => post.isbn13 === isbn13);
    const isFavorite = currentPostIndex !== -1;

    const onAddFavourite = (event: any) => {
        event.stopPropagation();
        dispatch(setFavouritePost(post));
    };
    
    return (
        <>
            

        
            <div className={styles.bookTitle}>
                <Title title={title}/>
            </div>
        <div className={classNames(styles.bookContainer)}>
            <div className={classNames(styles.bookWrapper)}>
                <div className={styles.leftSideList}>  
                    <div className={classNames(styles.imgWrapper)}>
                        <img src={image} alt="img" />
                    </div>
                    <div
                        onClick={onAddFavourite}
                        className={classNames({ [styles.favouritePost]: isFavorite })}>
                        <FavoriteIcon />
                    </div>
                </div>
                <div className={styles.rightSideList}>
                    <div className={classNames(styles.infoRightSide)}>
                        <div className={styles.infoPrice}>{price}</div>
                        <div className={styles.infoReview}>{rating}</div>
                    </div>
                    <div className={classNames(styles.infoRightSide)}>
                        <div className={classNames(styles.infoText)}>Authors</div>
                        <div className={classNames(styles.infoBooksText)}>{authors}</div>
                    </div>
                    <div className={classNames(styles.infoRightSide)}>
                        <div className={classNames(styles.infoText)}>Publisher</div>
                        <div className={classNames(styles.infoBooksText)}>{publisher}, {year}</div>
                    </div>
                    <div className={classNames(styles.infoRightSide)}>
                        <div className={classNames(styles.infoText)}>Language</div>
                        <div className={classNames(styles.infoBooksText)}>English</div>
                    </div>
                    <div className={classNames(styles.infoRightSide)}>
                        <div className={classNames(styles.infoText)}>Format</div>
                        <div className={classNames(styles.infoBooksText)}>Paper book/ ebook (PDF)</div>
                    </div>
                            <div>
                                More details
                            </div>
                    <div className={classNames(styles.infoButtonSide)}>
                        <div className={classNames(styles.infoText)}>
                            <Button 
                                type={ButtonType.Primary}
                                title={"Add To Card"}
                                onClick={() => {
                                console.log("primary");
                                }}
                                className={styles.cartBtn}
                                disabled={false}/>
                        </div>
                        <div className={classNames(styles.prevBtn)}>
                            <a href={pdf}>Preview Book</a>
                        </div>
                    </div>
                        
                </div>
            </div>
            <div className={classNames(styles.descWrapper)}>
                <Tabs tabs={tabs} onClick={onTabClick} activeTab={activeTab} />
                <div className={classNames(styles.infoDescription)}>
                    {desc}
                </div>
                <div className={classNames(styles.infoIcons)}>
                <a href='https://www.facebook.com/'> <FacebookIcon/></a>
                <a href='https://www.twitter.com/'>   <TwitterIcon/></a> 
                    <DotsIcon/>        
                </div>
            </div>
                
        </div>
        </>
    );
};


export default Book;

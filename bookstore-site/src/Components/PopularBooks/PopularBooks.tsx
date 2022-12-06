import React, { FC } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./PopularBooks.module.css";

import CardPost from "../CardPost";

import { CardListType } from "../../Utils/globalTypes";


export enum CardSize {
    Large = "large",
    Medium = "medium",
    Small = "small",
}

type CardListProps = {
    cardList: CardListType;
};

const PopularBooks: FC<CardListProps> = ({ cardList }) => {


    return cardList && cardList.length > 0 ? (
        <div
        className={classNames(styles.listWrapper)}
        >
        <div className={styles.leftSideList}>
            <div className={styles.mediumCardListWrapper}>
            {cardList.map((post, isbn13) => {
                if (isbn13 >= 0 && isbn13 <= 2) {
                return (
                    <CardPost post={post} key={post.isbn13}  />
                );
                }
            })}
            </div>
        </div>
        </div>
    ) : null;
};

export default PopularBooks;

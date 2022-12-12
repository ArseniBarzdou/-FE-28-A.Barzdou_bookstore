import React, { FC } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./FavList.module.css";

import FavoriteCard from "../FavoriteCard";
import { FavoriteListProps } from "./types";
import EmptyState from "../EmptyState";

const FavList: FC<FavoriteListProps> = ({ FavoritePosts }) => {
    return FavoritePosts && FavoritePosts.length > 0 ? (
        <div className={classNames(styles.searchListWrapper)}>
        {FavoritePosts.map(post => {
            return <FavoriteCard post={post} key={post.isbn13}/>;
        })}
        </div>
    ) : (
        <EmptyState/>
    );
};
export default FavList;
import React, { FC } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./SearchList.module.css";

import CardPost from "../CardPost";
import { SearchListProps } from "./types";
import EmptyState from "../EmptyState";

const SearchList: FC<SearchListProps> = ({ searchedPosts }) => {
    return searchedPosts && searchedPosts.length > 0 ? (
        <div className={classNames(styles.searchListWrapper)}>
        {searchedPosts.map(post => {
            return <CardPost post={post} key={post.isbn13}/>;
        })}
        </div>
    ) : (
        <EmptyState/>
    );
};
export default SearchList;
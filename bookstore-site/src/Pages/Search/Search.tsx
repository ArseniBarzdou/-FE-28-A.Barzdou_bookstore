import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
//@ts-ignore

import styles from "./Search.module.css";
import SearchList from "../../Components/SearchList";
import PostsSelectors from "../../Redux/Selectors/postSelectors";
// import processingAnimation from "../../lotties/processing.json";
import { PathNames } from "../Router/Router";
import { DEFAULT_PAGE_NUMBER, PER_PAGE } from "../../Utils";
import { searchForPosts } from "../../Redux/Reducers/PostReducers";

type LocationState = {
    searchElement: string;
};

const Search = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { searchElement } = location.state as LocationState;

    const searchedPosts = useSelector(PostsSelectors.getSearchedPosts);
    
    const searchedPostsCount = useSelector(PostsSelectors.getSearchedPostsCount);
    const isSearchPostsLoading = useSelector(
        PostsSelectors.getSearchedPostsLoading
    );

    const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);

    const searchString = useSelector(
      PostsSelectors.getSearchString
    );
    // !! для поиска по буквенно
    console.log(searchedPosts)
    useEffect(() => {
        if (searchElement.length === 0) {
        navigate(PathNames.Home);
        }
    }, [searchElement]);

    useEffect(() => {
        const offset = (page - 1) * PER_PAGE;
        dispatch(
        searchForPosts({ search: searchElement, offset, isOverwrite: false })
        );
    }, [page]);

    const onScroll = () => {
        setPage(prevPage => prevPage + 1);
    };
    return (
        <div
        className={classNames(styles.searchPageWrapper)}>
        <div className={styles.searchListTitle}>
            Search results " {searchElement} "
            </div>
            <div>
                <SearchList
                searchedPosts={searchedPosts}
                count={searchedPostsCount}
                onScroll={onScroll}
                />
            </div>
            
        </div>
    );
};
export default Search;
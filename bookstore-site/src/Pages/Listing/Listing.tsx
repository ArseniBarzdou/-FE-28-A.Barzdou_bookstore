import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import classNames from "classnames";


// @ts-ignore
import styles from "./Listing.module.css";

import Title from "../../Components/Title";

import CardList from "../../Components/CardList/CardList"

import {
    getPosts,
    setCardsList,
} from "../../Redux/Reducers/PostReducers";
import PostsSelectors from "../../Redux/Selectors/postSelectors";
// import Tabs from "../../Components/Tabs";
import {
    DEFAULT_PAGE_NUMBER,
    PER_PAGE,
} from "../../Utils";
import Subscribe from "../../Components/Subscribe";
import PopularBooks from "../../Components/PopularBooks";
// import SinglePostModal from "./Components/SinglePostModal";
// import PostModalImg from "./Components/SinglePostModal";


const Listing = () => {
//   const { theme, onChangeTheme } = useThemeContext();
//   const isDarkTheme = theme === Theme.Dark;
    const cardsList = useSelector(PostsSelectors.getCardsList);
    const dispatch = useDispatch();

    const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);


    const cardsCount = useSelector(PostsSelectors.getCardsCount);
    const pagesCount = Math.ceil(cardsCount / PER_PAGE);

    const onPageChange = ({ selected }: { selected: number }) => {
        setPage(selected + 1);
    };
    console.log(page);
    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div>
        <div>
            <div>
            <Title title={""}></Title>
            </div>
            <div>
            <CardList cardList={cardsList}></CardList>
            </div>
                <ReactPaginate
                    pageCount={pagesCount}
                    onPageChange={onPageChange}
                    containerClassName={styles.pagesContainer}
                    pageClassName={styles.pageNumber}
                    breakClassName={styles.pageNumber}
                    breakLinkClassName={styles.linkPage}
                    activeLinkClassName={styles.linkPage}
                    pageLinkClassName={styles.linkPage}
                    activeClassName={styles.activePageNumber}
                    nextClassName={classNames(styles.pageNumber, styles.arrowButton, {
                    [styles.availableToClickButton]: page !== pagesCount
                    })}
                    previousClassName={classNames(styles.pageNumber, styles.arrowButton, {
                    [styles.availableToClickButton]: page !== 1
                    })}
                    previousLinkClassName={styles.linkPage}
                    nextLinkClassName={styles.linkPage}
                />
            <div>
                <Subscribe/>
                {/* <PopularBooks  cardList={cardsList}/> */}
            </div>
        </div>
        </div>
    );
};

export default Listing;


// import React, { FC, useEffect } from "react";

// @ts-ignore
// import classnames from "classnames";

// import Title from "../../Components/Title";

// import CardList from "../../Components/CardList/CardList"

// import { useDispatch, useSelector } from "react-redux";
// import {
//     getPosts,
//     setCardsList,
// } from "../../Redux/Reducers/PostReducers";
// import PostsSelectors from "../../Redux/Selectors/postSelectors";





// const Listing = () => {

//     const cardsList = useSelector(PostsSelectors.getCardsList);
//     const dispatch = useDispatch();
   
//     useEffect(() => {
//         dispatch(getPosts());
//     }, []);

//     return (
//         <div>

//         <div>
//             <div>
//             <Title title={"Blog"}></Title>
//             </div>
//             <div>
//             <CardList cardList={cardsList}></CardList>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Listing;
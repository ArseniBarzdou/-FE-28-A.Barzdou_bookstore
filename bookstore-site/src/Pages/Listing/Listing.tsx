import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore
import classnames from "classnames";

import Title from "../../Components/Title";

import CardList from "../../Components/CardList/CardList"

import {
    getPosts,
    setCardsList,
} from "../../Redux/Reducers/PostReducers";
import PostsSelectors from "../../Redux/Selectors/postSelectors";
// import Tabs from "../../Components/Tabs";
import { TabsNames } from "../../Utils/globalTypes";
import Subscribe from "../../Components/Subscribe";
import PopularBooks from "../../Components/PopularBooks";
// import SinglePostModal from "./Components/SinglePostModal";
// import PostModalImg from "./Components/SinglePostModal";


const Listing = () => {
//   const { theme, onChangeTheme } = useThemeContext();
//   const isDarkTheme = theme === Theme.Dark;
    const cardsList = useSelector(PostsSelectors.getCardsList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // dispatch(setCardsList(POST_MOCK));
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
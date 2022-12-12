import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookCard from "../BookCard";
import Listing from "../Listing";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Search from "../Search";
import FavoriteCard from "../FavoriteList";
import Cart from "../Cart/Cart";
// import SearchList from "../../Components/SearchList";






export enum PathNames{
    Home = '/',
    SignIn='/sign-in',
    SignUp='/sign-up',
    Search='/search/:search',
    BookCard='/books/:isbn13',
    FavoriteCard='/favorite',
    Cart='/cart',

}


const Router = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path={PathNames.Home} element={<PagesWrapper />}>
            <Route path={PathNames.SignIn} element={<SignIn />} />
            <Route path={PathNames.Search} element={<Search />} />
            <Route path={PathNames.SignUp} element={<SignUp />} />
            <Route path={PathNames.BookCard} element={<BookCard />} />
            <Route path={PathNames.FavoriteCard} element={<FavoriteCard />} />
            <Route path={PathNames.Cart} element={<Cart />} />

            </Route>
            <Route path={'*'} element={<Navigate to={PathNames.Home}/>} />

        </Routes>
        </BrowserRouter>
    );
};
export default Router;
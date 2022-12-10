import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookCard from "../BookCard";
import Listing from "../Listing";
import PagesWrapper from "../PagesWrapper/PagesWrapper";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Search from "../Search";
// import SearchList from "../../Components/SearchList";






export enum PathNames{
    Home = '/',
    SignIn='/sign-in',
    SignUp='/sign-up',
    Search='/search',
    BookCard='/books/:isbn13',

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

            </Route>
            <Route path={'*'} element={<Navigate to={PathNames.Home}/>} />

        </Routes>
        </BrowserRouter>
    );
};
export default Router;
import React, {useState} from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";



// @ts-ignore
import store from './Redux/store';
import Router from './Pages/Router';
import Header from './Components/Header/Header';

import './App.module.css';
import Title from './Components/Title';
import Footer from './Components/Footer';
import  CardList from './Components/CardList';
import PostsSelectors from "./Redux/Selectors/postSelectors";
import {
  getPosts,
  setCardsList,
} from "../src/Redux/Reducers/PostReducers";
import Listing from './Pages/Listing';
import PagesWrapper from './Pages/PagesWrapper';

const App = () => {
  const cardsList = useSelector(PostsSelectors.getCardsList);

  const dispatch = useDispatch();

  return (
          <div>
            <Router/>
          </div>
  );
};
const AppWithStore = () => {
  return (
  <Provider store={store}>
        <App />
  </Provider>
  );
};
export default AppWithStore;

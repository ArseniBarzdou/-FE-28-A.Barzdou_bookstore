import { combineReducers } from '@reduxjs/toolkit';

import postsReducer from "./PostReducers";

const reducer = combineReducers({
    postsReducer,
})

export default reducer;
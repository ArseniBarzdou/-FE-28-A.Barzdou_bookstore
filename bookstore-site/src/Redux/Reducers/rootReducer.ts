import { combineReducers } from '@reduxjs/toolkit';

import postsReducer from "./PostReducers";
import authReducer from "./authReducer";


const reducer = combineReducers({
    postsReducer,
    authReducer,

})

export default reducer;
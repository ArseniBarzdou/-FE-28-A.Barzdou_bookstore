import { all, call, takeLatest, put } from "redux-saga/effects";

import {
    getPosts,
    setCardsList,
    searchForPosts,
    setSearchedPosts,
    setSearchedPostsCount,
    setSearchPostsLoading,
} from "../Reducers/PostReducers";
import Api from "../api";
import { GetPostsPayload, SearchPostsPayload } from "../../Utils";

import { PayloadAction } from "@reduxjs/toolkit";

function* getPostsWorker() {



    const { data, status, problem } = yield call(Api.getPostsList);




    
    if (status === 200 && data) {
    yield put(setCardsList(data.books));
    } else {
    console.log(problem);
}
}
function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
    const { _start, isOverwrite, title_contains } = action.payload;
  
    yield put(setSearchPostsLoading(true));
    const { data, status, problem } = yield call(
      Api.getSearchedPosts,
      title_contains,
      _start
    );
    if (status === 200 && data) {
      // yield put(setSearchedPostsCount(data.count));
      yield put(setSearchedPosts({ data: data, isOverwrite }));
    } else {
      console.log("Error getting search posts", problem);
    }
    yield put(setSearchPostsLoading(false));
  }


export default function* postsSagaWatcher() {
    yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),

    // takeLatest(getSinglePost, getSinglePostWorker),
]);
}
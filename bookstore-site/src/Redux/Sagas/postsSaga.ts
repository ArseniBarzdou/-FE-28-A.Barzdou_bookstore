import { all, call, takeLatest, put } from "redux-saga/effects";

import {
    getPosts,
    setSinglePost,
    getSinglePost,
    setCardsList,
    searchForPosts,
    setSearchedPosts,
    setSearchedPostsCount,
    setSearchPostsLoading,
    setSinglePostLoading,
    setCardsCount,
    getPostsCount,

} from "../Reducers/PostReducers";
import Api from "../api";
import { GetPostsPayload, SearchPostsPayload } from "../../Utils";

import { PayloadAction } from "@reduxjs/toolkit";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {


  const { offset, limit } = action.payload;
    const { data, status, problem } = yield call(Api.getPostsList, offset, limit);

    if (status === 200 && data) {
      yield put(setCardsList(data.books));
            if (data.length >= 12) {
        yield getPostsCountWorker();
      }
    } else {
    console.log(problem);
}
  yield getPostsCountWorker();
}

function* getPostsCountWorker() {
  const { data, status, problem } = yield call(Api.getPostsCount);

  if (status === 200 && data) {
    yield put(setCardsCount(data.total));
  } else {
    console.log(problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getPost, action.payload);
  if (status === 200 && data) {
    yield put(setSinglePost(data));
  } else {
    console.log(problem);
  }
  yield put(setSinglePostLoading(false));
}

function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
    const { search, isOverwrite, offset } = action.payload;
  
    yield put(setSearchPostsLoading(true));
    const { data, status, problem } = yield call(
      Api.getSearchedPosts,
      search,
      offset
    );
    if (status === 200 && data) {
      yield put(setSearchedPostsCount(data.total));
      yield put(setSearchedPosts({ data: data.books, isOverwrite }));
    } else {
      console.log("Error getting search posts", problem);
    }
    yield put(setSearchPostsLoading(false));
  }


export default function* postsSagaWatcher() {
    yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(getPostsCount, getPostsCountWorker),

    takeLatest(getSinglePost, getSinglePostWorker),
]);
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardListType,
  CardPostType,
  TabsNames,
  SearchPostsPayload,
  SetSearchedPostsPayload
} from "../../Utils/globalTypes";
// import {BookProps} from "../../Components/Book/types";


type PostStateType = {
  selectedPost: CardPostType | null;
  selectedImgPost: CardPostType | null;
  singlePostModalVisible: boolean;
  singleImgModalVisible: boolean;
  isSearchPostsLoading: boolean;
  activeTab: TabsNames;
  cardsList: CardListType;
  favouritePostsList: CardListType; 
  singlePost: CardPostType | null;
  isPostLoading: boolean;
  searchedPosts: CardListType;
  searchString: string;
  searchedPostsCount: number; 
  cardsCount: number;
};

const INITIAL_STATE: PostStateType = {
  selectedPost: null,
  selectedImgPost: null,
  singlePostModalVisible: false,
  singleImgModalVisible: false,
  isSearchPostsLoading: false,
  activeTab: TabsNames.All,
  cardsList: [],
  favouritePostsList: [],
  singlePost: null,
  isPostLoading: false,
  searchedPosts: [],
  searchString: "",
  searchedPostsCount: 0,
  cardsCount: 0,

};

const postsReducer = createSlice({
  name: "books",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts: (state, action: PayloadAction<undefined>) => {},
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardPostType>) => {
      state.singlePost = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedPost = action.payload;
    },
    setSinglePostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singlePostModalVisible = action.payload;
    },
    setSelectedImgPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedImgPost = action.payload;
    },
    setSingleImgModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singleImgModalVisible = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
    setCardsList: (state, action: PayloadAction<CardListType>) => {
      state.cardsList = action.payload;
    },

    getPostsCount: (state, action: PayloadAction<undefined>) => {},


    setCardsCount: (state, action: PayloadAction<number>) => {
      state.cardsCount = action.payload;
    },

    setFavouritePost: (state, action: PayloadAction<CardPostType>) => {
      const { isbn13 } = action.payload;
      const postIndex = state.favouritePostsList.findIndex(
        post => post.isbn13 === isbn13
      );
      if (postIndex === -1) {
        state.favouritePostsList.push(action.payload);
      } else {
        state.favouritePostsList.splice(postIndex, 1);
      }
    },

    setSearchPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchPostsLoading = action.payload;
    },

    setSearchedPosts: (
      state,
      action: PayloadAction<SetSearchedPostsPayload>
    ) => {
      const { isOverwrite, data } = action.payload;
      if (isOverwrite) {
        state.searchedPosts = data;
      } else {
        state.searchedPosts.push(...data);
      }
    },
    setSearchedPostsCount: (state, action: PayloadAction<number>) => {
      state.searchedPostsCount = action.payload;
    },
    searchForPosts: (state, action: PayloadAction<SearchPostsPayload>) => {
      // !! state.searchString = action.payload; для по буквенного поиска
    },

    getMyFavoriteList: (state, action: PayloadAction<undefined>) => {},


  }
});

export default postsReducer.reducer;

export const {
  getPosts,
  setSelectedPost,
  setSelectedImgPost,
  setSinglePostModalVisible,
  setSingleImgModalVisible,
  setActiveTab,
  setCardsList,
  setFavouritePost,
  getPostsCount,
  setCardsCount,
  // setLikeStatus,
  getSinglePost,
  setSinglePost,
  setSinglePostLoading,
  setSearchPostsLoading,
  searchForPosts,
  setSearchedPosts,
  setSearchedPostsCount,
  getMyFavoriteList
  
} = postsReducer.actions;
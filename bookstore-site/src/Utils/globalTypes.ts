export enum TabsNames {
    All ='all',
    Favorites = 'favorite',
    Popular = 'popular',
};

export enum LikeStatus {
    Like = "like",
    Dislike = "dislike"
};

export type CardPostType = {
    isbn13: number;
    image: string;
    subtitle: string;
    price: string;
    title: string;
    authors: string;
    publisher: string;
    year: number;
    rating: number;
    // likeStatus?: LikeStatus | null;
};

export type BookType = {
    isbn13: number;
    image: string;
    subtitle: string;
    price: string;
    title: string;
    authors: string;
    publisher: string;
    year: number;
    rating: number;
    pdf:string;
    // likeStatus?: LikeStatus | null;
};

export type BookProps = {
    post: BookType;
  };

export type CardPostProps = {
    post: CardPostType;

};

export type CardListType = Array<CardPostType>;

export type UserActionPayload = {
    username: string;
    password: string;
    email: string;
};
export enum RegistrationStatus {
    Success = "success",
    Failed = "failed",
    Default = "default"
}

export type ActivationParams = {
    uid: string;
    token: string;
};
export type ActivateUserPayload = {
    params: ActivationParams;
    callback: (status: RegistrationStatus) => void;
};
export type AuthUserPayload = {
    email: string;
    password: string;
};

export type User = {
    username: string;
    id: number;
    email: string;
};

export type GetPostsPayload = {
    _start: number;
    _sort?: string;
    publishedAt_gt?: string;
};

export type SearchPostsPayload = {
    title_contains: string;
    _start: number;
    isOverwrite: boolean;
};

export type SetSearchedPostsPayload = {
    data: CardListType;
    isOverwrite: boolean;
};
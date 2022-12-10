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
    url:string;
    // likeStatus?: LikeStatus | null;
};

export type BookProps = {
    post: BookType ;
};
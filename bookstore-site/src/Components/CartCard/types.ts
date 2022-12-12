export type CardType = {
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
    desc:string;
};

export type CartProps = {
    post: CardType ;
};
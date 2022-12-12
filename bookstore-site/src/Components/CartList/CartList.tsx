import React, { FC } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./CartList.module.css";

import CartCard from "../CartCard";
import { CartListProps } from "./types";
import EmptyState from "../EmptyState";

const CartList: FC<CartListProps> = ({ CartPosts }) => {
    return CartPosts && CartPosts.length > 0 ? (
        <div className={classNames(styles.searchListWrapper)}>
        {CartPosts.map(post => {
            return <CartCard post={post} key={post.isbn13}/>;
        })}
        </div>
    ) : (
        <EmptyState/>
    );
};
export default CartList;
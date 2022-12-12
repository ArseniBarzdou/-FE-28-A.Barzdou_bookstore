import React from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./EmptyState.module.css";

const EmptyState = () => {

  return (
    <div
      className={classNames(styles.cardWrapper)}
    >
      <div className={styles.imgWrapper}>
        <img
          src="https://img.freepik.com/free-vector/archaeologists-searched-various-ancient-books_1150-43285.jpg?w=996&t=st=1670866774~exp=1670867374~hmac=bc580e7ea26ad7c1c57fcc38b3eb3ae7e4051ead2986f36137d29f2cfa96c82e"
          alt="Not found request"
        />
      </div>
      <div className={styles.textWrapper}>
        <div>Sorry there's nothing was found</div>
        <div>Try to adjusting your search</div>
      </div>
    </div>
  );
};
export default EmptyState;
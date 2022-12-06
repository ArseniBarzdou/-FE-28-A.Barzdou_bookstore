import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// @ts-ignore
import styles from "./PagesWrapper.module.css";
import classNames from "classnames";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import Listing from "../Listing";


import {PathNames }from "../Router/Router";
import postSelectors from "../../Redux/Selectors/postSelectors";
import Subscribe from "../../Components/Subscribe";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import BookCard from "../BookCard";


const PagesWrapper = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };

  const [isOpened, setOpened] = useState(false);

  const location = useLocation();
  


  return (
    <>
    <div
      className={classNames(styles.app )}
    >
        <Header />

     {/* <Outlet/> */}
      {location.pathname === PathNames.Home ? <Listing/>:<Outlet/>}
      {/* <BookCard/> */}
      {/* <Subscribe/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <Footer />
    </div>
    </>
  );
};
export default PagesWrapper;

// import React, { useState } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// @ts-ignore
// import styles from "./PagesWrapper.module.css";
// import classNames from "classnames";

// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer";
// import Listing from "../Listing";


// import {PathNames }from "../Router/Router";
// import postSelectors from "../../Redux/Selectors/postSelectors";


// const PagesWrapper = () => {
// const [value, setValue] = useState<string>("");

// const onChange = (inputValue: string) => {
//     setValue(inputValue);
// };

// const [isOpened, setOpened] = useState(false);

// const location = useLocation();


// return (
//     <>
//     <div
//     className={classNames(styles.app 
//         )}
//     >
//         <Header />

//     {location.pathname === PathNames.Home ? <Listing/>:<Outlet/>}
//     <Footer />
//     </div>
//     </>
// );
// };
// export default PagesWrapper;
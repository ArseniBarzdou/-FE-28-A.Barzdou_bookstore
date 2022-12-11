import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import classNames from 'classnames';


//@ts-ignore

import styles from "./BackHome.module.css";
import { 
    IconArrowLeft,
} from '../../../src/Assets/Icons';

import { PathNames } from "../../Pages/Router/Router";


const BackHome = () => {

    return (  <div className={classNames(styles.backArrow)} > 
    <Link to={PathNames.Home}>
        <IconArrowLeft/>
    </Link>
</div>

    )
};

export default BackHome;
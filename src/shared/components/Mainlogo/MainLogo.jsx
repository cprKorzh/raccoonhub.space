import React from 'react';
import classes from "./MainLogo.module.css";
import {raccoon,checkDoc,message,table,titleRaccoon,titleHub} from './parts'

const MainLogo = () => {
    return (
        <div className={classes.wrapper}>
            <img src={titleRaccoon} alt="logotipe"     className={`${classes.titleRaccoon} ${classes.common}`} />
            <img src={titleHub} alt="logotipe"         className={`${classes.titleHub} ${classes.common}`} />
            <img src={table} alt="logotipe"            className={`${classes.table} ${classes.common}`} />
            <img src={message} alt="logotipe"          className={`${classes.message} ${classes.common}`} />
            <img src={checkDoc} alt="logotipe"         className={`${classes.checkDoc} ${classes.common}`} />
            <img src={raccoon} alt="logotipe"          className={`${classes.raccoon} ${classes.common}`} />
        </div>
    );
};

export default MainLogo;
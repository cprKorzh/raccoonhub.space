import React from 'react';
import classes from "./MainLogo.module.css";
import {raccoon,checkDoc,message,table,titleRaccoon,titleHub} from './parts'

const MainLogo = () => {
    return (
        <div className={classes.logo}>
            <img src={titleRaccoon} alt="logotipe"     className={`${classes.logo__titleRaccoon} ${classes.logo__common}`} />
            <img src={titleHub} alt="logotipe"         className={`${classes.logo__titleHub} ${classes.logo__common}`} />
            <img src={table} alt="logotipe"            className={`${classes.logo__table} ${classes.logo__common}`} />
            <img src={message} alt="logotipe"          className={`${classes.logo__message} ${classes.logo__common}`} />
            <img src={checkDoc} alt="logotipe"         className={`${classes.logo__checkDoc} ${classes.logo__common}`} />
            <img src={raccoon} alt="logotipe"          className={`${classes.logo__raccoon} ${classes.logo__common}`} />
        </div>
    );
};

export default MainLogo;
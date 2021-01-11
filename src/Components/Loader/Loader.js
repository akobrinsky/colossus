import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}>
        <div className={classes.colwrapper}>
          <span
            className={`${classes.loadingcol} ${classes.col1} ${classes.first}`}
          ></span>
          <span className={`${classes.loadingcol} ${classes.col2}`}></span>
          <span className={`${classes.loadingcol} ${classes.col3}`}></span>
          <span
            className={`${classes.loadingcol} ${classes.col1} ${classes.last}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

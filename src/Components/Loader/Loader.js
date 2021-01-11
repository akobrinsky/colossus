import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}>
        <img
          alt="content is loading"
          src={`${window.location.origin.toString()}/colossus.gif`}
        />
      </div>
    </div>
  );
};

export default Loader;

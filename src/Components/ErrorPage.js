import { ReactComponent as FullLogo } from '../UI/SVG/colossus.svg';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="container error-page py-5">
      <h1 className="title has-text-centered is-1 mt-5">
        Sorry, I couldn't find that page
      </h1>
      <div className="error-logo">
        <FullLogo fill="#2ecc71" />
      </div>
    </div>
  );
};

export default ErrorPage;

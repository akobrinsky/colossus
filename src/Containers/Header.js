import React from 'react';
import AlgoliaSearch from '../Components/AlgoliaSearch';
import NavBar from '../Components/NavBar';
const Header = ({ searchClient }) => {
  return (
    <header>
      <NavBar />
      <AlgoliaSearch searchClient={searchClient} />
    </header>
  );
};

export default Header;

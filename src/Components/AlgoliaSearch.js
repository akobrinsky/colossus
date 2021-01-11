import {
  InstantSearch,
  Hits,
  Highlight,
  connectSearchBox,
} from "react-instantsearch-dom";
import { connectStateResults } from "react-instantsearch/connectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const AlgoliaSearch = ({ searchClient }) => {
  const [showHits, setShowHits] = useState(false);

  const onFocusHandfler = (e) => {
    if (e.currentTarget === e.target) {
      console.log("fine");
    }
    e.preventDefault();
    setShowHits(true);
  };
  const onBlurHandler = () => {
    setShowHits(false);
  };

  const Hit = ({ hit }) => {
    return (
      <div className="hits">
        <Link to={`/episodes/${hit.objectID}`} className="has-text-light">
          <div className="hit has-background-dark">
            <img
              alt={hit.name}
              src={hit.thumbnail}
              className="is-hidden-mobile"
            />
            <div className="hit-content p-3">
              <p className="is-size-5">
                <span className="is-size-5 mr-2">
                  <Highlight attribute="season" hit={hit} />
                </span>
                <span className="is-size-5 mr-2">
                  <Highlight attribute="number" hit={hit} />
                </span>
                <span className="is-size-5 mr-2">
                  <Highlight attribute="year" hit={hit} />
                </span>
              </p>
              <p className="is-italic">
                <Highlight attribute="name" hit={hit} />
              </p>
              <p className="">
                <Highlight attribute="summary" hit={hit} />
              </p>
              {/* <button className="button is-small is-primary">
                See episode
              </button> */}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  const CustomSearch = connectSearchBox(
    ({ showHits, onBlurHandler, currentRefinement, refine }) => {
      return (
        <div className="container">
          <div className="field ais-SearchBox">
            <div className="control has-icons-right">
              <input
                className="input is-large is-radiusless"
                type="text"
                placeholder="Search for episodes"
                value={currentRefinement}
                // onFocus={(e) => onFocus(e)}
                // onBlur={() => onBlurHandler()}
                onChange={(e) => {
                  refine(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      );
    }
  );

  const QueryResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? (
      <Hits hitComponent={Hit} />
    ) : //<div>No query</div>
    null
  );
  // const Content = () => <Hits hitComponent={Hit} />;

  return (
    <div className="AlgoliaSearch">
      <InstantSearch
        // defaultRefinement="asdf"
        indexName="Episodes"
        searchClient={searchClient}
      >
        <header className="py-5">
          <CustomSearch
            onFocus={onFocusHandfler}
            onBlurHandler={onBlurHandler}
            showHits={showHits}
          />
        </header>
        {/* <Content /> */}
        <QueryResults />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearch;

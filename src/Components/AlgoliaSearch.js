import {
  InstantSearch,
  Hits,
  Highlight,
  connectSearchBox,
} from "react-instantsearch-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
      <div className={`hits ${!showHits ? "is-hidden" : ""}`}>
        <div className="hit has-background-dark">
          <img alt={hit.name} src={hit.thumbnail} />
          <div className="hit-content p-2">
            <p className="is-size-5">
              {hit.season} {hit.number} {hit.year}
            </p>
            <p className="is-italic">{hit.name}</p>
            <p className="">{hit.summary}</p>
            <a className="button is-small is-primary" href={hit.objectID}>
              See episode
            </a>
          </div>
        </div>
      </div>
    );
  };

  const CustomSearch = connectSearchBox(
    ({ showHits, onFocus, onBlurHandler, currentRefinement, refine }) => {
      return (
        <div className="field ais-SearchBox">
          <div className="control has-icons-right">
            <input
              className="input is-large is-radiusless"
              type="text"
              placeholder="Search for episodes"
              value={currentRefinement}
              onFocus={(e) => onFocus(e)}
              onBlur={() => onBlurHandler()}
              onChange={(e) => {
                refine(e.target.value);
              }}
            />
            <button
              className={`ais-SearchBox-reset ${!showHits ? "is-hidden" : ""}`}
              type="reset"
              title="Clear the search query."
            >
              <span className="icon is-right">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  size="2x"
                  color="#1abc9c"
                  onClick={() => onBlurHandler()}
                />
              </span>
            </button>
          </div>
        </div>
      );
    }
  );

  const Content = () => <Hits hitComponent={Hit} />;

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
        <Content />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearch;

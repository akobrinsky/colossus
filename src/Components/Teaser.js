import React from 'react';
import { Link } from 'react-router-dom';
const Teaser = ({ id, episodeInfo, idx }) => {
  const stripe =
    idx % 2 === 0 ? 'has-background-dark-light' : 'has-background-dark';
  return (
    <Link to={`/episodes/${id}`} className="has-text-light">
      <article className={`is-flex-tablet teaser br-5 ${stripe}`}>
        <img
          alt={episodeInfo.name}
          className="image is-align-self-center"
          src={episodeInfo.images.medium}
        />
        <div className="px-4 py-2">
          <h2 className="title is-3">{episodeInfo.name}</h2>
          <h4 className="subtitle is-5 mb-2">
            Season {episodeInfo.season} - Episode {episodeInfo.number}
          </h4>
          <p>
            {episodeInfo.date} | {episodeInfo.length}
          </p>
          <p className="is-italic">{episodeInfo.summary}</p>
        </div>
      </article>
    </Link>
  );
};

export default Teaser;

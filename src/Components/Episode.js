import React from "react";
import { useParams } from "react-router";
// import { showData } from "../../westworld";

const Episode = ({ shows }) => {
  const { id } = useParams();
  const { date, images, length, name, number, season, summary } = shows[id];

  return (
    <section>
      <div className="is-relative jumbotron">
        <img alt={name} src={images.original} />
        <div className="jumbo-title"></div>
        <div className="episode-info p-4">
          <h1 className="title full-episode">{name}</h1>
          <h2 className="subtitle is-2">Aired {date}</h2>
        </div>
      </div>
      <div className="content has-background-dark p-6">
        <h3 className="title is-3">{`Season ${season} Episode ${number}`}</h3>
        <p className="is-size-3">Length: {length}</p>
        <blockquote className="is-italic is-size-4">{summary}</blockquote>
      </div>
    </section>
  );
};

export default Episode;

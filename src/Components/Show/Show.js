import React from "react";

const Show = ({ showInfo }) => {
  const { day, genres, name, network, summary, time, url, image } = showInfo;
  console.log(showInfo);
  const tags = genres.map((genre) => (
    <span key={genre} className="tag is-link">
      {genre}
    </span>
  ));
  return (
    <div className="columns is-gapless m-0">
      <div className="column is-two-fifths left-jumbo-image">
        <img className="" src={image} />
      </div>
      <div className="column has-background-dark is-vcentered">
        <div className="py-6 px-5 content">
          <h2 className="title is-1">{name}</h2>
          <h3 className="subtitle is-4 has-text-grey-light">
            Airs {`${day}s at 9pm EST on ${network}`}
          </h3>
          <blockquote className="is-italic is-size-5">{summary}</blockquote>
          <a href={url} className="button mr-3 is-outlined">
            HBO
          </a>
          <a href={url} className="button mb-4 is-outlined">
            More info
          </a>
          <p className="mb-1">File Under:</p>
          <div className="tags mt-0">{tags}</div>
        </div>
      </div>
    </div>
  );
};

export default Show;

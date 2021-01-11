import React from "react";
import Teaser from "../Components/Teaser";
const Teasers = ({ shows, teasers }) => {
  return (
    <div className="teasers">
      {teasers.map((show, idx) => (
        <Teaser
          id={show}
          key={show}
          episodeInfo={shows.episodes[show]}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default Teasers;

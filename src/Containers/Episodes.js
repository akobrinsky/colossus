import React, { useEffect, useState } from "react";
import { dateFormatter, minutesDisplay, htmlStripper } from "../Utils/helpers";
import Teasers from "../Containers/Teasers";
import Loader from "../Components/Loader/Loader";
import Show from "../Components/Show/Show";
import Episode from "../Components/Episode/Episode";

const Episodes = ({ data }) => {
  const [shows, setShows] = useState({});
  const [mainListing, setMainListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newShows = {
      show: {
        url: data.url,
        image: data.image.original,
        name: data.name,
        genres: data.genres,
        time: data.schedule.time,
        day: data.schedule.days,
        network: data.network.name,
        summary: htmlStripper(data.summary),
      },
    };
    const { episodes } = data._embedded;
    const length = episodes.length;
    const newest = [];
    const organizedEpisodes = episodes.reduce((acc, episode, i) => {
      const episodeDate = dateFormatter(episode.airstamp);
      if (i > length - 11) newest.push(episode.id);
      acc[episode.id] = {
        name: episode.name,
        season: episode.season,
        number: episode.number,
        images: episode.image,
        length: minutesDisplay(episode.runtime),
        date: episodeDate("full-date"),
        summary: htmlStripper(episode.summary),
        unixtime: episodeDate("unixTime"),
      };
      return acc;
    }, {});
    newShows.episodes = organizedEpisodes;
    setMainListing(newest.reverse());
    setShows(newShows);
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Episode episodeInfo={shows.episodes["943066"]} /> */}
          <Show showInfo={shows.show} />
          <Teasers teasers={mainListing} shows={shows} />
        </>
      )}
    </div>
  );
};

export default Episodes;

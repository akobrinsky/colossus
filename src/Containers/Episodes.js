import React, { useEffect, useState } from "react";
import { dateFormatter, minutesDisplay, htmlStripper } from "../Utils/helpers";
import Teasers from "../Containers/Teasers";
import Loader from "../Components/Loader/Loader";
import Show from "../Components/Show";
import Episode from "../Components/Episode";
import Header from "../Containers/Header";
import ErrorPage from "../Components/ErrorPage";
import { Route, Switch } from "react-router-dom";

const Episodes = ({ data, searchClient }) => {
  const [shows, setShows] = useState({});
  const [mainListing, setMainListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
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
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header searchClient={searchClient} />
          <main className="container">
            <Switch>
              <Route exact path="/">
                <Show showInfo={shows.show} />
                <Teasers teasers={mainListing} shows={shows} />
              </Route>
              <Route path="/episodes/:id">
                <Episode shows={shows.episodes} />
              </Route>
              <Route component={ErrorPage} />
            </Switch>
          </main>
        </>
      )}
    </>
  );
};

export default Episodes;

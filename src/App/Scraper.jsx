import { useCallback, useEffect, useState, useMemo } from "react";

import usePromise from "./usePromise";

const doNothing = () => {};

export default function Scraper({
  onLastOkResponse = doNothing,
  episodes,
  title,
}) {
  const [frame, setFrame] = useState(1);

  const [countingDown, setCountingDown] = useState(false);

  const [episodeIndex, setEpisodeIndex] = useState(null);

  const ready = episodes.length > 0 && episodeIndex === null;

  if (ready) setEpisodeIndex(0);

  const handleResponse = useCallback(
    (response) => {
      if (response.ok) {
        if (countingDown) {
          setFrame(1);

          setCountingDown(false);

          onLastOkResponse(response);

          setEpisodeIndex((i) => i + 1);
        } else {
          setFrame((x) => x + 100);
        }
      } else {
        if (frame > 1) {
          setCountingDown(true);

          setFrame((x) => x - 1);
        } else {
          setEpisodeIndex((i) => i + 1);
        }
      }
    },
    [countingDown, frame, onLastOkResponse]
  );

  const buildUrl = (episode) => {
    const { season, number } = episode;

    return `https://backend.everyfra.me/thumbnail/${title}/s${season}e${number}/${frame}.png`;
  };

  const url = episodes[episodeIndex] ? buildUrl(episodes[episodeIndex]) : null;

  return url ? (
    <Child onResponse={handleResponse} key={url} url={url}></Child>
  ) : null;
}

function Child({ onResponse = doNothing, url }) {
  const promise = useMemo(() => fetch(url), [url]);

  const response = usePromise(promise);

  useEffect(() => {
    if (response !== null) {
      onResponse(response);
    }
  }, [response, onResponse]);
}

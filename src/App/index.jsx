import { useMemo } from "react";

import usePromise from "./usePromise";
// import deleteData from "./deleteData";
import handleOk from "./handleOk";
import Scraper from "./Scraper";

// deleteData("/shows");

export default function App({ title = "adventuretime", id = 290 }) {
  const promise = useMemo(
    () =>
      fetch(`https://api.tvmaze.com/shows/${id}/episodes`).then((response) =>
        response.json()
      ),
    [id]
  );

  const response = usePromise(promise);

  const episodes = useMemo(() => [response].filter(Boolean).flat(), [response]);

  return (
    <Scraper
      onLastOkResponse={handleOk}
      episodes={episodes}
      title={title}
    ></Scraper>
  );
}

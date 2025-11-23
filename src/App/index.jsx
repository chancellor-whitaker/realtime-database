import randomizeFrame from "https://cdn.jsdelivr.net/gh/chancellor-whitaker/realtime-database@master/src/App/randomizeFrame.js";
import frameData from "https://cdn.jsdelivr.net/gh/chancellor-whitaker/realtime-database@master/src/App/frameData.js";
import { useMemo } from "react";

import usePromise from "./usePromise";
// import deleteData from "./deleteData";
import handleOk from "./handleOk";
import Scraper from "./Scraper";

// deleteData("/shows");

// https://cdn.jsdelivr.net/gh/chancellor-whitaker/realtime-database@master/src/App/randomizeFrame.js
// https://cdn.jsdelivr.net/gh/chancellor-whitaker/realtime-database@master/src/App/frameData.js
export default function App({ title = "adventuretime", id = 290 }) {
  //   const promise = useMemo(
  //     () =>
  //       fetch(`https://api.tvmaze.com/shows/${id}/episodes`).then((response) =>
  //         response.json()
  //       ),
  //     [id]
  //   );
  //   const response = usePromise(promise);
  //   const episodes = useMemo(() => [response].filter(Boolean).flat(), [response]);
  //   return (
  //     <Scraper
  //       onLastOkResponse={handleOk}
  //       episodes={episodes}
  //       title={title}
  //     ></Scraper>
  //   );
  console.log(randomizeFrame(frameData, "familyguy"));
}

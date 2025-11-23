import writeData from "./writeData";

export default function handleOk({ url }) {
  const segments = url.split("/");

  const len = segments.length;

  const title = segments[len - 3];

  const combo = segments[len - 2].split("s")[1];

  const season = combo.split("e")[0];

  const episode = combo.split("e")[1];

  const frame = segments[len - 1].split(".")[0];

  const id = [title, season, episode].join("-");

  const route = `shows/${id}`;

  const lastSafe = Math.floor(Number(frame) / 10) * 10 - 10;

  const data = {
    frontend: `https://new.everyfra.me/gallery/${title}/s${season}e${episode}#frame-${season}-${episode}-${lastSafe}`,
    backend: `https://backend.everyfra.me/thumbnail/${title}/s${season}e${episode}/${lastSafe}.png`,
    last: lastSafe,
    episode,
    season,
    title,
    id,
  };

  writeData({ route, data });
}

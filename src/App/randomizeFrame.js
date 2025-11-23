const randomizeFrame = (data, showTitle) => {
  const getFrontendUrl = (object, frame) => {
    const { episode, season, title } = object;
    return (
      "https://new.everyfra.me/gallery/" +
      title +
      "/s" +
      season +
      "e" +
      episode +
      "#frame-" +
      season +
      "-" +
      episode +
      "-" +
      frame
    );
  };
  const getBackendUrl = (object, frame) => {
    const { episode, season, title } = object;
    return (
      "https://backend.everyfra.me/thumbnail/" +
      title +
      "/s" +
      season +
      "e" +
      episode +
      "/" +
      frame +
      ".png"
    );
  };
  const getRandomElement = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined; // Handle empty or non-array inputs
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min); // Ensures min is an integer
    max = Math.floor(max); // Ensures max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const { shows } = data;
  const episodes = Object.values(shows).filter(
    ({ title }) => title === showTitle
  );
  const randomEpisode = getRandomElement(episodes);
  const randomFrame = getRandomIntInclusive(1, Number(randomEpisode.last));
  return {
    frontend: getFrontendUrl(randomEpisode, randomFrame),
    backend: getBackendUrl(randomEpisode, randomFrame),
  };
};

export default randomizeFrame;

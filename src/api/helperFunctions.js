/** @format */

export const convertSongDuration = (trackTimeMillis) => {
  const minutes = Math.floor(trackTimeMillis / 60000);
  const seconds = ((trackTimeMillis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

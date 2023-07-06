import type { NextApiRequest, NextApiResponse } from "next";
import { getLastPlayed } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getLastPlayed();
  let lastPlayedStatus = true;

  if (response.status === 204 || response.status > 400) {
    lastPlayedStatus = false;
  }

  const song = await response.json();

  if (song.item === null) {
    lastPlayedStatus = false;
  }

  const title = song.items[0].track.name;
  const artist = song.items[0].track.artists
    .map((_artist) => _artist.name)
    .join(", ");
  const albumImageUrl = song.items[0].track.album.images[0].url;
  const songUrl = song.items[0].track.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    albumImageUrl,
    artist,
    songUrl,
    title,
  });
}

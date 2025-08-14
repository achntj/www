import { NextResponse } from "next/server"
import { getLastPlayed } from "@/lib/spotify"

export async function GET() {
  const response = await getLastPlayed()
  let lastPlayedStatus = true

  if (response.status === 204 || response.status > 400) {
    lastPlayedStatus = false
  }

  const song = await response.json()

  if (song.item === null) {
    lastPlayedStatus = false
  }

  const title = song.items[0].track.name
  const artist = song.items[0].track.artists.map((_artist: any) => _artist.name).join(", ")
  const albumImageUrl = song.items[0].track.album.images[0].url
  const songUrl = song.items[0].track.external_urls.spotify

  const headers = new Headers()
  headers.set("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30")

  return NextResponse.json(
    {
      albumImageUrl,
      artist,
      songUrl,
      title,
    },
    { headers },
  )
}

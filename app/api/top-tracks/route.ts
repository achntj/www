import { NextResponse } from "next/server"
import { getTopTracks } from "@/lib/spotify"

export async function GET() {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    imageUrl: track.album.images[1].url,
    title: track.name,
  }))

  const headers = new Headers()
  headers.set("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200")

  return NextResponse.json({ tracks }, { headers })
}

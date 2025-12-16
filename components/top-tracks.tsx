"use client"

import useSWR from "swr"
import fetcher from "../lib/fetcher"
import type { TopTracks } from "../lib/types"
import Loading from "./Loading"

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher)

  if (data) {
    return (
      <div className="font-body">
        {data.tracks.map((track, index) => (
          <a target="_blank" rel="noreferrer" className="border-none" href={track.songUrl} key={track.songUrl}>
            <div
              key={track.title}
              className="mt-5 rounded items-center p-4 flex space-x-4 type-base font-normal hover:bg-[rgba(var(--accent-rgb),0.08)] border-none"
            >
              <p className="type-secondary underline underline-offset-4">{index + 1}</p>
              <div className="flex space-x-5 items-center overflow-scroll whitespace-nowrap">
                <img
                  className="w-16 h-16 rounded hidden xs:block"
                  src={track.imageUrl || "/placeholder.svg"}
                  alt={track.title}
                />
                <div>
                  <p className="text-[color:var(--ink)]">{track.title}</p>
                  <p className="text-[color:var(--soft-ink)]">{track.artist}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    )
  }
  return (
    <div className="overflow-scroll pt-5 h-[84px] flex items-center">
      <Loading />
    </div>
  )
}

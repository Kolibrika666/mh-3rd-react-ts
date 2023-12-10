import React from "react";
import "./trackList.module.css";

export type TrackType = {
  nameSong: string | null;
  singer: string | null;
  genre: string | null;
};

export const genres: string[] = ["pok", "блюз", "поп"];

export const Track = (props: TrackType) => {
  return (
    <div>
      <article>
        <p>{props.nameSong}</p>
        <p>{props.singer}</p>
        <p>{props.genre}</p>
      </article>
      <hr></hr>
    </div>
  );
};

export const getTrack = (): TrackType[] => {
  return [
    { nameSong: "Я русский", singer: "Шаман", genre: "поп" },
    { nameSong: "Тяни", singer: "Король и шут", genre: "рок" },
  ];
};

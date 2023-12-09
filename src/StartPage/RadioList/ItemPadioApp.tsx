import React from "react";

type trackType = {
  nameSong: string | null;
  singer: string | null;
  genre: string | null;
};

export const genres: string[] = ["pok", "блюз", "поп"];

export const track = (props: trackType) => {
  return (
    <div>
      <p>{props.nameSong}</p>
      <p>{props.singer}</p>
      <p>{props.genre}</p>
      <hr></hr>
    </div>
  );
};

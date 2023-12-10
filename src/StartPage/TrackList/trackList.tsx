import React from "react";
import { Track } from "./ItemPadioApp";
import { TrackType } from "./ItemPadioApp";

type TracksListProps = {
  radio: TrackType[];
};

const TracksList = ({ radio }: TracksListProps) => {
  return (
    <div>
      {radio.map((item) => {
        return (
          <Track
            nameSong={item.nameSong}
            singer={item.singer}
            genre={item.genre}
          />
        );
      })}
    </div>
  );
};

export default TracksList;

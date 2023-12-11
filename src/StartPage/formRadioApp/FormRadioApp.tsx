import { useState } from "react";
import { genres } from "../TrackList/ItemPadioApp";
import "./FormRadioApp.module.css";
import { TrackType } from "../TrackList/ItemPadioApp";

type AddTrackFormProps = { addTrack(obj: TrackType): void };
const FormRadioApp = ({ addTrack }: AddTrackFormProps) => {
  const [songName, setSongName] = useState("");
  const [singer, setSinger] = useState("");
  const [genre, setGenre] = useState("");

  const hendleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    addTrack({
      nameSong: songName,
      singer: singer,
      genre: genre,
    });
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input
        type="string"
        value={songName}
        placeholder="Название песни"
        onChange={(e) => setSongName(e.target.value)}
      />
      <input
        type="string"
        value={singer}
        placeholder="Исполнитель"
        onChange={(e) => setSinger(e.target.value)}
      />
      <select
        defaultValue={genres[0]}
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value={genres[0]}>{genres[0]}</option>
        <option value={genres[1]}>{genres[1]}</option>
        <option value={genres[2]}>{genres[2]}</option>
      </select>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormRadioApp;

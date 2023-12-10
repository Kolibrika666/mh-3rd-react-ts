import { useState } from "react";
import { genres } from "../ItemPadioApp";
import "./FormRadioApp.module.css";
import { TrackType } from "../ItemPadioApp";

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

  const SelectGenre = () => {
    return (
      <select>
        <option value={genre}>{genres[0]}</option>
        <option value={genre}>{genres[1]}</option>
        <option value={genre}>{genres[2]}</option>
      </select>
    );
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
      <SelectGenre />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormRadioApp;

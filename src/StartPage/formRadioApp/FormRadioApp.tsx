import { useState } from "react";
import "./FormRadioApp.module.css";
const FormRadioApp = () => {
  const [songName, setSongName] = useState("");
  const [singer, setSinger] = useState("");

  const hendleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const SelectGenre = () => {
    const genres: string[] = ["pok", "блюз", "поп"];
    return (
      <select>
        <option value={genres[0]}>{genres[0]}</option>
        <option value={genres[1]}>{genres[1]}</option>
        <option value={genres[2]}>{genres[2]}</option>
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

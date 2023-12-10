import { useState } from "react";
import "./StartPageRadio.module.css";
import FormRadioApp from "./formRadioApp/FormRadioApp";
// import { TrackType } from "./ItemPadioApp";
import TracksList from "./TrackList/trackList";
import { getTrack } from "./ItemPadioApp";
import { TrackType } from "./ItemPadioApp";

function StartPageRadioApp() {
  const [trackList, setTrackList] = useState<TrackType[]>(getTrack());
  const addTrack = (obj: TrackType) => {
    setTrackList((prevState) => {
      return [...prevState, { ...obj }];
    });
  };
  return (
    <main>
      <h1>Заявки на радио</h1>
      <h3>Отправляйте заявку и мы сыграем вашу любимую песню!</h3>
      <section>
        <FormRadioApp addTrack={addTrack} />
        <TracksList radio={trackList} />
      </section>
    </main>
  );
}

export default StartPageRadioApp;

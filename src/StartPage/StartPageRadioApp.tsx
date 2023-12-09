import React from "react";
import "./StartPageRadio.module.css";
import FormRadioApp from "./formRadioApp/FormRadioApp";
import RadioList from "./RadioList/RadioList";
const StartPageRadioApp = () => {
  return (
    <main>
      <h1>Заявки на радио</h1>
      <h3>Отправляйте заявку и мы сыграем вашу любимую песню!</h3>
      <section>
        <FormRadioApp />
        <RadioList />
      </section>
    </main>
  );
};

export default StartPageRadioApp;

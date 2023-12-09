import React from "react";
import "./StartPageRadio.module.css";
import FormRadioApp from "./formRadioApp/FormRadioApp";
const StartPageRadioApp = () => {
  return (
    <div>
      <h1>Заявки на радио</h1>
      <h3>Отправляйте заявку и мы сыграем вашу любимую песню!</h3>
      <section>
        <FormRadioApp />
      </section>
    </div>
  );
};

export default StartPageRadioApp;

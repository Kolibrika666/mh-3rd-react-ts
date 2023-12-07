import React, { useState } from "react";

// import { constants } from "buffer";
// import logo from './logo.svg';
// import "./App.css";

type UserDataProps = {
  img: string;
  name: string;
  bio: string | null;
  citation: string | null;
  hobbiesTitle: string | null;
  hobbi1: string | null;
  hobbi2: string | null;
  hobbi3: string | null;
  hobbi4: string | null;
};

const userData: UserDataProps = {
  img: "https://s0.tchkcdn.com/g-LB7hONdudzdWMZJ6xk7tpg/11/131920/660x480/f/0/jjjj.jpg",
  name: "Дмитрий Стахович",
  bio: "Я, Дмитрий Стахович, родился и вырос в простой семье, но с детства мечтал о славе и признании. Для этого я начал упорно работать над собой и своим телом, участвуя в различных спортивных соревнованиях. Со временем, мое увлечение спортом переросло в настоящую страсть к боевым искусствам. Я стал профессиональным бойцом, выигрывая один турнир за другим. Это позволило мне не только укрепить свою физическую форму, но и закалитьхарактер. Моя жизнь изменилась кардинальным образом, когда меня пригласилина съемки фильма. С тех пор я стал актером, продолжая совершенствовать свое мастерство и участвовать в различных проектах. Несмотря на то, что яизвестен своими ролями в боевиках и триллерах, я стараюсь неограничиваться одним амплуа и пробовать себя в разных жанрах. Ведь для меня важно, чтобы каждая моя работа была уникальной и запоминающейся. В свободное от съемок время я продолжаю заниматься спортом, поддерживаю активный образ жизни и помогаю молодым талантам достигать своих целей. Ведь, как никто другой, я знаю, что упорный труд и вера в себя – залог успеха.",
  citation: "Слово не воробей, вообще ни что не воробей, кроме воробья",
  hobbiesTitle: "Мои увлечения",
  hobbi1: "Чтение",
  hobbi2: "Плавание",
  hobbi3: "Программирование",
  hobbi4: "Вязание",
};

const UserDataItem = (props: UserDataProps) => {
  return (
    <div>
      <picture>
        <img src={props.img} alt="profile_picture" />
      </picture>
      <h3>{props.name}</h3>
      <p>{props.bio}</p>
      <blockquote>{props.citation}</blockquote>
      <ul>
        <h4>{props.hobbiesTitle}</h4>
        <li> {props.hobbi1}</li>
        <li> {props.hobbi2} </li>
        <li> {props.hobbi3} </li>
        <li>{props.hobbi4} </li>
      </ul>
    </div>
  );
};

const GetUserDataItem = () => UserDataItem(userData);

const Counter = () => {
  const count: number = 0;

  const [currentCount, setCurrentCount] = useState(count);
  let textContent = `Cчетчик: ${currentCount}`;

  const countPlus = () => {
    setCurrentCount(currentCount - 1);
  };
  const countMinus = () => {
    setCurrentCount(currentCount + 1);
  };

  return (
    <div>
      <article>
        <button onClick={countMinus}>Уменьшить</button>
        <p>{textContent}</p>
        <button onClick={countPlus}>Увеличить</button>
      </article>
    </div>
  );
};

function App() {
  return (
    <div>
      <GetUserDataItem />
      <Counter />
    </div>
  );
}

export default App;

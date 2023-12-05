import React from "react";
import userData from "./App.jsx";

type UserDataProps = {
  img: string;
  name: string;
  bio: string;
  citation: string;
  hobbiesTitle: string;
  hobbi1: string;
  hobbi2: string;
  hobbi3: string;
  hobbi4: string;
};

const UserDataItem = { props: UserDataProps } => {
  return (
    <div>
    <picture>
    <img
      src = {props.name}
      alt = "profile_picture"
    ></img>
  </picture>
  <h3>{props.img}</h3>
  <p>{props.bio}</p>
  <blockquote>{props.citation}</blockquote>
  <ul>
      <h4>{props. hobbiesTitle}</h4>
      <li> {props. hobbi1}</li>
      <li> {props. hobbi2} </li>
      <li> {props. hobbi3} </li>
      <li>{props. hobbi4} </li>
    </ul>
  </div>
);
};

export const ProfilePicture = () => {
  return (
    <picture>
      <img
        src="https://s0.tchkcdn.com/g-LB7hONdudzdWMZJ6xk7tpg/11/131920/660x480/f/0/jjjj.jpg"
        alt="profile_picture"
      ></img>
    </picture>
  );
};

export const ProfileName = () => {
  return ;
};

export const ProfileBio = () => {
  return (
    <p>
      Я, Дмитрий Стахович, родился и вырос в простой семье, но с детства мечтал
      о славе и признании. Для этого я начал упорно работать над собой и своим
      телом, участвуя в различных спортивных соревнованиях. Со временем, мое
      увлечение спортом переросло в настоящую страсть к боевым искусствам. Я
      стал профессиональным бойцом, выигрывая один турнир за другим. Это
      позволило мне не только укрепить свою физическую форму, но и закалить
      характер. Моя жизнь изменилась кардинальным образом, когда меня пригласили
      на съемки фильма. С тех пор я стал актером, продолжая совершенствовать
      свое мастерство и участвовать в различных проектах. Несмотря на то, что я
      известен своими ролями в боевиках и триллерах, я стараюсь не
      ограничиваться одним амплуа и пробовать себя в разных жанрах. Ведь для
      меня важно, чтобы каждая моя работа была уникальной и запоминающейся. В
      свободное от съемок время я продолжаю заниматься спортом, поддерживаю
      активный образ жизни и помогаю молодым талантам достигать своих целей.
      Ведь, как никто другой, я знаю, что упорный труд и вера в себя – залог
      успеха.
    </p>
  );
};

export const ProfileCitation = () => {
  return (
    <div>
      <blockquote>"Волк не тот кто волк, а тот кто волк"</blockquote>
      <blockquote>
        "Слово не воробей, вообще ни что не воробей, кроме воробья"
      </blockquote>
    </div>
  );
};

export const ProfileHobbies = () => {
  return (
    <ul>
      <h4>Мои увлечения</h4>
      <li> Чтение </li>
      <li> Плавание </li>
      <li> Программирование </li>
      <li> Вязание </li>
    </ul>
  );
};

export const Profile = () => {
  return (
    <div>
      <ProfilePicture />
      <div>
        <ProfileName />
        <ProfileBio />
        <ProfileCitation />
        <ProfileHobbies />
      </div>
    </div>
  );
};

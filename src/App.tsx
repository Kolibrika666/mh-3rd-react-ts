import React from "react";
import { UserItem } from "./UserItem";
// import { constants } from "buffer";
// import logo from './logo.svg';
// import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello react</h1>
      <p>v 1.7</p>
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
      <div>
        <h2> Users</h2>
        <UserItem />
      </div>
    </div>
  );
}

export default App;

export const ListItem = () => {
  const randomNum = (Math.random() * 1000).toFixed(0);
  return <li>{randomNum}</li>;
};

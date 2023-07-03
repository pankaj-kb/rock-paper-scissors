import { useState } from "react";
import "./App.css";

function App() {

  const [userChoise, setUserChoise] = useState('Stone');

  const [comChoise, setComChoise] = useState('Stone');

  return <>
    <h1>{userChoise}</h1>
    <h1>{comChoise}</h1>
  </>;
}

export default App;

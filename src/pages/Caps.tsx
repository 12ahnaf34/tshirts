import { useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../fire";
import { AppContainer, Title } from "../App.styled";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

interface Redirect {
  login_register: boolean;
  cart: boolean;
}

export default function Caps(): JSX.Element {
  const [display, setDisplay] = useState(false);
  const [redirect, setRedirect] = useState<Redirect>({ login_register: false, cart: false });
  const [toggle, setToggle] = useState(false);

  const workSwitch = () => setToggle(!toggle);

  return (
    <AppContainer>
      <Navbar display={display} setDisplay={setDisplay} />
      <Title>Cap</Title>
      <button onClick={workSwitch}>Switch</button>
      <p>{toggle ? "Hello" : "Bye"}</p>
    </AppContainer>
  );
}

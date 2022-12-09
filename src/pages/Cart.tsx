import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { json } from "react-router-dom";
import { AppContainer } from "../App.styled";
import CartItems from "../components/CartItems/CartItems";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { store } from "../fire";
import { Cloth } from "./Tshirts";

export default function Cart() {
  const cart = useContext(CartContext);

  const [display, setDisplay] = useState<boolean>(false);

  if (display) return <Navbar display={display} setDisplay={setDisplay} />;
  else
    return (
      <AppContainer>
        <Navbar display={display} setDisplay={setDisplay} />
        <CartItems cart={cart} />
      </AppContainer>
    );
}

import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Cart() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div>
      <Navbar display={display} setDisplay={setDisplay} />
      <p>Cart</p>
    </div>
  );
}

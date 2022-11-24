import { useState } from "react";
import { AppContainer } from "../App.styled";
import Navbar from "../components/Navbar/Navbar";

export default function ProductPage() {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <AppContainer>
      <Navbar display={display} setDisplay={setDisplay} />
    </AppContainer>
  );
}

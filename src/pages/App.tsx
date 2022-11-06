import { useState } from "react";
import { AppContainer } from "../App.styled";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";

function App(): JSX.Element {
  const [display, setDisplay] = useState<boolean>(false);

  if (display) return <Navbar display={display} setDisplay={setDisplay} />;
  else {
    return (
      <AppContainer>
        <Navbar display={display} setDisplay={setDisplay} />
        <LandingPage />
      </AppContainer>
    );
  }
}

export default App;

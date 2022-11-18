import { useContext, useState } from "react";
import { AppContainer } from "../App.styled";
import Footer from "../components/Footer/Footer";
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
        <Footer />
      </AppContainer>
    );
  }
}

export default App;

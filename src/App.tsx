import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  //Just an example of typing a useState
  const [count, setCount] = useState<number | null>(0);

  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;

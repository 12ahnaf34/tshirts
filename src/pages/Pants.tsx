import { useState, useCallback } from "react";
import { BsToggle2Off } from "react-icons/bs";
import { AppContainer, Title } from "../App.styled";
import Navbar from "../components/Navbar/Navbar";

function sortData(array: number[], toggle: boolean) {
  if (toggle) {
    const sortedData = array.sort((a, b) => {
      return a > b ? 1 : -1;
    });
    return sortedData;
  } else {
    const sortedData = array.sort((a, b) => {
      return a > b ? -1 : 1;
    });
    return sortedData;
  }
}

export default function Pants(): JSX.Element {
  const [display, setDisplay] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([10, 9, 5, 2, 6, 12, 663, 34, 7, 1, 3, 4, 7]);
  const [toggle, setToggle] = useState<boolean>(false);

  const sort = useCallback(() => {
    setToggle((old) => !old);
    sortData(array, toggle);
  }, [array, toggle]);

  return (
    <AppContainer>
      <Navbar display={display} setDisplay={setDisplay} />
      <Title>Pants</Title>
      <button onClick={sort}>Sort</button>
      {array.map((item) => {
        return <p>{item} </p>;
      })}
    </AppContainer>
  );
}

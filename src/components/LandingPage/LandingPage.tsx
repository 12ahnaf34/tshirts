import React, { useEffect, useState } from "react";
import { caps, pants, tShirts } from "../clothes";
import {
  CamoContainer,
  CamoTitle,
  ClothesContainer,
  ComicContainer,
  ComicTitle,
  Container,
  DualContainer,
  Image,
  ZenContainer,
  ZenTitle,
} from "./LandingPage.styled";

export default function LandingPage(): JSX.Element {
  //Added caps twice to stop app from crashing
  const [array, setArray] = useState<string[][]>([tShirts, pants, caps, caps]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((old) => old + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (index == array.length - 1) {
    setIndex(0);
  }

  const redirect = (location: string) => {
    window.open(location, "_blank");
  };

  return (
    <Container>
      <ClothesContainer>
        <Image src={array[index][0]} />
        <Image src={array[index][1]} />
        <Image src={array[index][2]} />
      </ClothesContainer>
      <ZenContainer onClick={() => redirect("/tshirts")}>
        <ZenTitle>Zen Threads</ZenTitle>
      </ZenContainer>

      <DualContainer>
        <CamoContainer onClick={() => redirect("/tshirts")}>
          <CamoTitle>Camowear</CamoTitle>
        </CamoContainer>
        <ComicContainer onClick={() => redirect("/tshirts")}>
          <ComicTitle>Supersuits</ComicTitle>
        </ComicContainer>
      </DualContainer>
    </Container>
  );
}

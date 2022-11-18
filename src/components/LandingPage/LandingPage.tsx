import React, { useEffect, useState } from "react";
import { caps, pants, tShirts } from "../clothes";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  BigLink,
  CamoContainer,
  CamoTitle,
  ClothesContainer,
  ComicContainer,
  ComicTitle,
  Container,
  DualContainer,
  Image1,
  Image2,
  Image3,
  LeftButton,
  LinkText,
  ProgressBar,
  RightButton,
  SmallLink,
  TriContainer,
  ZenContainer,
  ZenTitle,
} from "./LandingPage.styled";

interface Clothes {
  id: string;
  name: string;
  company: string;
  type: string;
  color: string;
  image: string;
  tags: string[];
}

export default function LandingPage(): JSX.Element {
  //Added caps twice to stop app from crashing
  const [array, setArray] = useState<Clothes[][]>([tShirts, pants, caps, caps]);
  const [index, setIndex] = useState<number>(0);
  const [resetProgress, setResetProgress] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(5000);
  const animationString = "roundtime calc(var(--duration) * 1s) linear infinite";
  const string = "time calc(var(--duration) * 1s) linear  infinite";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((old) => old + 1);
    }, duration);

    if (index == array.length - 1) {
      setIndex(0);
    }

    if (duration == 0) {
      setDuration(5000);
      return () => clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index, duration]);

  const redirect = (location: string) => {
    window.open(location, "_blank");
  };

  const previous = () => {
    if (index > 0) {
      setIndex((old) => old - 1);
      setResetProgress(!resetProgress);
      setDuration(0);
    } else if (index == 0) {
      setIndex(array[0].length - 1);
      setResetProgress(!resetProgress);
      setDuration(0);
    }
  };

  const next = () => {
    setIndex((old) => old + 1);
    setResetProgress(!resetProgress);
    setDuration(0);
    // console.log(array[0][0].image);
  };

  return (
    <Container>
      <ClothesContainer>
        <LeftButton onClick={previous}>
          <AiOutlineArrowLeft />
        </LeftButton>
        <Image1 src={array[index][0].image} />
        <Image2 src={array[index][1].image} />
        <Image3 src={array[index][2].image} />
        <ProgressBar animation={resetProgress ? string : animationString} />
        <RightButton onClick={next}>
          <AiOutlineArrowRight />
        </RightButton>
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

      <TriContainer>
        <BigLink image="url(/warm.png)">
          <LinkText backgroundColor="" fontColor="#1b4b5e">
            Casual
          </LinkText>
        </BigLink>
        <SmallLink image="url(/dark.png)">
          <LinkText backgroundColor="" fontColor="#222">
            Mesh
          </LinkText>
        </SmallLink>
        <SmallLink image="url(/weeb.png)">
          <LinkText backgroundColor="" fontColor="#f72a2d">
            Weeb
          </LinkText>
        </SmallLink>
      </TriContainer>
    </Container>
  );
}

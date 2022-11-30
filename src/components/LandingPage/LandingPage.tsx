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
  ImageLink,
  LeftButton,
  LinkText,
  ProgressBar,
  RightButton,
  SmallLink,
  TriContainer,
  ZenContainer,
  ZenTitle,
} from "./LandingPage.styled";
import { Navigate, Link } from "react-router-dom";
import { newTab } from "../../utility/Functions";

interface Cloth {
  id: string;
  name: string;
  company: string;
  type: string;
  color: string;
  image: string;
  description: string;
  tags: string[];
}

//original animations
// const animationString = `roundtime calc(var(${duration}) * 1s) linear infinite`;
// const string = `time calc(var(${duration}) * 1s) linear  infinite`;

export default function LandingPage(): JSX.Element {
  const [array, setArray] = useState<Cloth[][]>([tShirts, pants, caps]);
  const [index, setIndex] = useState<number>(0);
  const [resetProgress, setResetProgress] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(5000);
  const animationString = `roundtime ${duration / 1000}s linear infinite`;
  const string = `time ${duration / 1000}s linear  infinite`;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < array.length - 1) {
        setIndex((old) => old + 1);
      } else {
        setIndex(0);
      }
    }, duration);

    if (duration == 0) {
      setDuration(5000);
    }

    return () => clearInterval(interval);
  }, [index, duration]);

  const previous = () => {
    if (index > 0) {
      setIndex((old) => old - 1);
      setResetProgress(!resetProgress);
      setDuration(0);
    } else if (index == 0) {
      setIndex(array.length - 1);
      setResetProgress(!resetProgress);
      setDuration(0);
    }
  };

  const next = () => {
    if (index < array.length - 1) {
      setIndex((old) => old + 1);
      setResetProgress(!resetProgress);
      setDuration(0);
    } else {
      setIndex(0);
      setResetProgress(!resetProgress);
      setDuration(0);
    }
  };

  const saveState = (e: React.MouseEvent<HTMLImageElement>, product: Cloth) => {
    if (e.button === 1) localStorage.setItem("product", JSON.stringify(product));
    else localStorage.setItem("product", JSON.stringify(product));
  };

  const saveSearchTerm = (e: React.MouseEvent<HTMLAnchorElement>, searchTerm: string) => {
    if (e.button === 1) localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
    else localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
  };

  return (
    <Container>
      <ClothesContainer>
        <LeftButton onClick={previous}>
          <AiOutlineArrowLeft />
        </LeftButton>
        <ImageLink gridarea="1/1/2/1" to={`/product/${array[index][0].id}`} state={array[index][0]}>
          <Image1 src={array[index][0].image} onMouseDown={(e) => saveState(e, array[index][0])} />
        </ImageLink>
        <ImageLink gridarea="1/2/1/3" to={`/product/${array[index][1].id}`} state={array[index][1]}>
          <Image2 src={array[index][1].image} onMouseDown={(e) => saveState(e, array[index][1])} />
        </ImageLink>
        <ImageLink gridarea="1/3/1/4" to={`/product/${array[index][2].id}`} state={array[index][2]}>
          <Image3 src={array[index][2].image} onMouseDown={(e) => saveState(e, array[index][2])} />
        </ImageLink>
        <ProgressBar animation={resetProgress ? string : animationString} />
        <RightButton onClick={next}>
          <AiOutlineArrowRight />
        </RightButton>
      </ClothesContainer>

      <ZenContainer to={"/tshirts"} state={"zen"} onMouseDown={(e) => saveSearchTerm(e, "zen")}>
        <ZenTitle>Zen Threads</ZenTitle>
      </ZenContainer>

      <DualContainer>
        <CamoContainer to={"/tshirts"} state={"camo"} onMouseDown={(e) => saveSearchTerm(e, "camo")}>
          <CamoTitle>Camowear</CamoTitle>
        </CamoContainer>
        <ComicContainer to={"/tshirts"} state={"comic"} onMouseDown={(e) => saveSearchTerm(e, "comic")}>
          <ComicTitle>Supersuits</ComicTitle>
        </ComicContainer>
      </DualContainer>

      <TriContainer>
        <BigLink image="url(/warm.png)" to={"/trousers"} state={"casual"} onMouseDown={(e) => saveSearchTerm(e, "casual")}>
          <LinkText backgroundColor="" fontColor="#1b4b5e">
            Casual
          </LinkText>
        </BigLink>
        <SmallLink image="url(/dark.png)" to={"/caps"} state={"mesh"} onMouseDown={(e) => saveSearchTerm(e, "mesh")}>
          <LinkText backgroundColor="" fontColor="#222">
            Mesh
          </LinkText>
        </SmallLink>
        <SmallLink image="url(/weeb.png)" to={"/tshirts"} state={"weeb"} onMouseDown={(e) => saveSearchTerm(e, "weeb")}>
          <LinkText backgroundColor="" fontColor="#f72a2d">
            Weeb
          </LinkText>
        </SmallLink>
      </TriContainer>
    </Container>
  );
}

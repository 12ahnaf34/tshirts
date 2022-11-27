import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../App.styled";

interface ProgressBar {
  animation: string;
}

interface Props {
  image: string;
}
interface TextProps {
  backgroundColor: string;
  fontColor: string;
}
interface ImageLink {
  gridarea: string;
}
export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;

  align-items: start;
  justify-items: center;
  padding-bottom: 50px;

  background-color: ${colors.green};
`;

export const ClothesContainer = styled.div`
  width: 60cqi;
  height: 120cqi;
  display: grid;
  position: relative;

  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  margin-top: 50px;
  border: 5px solid ${colors.yellow};
  background-color: #fff;

  @media (min-width: 800px) {
    height: 30cqi;
    width: 70cqi;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ImageLink = styled(Link)<ImageLink>`
  grid-area: ${({ gridarea }) => gridarea};
`;

export const Image1 = styled.img`
  width: 100%;
  z-index: 1;
  grid-area: 1/1/2/1;
  cursor: pointer;

  @media (min-width: 800px) {
    width: 20cqi;
    max-height: 29cqi;
  }

  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer / Edge */
  user-select: none;
  /* Non-prefixed version */
`;

export const Image2 = styled.img`
  display: none;
  width: 100%;
  grid-area: 1/2/1/3;
  z-index: 1;

  @media (min-width: 800px) {
    display: block;
    width: 20cqi;
    max-height: 29cqi;
  }

  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer / Edge */
  user-select: none;
  /* Non-prefixed version */
`;

export const Image3 = styled.img`
  display: none;
  width: 100%;
  grid-area: 1/3/1/4;
  z-index: 1;

  @media (min-width: 800px) {
    display: block;
    width: 20cqi;
    max-height: 29cqi;
  }

  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer / Edge */
  user-select: none;
  /* Non-prefixed version */
`;

export const LeftButton = styled.div`
  display: none;
  height: 100%;

  grid-area: 1/1/2/2;
  z-index: 2;
  justify-self: start;

  color: ${colors.altGreen};

  @media (min-width: 800px) {
    display: grid;
    width: 3cqi;

    align-items: center;
    justify-items: center;

    font-size: 2cqi;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${colors.yellow};
      opacity: 50%;
    }
  }
`;

export const RightButton = styled.div`
  display: none;
  height: 100%;

  grid-area: 1/3/1/3;
  z-index: 2;
  justify-self: end;

  color: ${colors.altGreen};

  @media (min-width: 800px) {
    display: grid;
    width: 3cqi;

    align-items: center;
    justify-items: center;

    font-size: 2cqi;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${colors.yellow};
      opacity: 50%;
    }
  }
`;

export const ProgressBar = styled.div<ProgressBar>`
  height: 10px;
  width: 60cqi;

  grid-column: 1/4;
  position: absolute;
  bottom: 0px;

  padding: 0;
  background: linear-gradient(to right, ${colors.altGreen}, ${colors.altGreen});
  --duration: 5;
  animation: ${({ animation }) => animation || "roundtime"};
  transform-origin: left center;

  @keyframes roundtime {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  @keyframes time {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }

  @media (min-width: 800px) {
    width: 70cqi;
  }
`;

export const ZenContainer = styled(Link)`
  width: 80cqi;
  display: grid;

  margin-top: 50px;
  justify-items: center;
  align-items: center;

  background-image: url("/zentangle.png");
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.02;
  }

  @media (min-width: 800px) {
    margin-top: 15cqi;
  }
`;

export const ZenTitle = styled.p`
  width: fit-content;
  height: fit-content;

  padding: 1cqi;
  font-size: 8cqi;
  background-color: #f4e6ca;
  color: #ff4e80;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 4cqi;
  }
`;

export const DualContainer = styled.div`
  width: 80cqi;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  margin-top: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const CamoContainer = styled(Link)`
  display: grid;

  justify-items: center;
  align-items: center;

  background-image: url("/camo.png");
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.02;
  }
`;

export const CamoTitle = styled.p`
  width: fit-content;
  height: fit-content;

  padding: 1cqi;
  font-size: 8cqi;
  background-color: ${colors.white};
  color: #555;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 4cqi;
  }
`;

export const ComicContainer = styled(Link)`
  display: grid;

  justify-items: center;
  align-items: center;

  background-image: url("/comic_background.jpg");
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.02;
  }
`;

export const ComicTitle = styled.p`
  width: fit-content;
  height: fit-content;

  padding: 1cqi;
  font-size: 8cqi;
  background-color: ${colors.white};
  color: #179ee2;
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 4cqi;
  }
`;

export const TriContainer = styled.div`
  width: 80cqi;
  display: grid;

  grid-template-columns: 1fr;
  margin-top: 20px;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const BigLink = styled(Link)<Props>`
  display: grid;

  justify-items: center;
  align-items: center;

  text-decoration: none;
  background-image: ${({ image }) => image || "url(/warm.png)"};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.02;
  }

  @media (min-width: 800px) {
    grid-row: 1/3;
  }
`;

export const LinkText = styled.p<TextProps>`
  width: fit-content;
  text-align: center;

  padding: 1cqi;
  font-size: 8cqi;
  font-weight: bold;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.white};
  color: ${({ fontColor }) => fontColor || colors.altGreen};

  @media (min-width: 800px) {
    font-size: 4cqi;
  }
`;

export const SmallLink = styled(Link)<Props>`
  display: grid;

  justify-items: center;
  align-items: center;

  text-decoration: none;
  background-image: ${({ image }) => image || "url(/camo.png)"};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.02;
  }

  @media (min-width: 800px) {
    grid-column-start: 2;
  }
`;

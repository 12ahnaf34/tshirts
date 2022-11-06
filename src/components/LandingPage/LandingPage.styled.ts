import styled from "styled-components";
import { colors } from "../../App.styled";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;

  align-items: start;
  justify-items: center;

  background-color: ${colors.green};
`;

export const ClothesContainer = styled.div`
  width: 60cqi;
  display: grid;

  justify-items: center;
  align-items: center;

  border: 5px solid ${colors.yellow};
  background-color: #fff;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: 30cqi;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (min-width: 800px) {
    width: 20cqi;
    max-height: 30cqi;
  }
`;

export const ZenContainer = styled.div`
  width: 80cqi;
  display: grid;

  margin-top: 50px;
  justify-items: center;
  align-items: center;
  background-image: url("/zentangle.png");
  cursor: pointer;

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

  @media (min-width: 800px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const CamoContainer = styled.div`
  display: grid;

  justify-items: center;
  align-items: center;
  background-image: url("/camo.png");
  cursor: pointer;
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

export const ComicContainer = styled.div`
  display: grid;

  justify-items: center;
  align-items: center;
  background-image: url("/comic_background.jpg");
  cursor: pointer;
`;

export const ComicTitle = styled.p`
  width: fit-content;
  height: fit-content;

  padding: 1cqi;
  font-size: 8cqi;
  background-color: ${colors.yellow};
  color: ${colors.altGreen};
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: 4cqi;
  }
`;

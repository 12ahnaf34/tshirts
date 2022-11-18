import styled from "styled-components";
import { colors } from "../../App.styled";

interface PageButton {
  orientation: string;
}

interface ItemName {
  fontSize?: string;
}

export const ClothesDisplayContainer = styled.div`
  width: 100%;
  display: grid;

  background-color: ${colors.green};
  font-family: Varela;
  padding-bottom: 50px;
`;

export const OneLine = styled.span`
  width: 100%;
  display: grid;

  gap: 5px;
  grid-template-columns: 1fr 3fr 1fr;

  @media (min-width) {
    gap: 15px;
    grid-template-columns: 1fr 4fr 2fr;
  }
`;

export const ClothesContainer = styled.div`
  width: 100%;
  display: grid;

  gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;

  margin-top: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5cqi;
  }
`;

//extra box shadow, not sure why it was there
//,0 10px 10px rgba(0, 0, 0, 0.22)
export const Card = styled.div`
  width: 60%;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 2fr 0.5fr;
  justify-items: center;

  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.22);
  background-color: ${colors.white};

  @media (min-width: 1200px) {
    width: 90%;
  }
`;

export const Thumbnail = styled.img`
  width: 90%;
`;

export const TextArea = styled.div`
  display: grid;

  align-self: end;
  justify-items: center;
  align-items: end;
`;

export const CompanyName = styled.p`
  font-size: 6cqi;
  font-weight: bold;
  text-align: center;
  margin: 5px;

  @media (min-width: 800px) {
    font-size: 1.5cqi;
  }
`;

export const ItemName = styled.span<ItemName>`
  height: fit-content;
  font-size: 5cqi;
  text-align: center;
  margin-inline: auto;

  @media (min-width: 800px) {
    font-size: ${({ fontSize }) => fontSize || "1.5cqi"};
  }
`;

export const Pages = styled.span`
  width: 80cqi;
  display: grid;
  grid-auto-flow: column;

  justify-self: center;
  margin-top: 50px;

  @media (min-width: 800px) {
    width: 40cqi;
  }
`;

export const PageNumber = styled.span`
  width: fit-content;

  justify-self: center;
  font-family: Varela;
  font-size: 8cqi;
  color: ${colors.yellow};

  @media (min-width: 800px) {
    font-size: 4cqi;
  }
`;

export const PageButton = styled.button<PageButton>`
  width: fit-content;

  justify-self: ${({ orientation }) => orientation || "center"};

  font-family: Varela;
  font-size: 4cqi;
  border: none;
  border-radius: 10px;
  background-color: ${colors.yellow};
  color: ${colors.green};
  padding: 10px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.orange};
    color: ${colors.white};
  }

  &:active {
    scale: 0.8;
  }

  @media (min-width: 800px) {
    font-size: 2cqi;
  }
`;

export const NothingFound = styled.p`
  width: fit-content;

  margin-top: 10cqi;
  margin-bottom: 50cqi;
  justify-self: center;
  align-self: start;

  padding: 2cqi;
  font-size: 6cqi;
  text-align: center;
  background-color: ${colors.yellow};
  color: ${colors.green};

  @media (min-width: 800px) {
    font-size: 3cqi;
  }
`;

export const FilterTag = styled.span`
  width: fit-content;

  border-radius: 10px;
  padding: 5px;
  font-size: 5cqi;
  background-color: ${colors.white};
  color: ${colors.orange};
  margin: 10px;

  @media (min-width: 800px) {
    font-size: 2cqi;
  }
`;

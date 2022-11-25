import styled from "styled-components";
import { colors } from "../../App.styled";
import { BsFillFilterSquareFill } from "react-icons/bs";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: grid;

  background-color: ${colors.green};
`;

export const OneLine = styled.form`
  width: 90%;
  display: grid;

  gap: 5px;
  justify-self: center;
  grid-template-columns: 1fr 3fr 1fr;

  @media (min-width: 800px) {
    gap: 15px;
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

export const Search = styled.input`
  width: 90%;

  justify-self: center;
  align-self: center;

  margin: 0;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid ${colors.green};
  font-family: Varela;
  font-size: 6cqi;
  color: ${colors.green};

  &:focus {
    outline: 2px solid ${colors.white};
  }

  @media (min-width: 800px) {
    width: 98%;
    font-size: 2cqi;
  }
`;

export const SearchButton = styled.button`
  width: fit-content;
  height: stretch;

  justify-self: start;
  align-self: center;

  border-radius: 7px;
  border: 2px solid ${colors.yellow};
  background-color: ${colors.yellow};
  color: ${colors.green};
  font-family: Varela;
  font-size: 6cqi;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border: 2px solid ${colors.orange};
    background-color: ${colors.orange};
    color: ${colors.white};
  }

  &:active {
    scale: 0.8;
  }

  @media (min-width: 800px) {
    font-size: 2cqi;
    border-radius: 20px;
    padding: 10px;
  }
`;

export const Filter = styled(BsFillFilterSquareFill)`
  width: fit-content;
  height: stretch;

  align-self: center;
  justify-self: right;

  font-size: 10cqi;
  border: 2px solid ${colors.yellow};
  background-color: ${colors.green};
  color: ${colors.yellow};
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border: 2px solid ${colors.orange};
    background-color: ${colors.white};
    color: ${colors.orange};
  }

  &:active {
    scale: 0.8;
  }

  @media (min-width: 800px) {
    font-size: 3.3cqi;
    border-radius: 20px;
  }
`;

export const ClothesContainer = styled.div`
  width: 100%;
  display: grid;

  gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;

  margin-top: 20px;
`;

export const Card = styled.div`
  width: 60%;
  display: grid;

  grid-template-columns: 1fr;

  border-radius: 5px;
  box-shadow: 2px 2px 15px #000;
  background-color: ${colors.white};
`;

export const Thumbnail = styled.img`
  width: 100%;
`;

export const FilterSidebar = styled.div`
  width: 20cqi;

  background-color: ${colors.white};
  color: ${colors.green};
`;

export const FilterOptionsContainer = styled.div`
  width: 80%;
  display: grid;

  gap: 10px;
  grid-template-columns: 1fr 1fr;
  justify-self: center;
  justify-items: center;

  padding: 10px;
  border-radius: 10px;
  margin: 20px 0;
  background-color: ${colors.white};
  color: ${colors.green};
`;

export const Button = styled.button`
  width: stretch;
  min-height: 15cqi;
  color: ${colors.green};
  background-color: ${colors.yellow};
  border: 3px solid ${colors.yellow};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border: 2px solid ${colors.white};
    background-color: ${colors.green};
    color: ${colors.white};
  }

  @media (min-width: 800px) {
    font-size: 1.5cqi;
    min-height: 3cqi;
  }
`;

export const ColorSelect = styled.select`
  width: stretch;

  border: none;
  border-radius: 10px;
  background-color: ${colors.yellow};
  color: ${colors.green};
  text-align: center;
  cursor: pointer;

  transition: all 0.4s ease;

  &:hover {
    border: 2px solid ${colors.white};
    background-color: ${colors.green};
    color: ${colors.white};
  }

  Option {
    &:hover {
      background-color: ${colors.white} !important;
    }
  }

  @media (min-width: 800px) {
    font-size: 1.5cqi;
    min-height: 3cqi;
  }
`;

export const Option = styled.option`
  &:hover {
    background-color: ${colors.orange};
  }
`;

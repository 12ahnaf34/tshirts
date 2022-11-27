import styled from "styled-components";
import { colors } from "../../App.styled";

export const SingleProductContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  margin: 20px;
  margin-bottom: 100px;

  background-color: ${colors.white};

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 300px;
  }
`;

export const Title = styled.h1`
  grid-column: 1;

  font-family: Varela;
  font-size: 10cqi;
  margin: 0;
  color: ${colors.altGreen};
  text-align: center;

  @media (min-width: 800px) {
    font-size: 3cqi;
  }
`;

export const MainImage = styled.img`
  width: 60%;

  grid-column: 1;
  justify-self: center;
  margin-top: 2cqi;

  background-color: ${colors.white};

  @media (min-width: 800px) {
    width: 40%;
  }
`;

export const TextArea = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  gap: 10px;

  background-color: ${colors.white};
  padding: 5px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.p`
  color: ${colors.green};
  margin: 0;
  grid-column: 1;
  align-self: center;

  @media (min-width: 800px) {
    font-size: 2cqi;
  }
`;

export const Price = styled.p`
  font-size: 10cqi;
  font-weight: bold;
  margin: 0;
  color: ${colors.altGreen};
  text-align: center;

  @media (min-width: 800px) {
    grid-row: 1;
    grid-column: 2;
    font-size: 3cqi;
  }
`;

export const QuantityContainer = styled.span`
  display: grid;
  grid-column: 1;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media (min-width: 800px) {
    height: fit-content;
    align-self: end;
  }
`;

export const Quantity = styled.span`
  width: 100%;

  justify-self: center;
  align-self: center;

  font-family: Varela;
  font-size: 10cqi;
  color: ${colors.green};
  text-align: center;

  @media (min-width: 800px) {
    font-size: 3cqi;
  }
`;

export const QuantityButton = styled.button`
  border-radius: 5px;
  border: 2px solid ${colors.green};
  background-color: ${colors.green};
  color: ${colors.white};
  cursor: pointer;

  @media (min-width: 800px) {
    font-size: 2cqi;
  }
`;

export const AddToCartButton = styled.button`
  grid-column: 1;
  border-radius: 5px;
  border: 2px solid ${colors.green};
  background-color: ${colors.green};
  color: ${colors.white};
  cursor: pointer;

  @media (min-width: 800px) {
    font-size: 2cqi;
  }
`;

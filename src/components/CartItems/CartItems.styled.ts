import styled from "styled-components";
import { colors } from "../../App.styled";

export const CartItemsContainer = styled.div`
  width: 100%;
  display: grid;

  margin-top: 10px;
  background-color: ${colors.tertiary};
`;

export const Title = styled.h1`
  width: 50%;

  justify-self: center;
  align-self: center;

  text-align: center;
  font-size: 10cqi;
  background-color: ${colors.white};
  color: ${colors.secondary};
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px 0;

  @media (min-width: 800px) {
    font-size: 5cqi;
  }
`;

export const SingleItem = styled.div`
  display: grid;

  grid-template-columns: 1fr 3fr 1fr;

  background-color: ${colors.white};
  margin: 5px 0;
`;

export const ItemImage = styled.img`
  width: 25cqi;
  height: 27cqi;

  @media (min-width: 800px) {
    width: 10cqi;
    height: 10cqi;
    justify-self: center;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  margin-left: 10px;
`;

export const ItemText = styled.p`
  font-size: 4cqi;
  text-align: left;
  color: ${colors.black};
  margin: 0;

  @media (min-width: 800px) {
    font-size: 1cqi;
    align-self: center;
  }
`;

export const Button = styled.button`
  height: fit-content;
  width: fit-content;

  align-self: center;
  justify-self: center;

  background-color: ${colors.tertiary};
  color: ${colors.secondary};
  border-radius: 10px;
  border: 0;
  margin: 0 2px;
  font-size: 3cqi;

  @media (min-width: 800px) {
    font-size: 2cqi;
    padding: 20px;
    cursor: pointer;
  }
`;

export const NoItemsText = styled.p`
  font-size: 10cqi;
  text-align: center;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 20px;

  @media (min-width: 800px) {
    font-size: 3cqi;
  }
`;

export const CheckoutButton = styled.button`
  height: fit-content;
  width: fit-content;

  align-self: center;
  justify-self: center;

  font-size: 8cqi;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border-radius: 10px;
  border: 0;
  padding: 10px;
  margin: 10px 2px;
  cursor: pointer;

  @media (min-width: 800px) {
    font-size: 2cqi;
    padding: 20px;
  }
`;

import styled from "styled-components";
import { colors } from "../../App.styled";

export const FooterContainer = styled.div`
  min-height: 200px;
  display: grid;

  grid-template-columns: 1fr 1fr;

  background-color: ${colors.altGreen};
  padding-top: 50px;

  @media (min-width: 800px) {
    padding-top: 100px;
  }
`;

export const List = styled.ul`
  display: grid;
  list-style: none;

  padding: 0;
  margin: 0;
  align-self: start;
  justify-self: center;

  @media (min-width: 800px) {
    align-self: start;
    align-items: start;
  }
`;

export const List1 = styled.ul`
  list-style: none;
  margin: 0 20px;
  padding: 0;
  align-self: start;
  justify-self: center;
`;

export const List2 = styled.ul`
  list-style: none;

  grid-column: 1/3;

  margin: 0 10px;
  padding: 0;
  align-self: center;
  justify-self: center;

  @media (min-width: 800px) {
    grid-column: 2;
  }
`;

export const Item = styled.li`
  display: grid;
  font-size: 4cqi;
  justify-self:center;
  color: ${colors.white};
  

  @media(min-width:800px){
    font-size 1.5cqi;
    align-self:start;
  }
`;

export const Logos = styled.span`
  font-size:8cqi;

  @media(min-width:800px){
    font-size 2cqi;
  }
`;

export const PaymentImage = styled.img`
  width: 40cqi;

  @media (min-width: 800px) {
    width: fit-content;
  }
`;

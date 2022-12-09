import styled from "styled-components";
import { colors } from "../../App.styled";

export const CheckoutContainer = styled.div`
  display: grid;

  gap: 10px;

  background-color: ${colors.primary};
`;

export const Title = styled.h1`
  color: ${colors.black};
`;

export const Form = styled.form`
  display: grid;

  gap: 10px;

  padding: 10px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 5px;
  font-family: Varela;
`;

export const SmallInput = styled(Input)``;

export const OneLine = styled.span`
  display: grid;

  grid-template-columns: 1fr;
  gap: 5px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Button = styled.button`
  width: 20%;
  justify-self: left;

  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  border-radius: 10px;
  padding: 20px 10px;
  cursor: pointer;
  margin: 20px 0;
`;

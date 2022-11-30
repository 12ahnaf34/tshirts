import styled from "styled-components";
import { colors } from "../../App.styled";

const inputWidth = "30cqi";
const padding = "10px";
const fontSize = "1.5cqi";
const smallFontSize = "6cqi";

export const LoginContainer = styled.div`
  display: grid;

  justify-items: center;

  background-color: ${colors.primary};
`;

export const NormalForm = styled.form`
  display: grid;

  gap: 20px;

  font-family: Varela;
  margin-top: 10cqi;
`;

export const EmailLabel = styled.label`
  width: 80cqi;

  text-align: left;
  font-family: Varela;
  font-size: ${smallFontSize};
  color: ${colors.white};

  @media (min-width: 800px) {
    width: ${inputWidth};
    font-size: ${fontSize};
  }
`;

export const EmailInput = styled.input`
  width: 80cqi;

  border: 0;
  padding: ${padding};
  font-family: Varela;
  font-size: ${smallFontSize};

  @media (min-width: 800px) {
    width: ${inputWidth};
    font-size: ${fontSize};
  }
`;

export const PasswordLabel = styled.label`
  width: 80cqi;

  font-family: Varela;
  font-size: ${smallFontSize};
  margin-top: 1cqi;
  text-align: left;
  color: ${colors.white};

  @media (min-width: 800px) {
    width: ${inputWidth};
    font-size: ${fontSize};
  }
`;

export const PasswordInput = styled.input`
  width: 80cqi;

  border: 0;
  padding: ${padding};
  font-family: Varela;
  font-size: ${smallFontSize};

  @media (min-width: 800px) {
    width: ${inputWidth};
    font-size: ${fontSize};
  }
`;

export const Button = styled.button`
  width: fit-content;

  margin-top: 1cqi;
  margin-bottom: 7cqi;
  font-family: Varela;
  font-size: ${smallFontSize};
  padding: 10px;
  border-radius: 10px;
  border: 3px solid ${colors.secondary};
  background-color: ${colors.secondary};
  color: ${colors.primary};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border: 3px solid ${colors.accent};
    background-color: ${colors.accent};
    color: ${colors.white};
  }

  @media (min-width: 800px) {
    font-size: ${fontSize};
  }
`;

export const RegisterButton = styled(Button)`
  background-color: ${colors.white};
  border: 3px solid ${colors.secondary};
  font-size: ${smallFontSize};

  @media (min-width: 800px) {
    font-size: ${fontSize};
  }
`;

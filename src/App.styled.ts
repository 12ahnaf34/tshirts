import styled from "styled-components";

export const colors = {
  black: "    #000000",
  white: "    #fdfdfb",
  accent: "   #fcdf59",
  primary: "  #ffffff",
  secondary: "#5c46eb",
  tertiary: " #d6d6d6",
};
//original yellow: "#f2e175"
//original green: "#6b9e9a",

export const AppContainer = styled.div`
  width: 100%;
  display: grid;

  padding: 0;
  margin: 0;
  font-family: Varela;

  @media (min-width: 1920px) {
    width: 1920px;
  }
`;

export const Title = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 4vw;
  font-weight: bold;
  cursor: pointer;

  margin: 0;
  color: ${colors.secondary};
  background-color: ${colors.primary};
`;

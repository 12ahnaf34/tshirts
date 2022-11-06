import styled from "styled-components";

export const colors = {
  white: "#fdfdfb",
  orange: "#f59165",
  green: "#6b9e9a",
  altGreen: "#07998f",
  yellow: "#f2e175",
};

export const AppContainer = styled.div`
  width: 100%;
  display: grid;

  padding: 0;
  margin: 0;

  @media (min-width: 1920px) {
    width: 1920px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4vw;
`;

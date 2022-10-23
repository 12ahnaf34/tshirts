import styled from "styled-components";

export const colors = {
  dark: "#2D2424",
  light: "#E0C097",
  brown: "#5C3D2E",
  redBrown: "#B85C38",
};

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  container-type: inline-container;
  background-color: ${colors.dark};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 10px;

  text-align: center;
  font-size: 15cqi;
  color: ${colors.light};
`;

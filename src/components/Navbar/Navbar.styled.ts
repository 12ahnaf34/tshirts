import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { colors } from "../LandingPage/LandingPage.styled";

export const NavbarContainer = styled.div`
  width: 100%;
  display: grid;
  container-type: inline-container;

  background-color: ${colors.dark};
`;

export const Icon = styled(IoIosMenu)`
  font-size: 12cqi;
  color: ${colors.redBrown};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.2;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  width: 35cqi;
  display: grid;
  grid-template-columns: 1fr;

  background-color: ${colors.light};
  color: ${colors.brown};

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.brown};
  font-size: 5cqi;
  cursor: pointer;
`;

export const List = styled.ul`
  width: 50cqi;
  display: none;

  list-style: none;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ExternalLink = styled.a`
  display: none;

  font-size: 3cqi;
  color: ${colors.brown};
  cursor: pointer;
  transition: all 0.4s ease;

  @media (min-width: 800px) {
    display: block;
  }

  &:hover {
    translate: 0px -10px;
    color: ${colors.redBrown};
  }
`;

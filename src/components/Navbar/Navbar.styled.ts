import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { colors } from "../../App.styled";
import { MdAccountBox, MdShoppingCart, MdLogout } from "react-icons/md";

export const NavbarContainer = styled.div`
  min-height: 1cqi;
  width: 100%;
  display: grid;

  grid-template-columns: 0.7fr 4fr 0.7fr;
  padding: 10px 0;
  border: 0;
  align-items: center;
  justify-items: center;
  background-color: ${colors.green};

  @media (min-width: 800px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export const Icon = styled(IoIosMenu)`
  font-size: 12cqi;
  color: ${colors.yellow};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    scale: 1.2;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  height: 100vh;
  width: 100cqi;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  background-color: ${colors.green};
  color: ${colors.yellow};

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 3px solid ${colors.yellow};
  background-color: ${colors.yellow};
  color: ${colors.green};
  font-size: 10cqi;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.yellow};
  font-size: 10cqi;
  cursor: pointer;
`;

export const List = styled.ul`
  width: 50cqi;
  display: none;

  grid-column: 1/4;
  grid-row: 2;

  list-style: none;
  padding: 20px 40px;
  border-radius: 5px;
  background-color: ${colors.yellow};

  @media (min-width: 1200px) {
    width: 40cqi;
    display: flex;

    justify-content: space-between;
  }

  @media (min-width: 2000px) {
    width: 30cqi;
    display: flex;

    justify-content: space-between;
  }
`;

export const ExternalLink = styled.a`
  display: none;

  padding: 5px;
  font-weight: bold;
  font-size: 3cqi;
  text-decoration: none;
  background-color: ${colors.yellow};
  color: ${colors.green};
  border-bottom: 3px solid ${colors.green};
  border-top: 3px solid ${colors.green};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border-bottom: 3px solid ${colors.orange};
    border-top: 3px solid ${colors.orange};
    color: ${colors.orange};
  }

  @media (min-width: 800px) {
    display: block;
    font-size: 3cqi;
  }

  @media (min-width: 1000px) {
    display: block;
    font-size: 2cqi;
  }

  @media (min-width: 2000px) {
    display: block;
    font-size: 1cqi;
  }
`;

export const Title = styled.a`
  text-decoration: none;
  margin: 0;
  padding: 10px;

  text-align: center;
  font-weight: bold;
  font-size: 10cqi;
  color: ${colors.yellow};
  cursor: pointer;

  @media (min-width: 800px) {
    grid-column: 2;
    grid-row: 1;
    font-size: 7cqi;
    justify-self: center;
  }

  @media (min-width: 1200px) {
    grid-column: 2;
    grid-row: 1;
    font-size: 4cqi;
    justify-self: center;
  }
`;

export const UserIcons = styled.div`
  width: fit-content;
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-row: 1;
  grid-column: 3;
  gap: 5px;
  justify-self: end;
  justify-items: center;

  margin-right: 5px;
`;

export const SignIn = styled(MdAccountBox)`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 11cqi;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.yellow};
  }

  @media (min-width: 800px) {
    font-size: 9cqi;
  }

  @media (min-width: 1200px) {
    font-size: 5cqi;
  }
`;

export const Cart = styled(MdShoppingCart)`
  display: none;

  align-self: center;

  font-size: 10cqi;
  border-radius: 10px;
  padding: 6px;
  background-color: ${colors.white};
  color: ${colors.green};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.yellow};
  }

  @media (min-width: 800px) {
    display: block;
    font-size: 5.7cqi;
  }

  @media (min-width: 1200px) {
    display: block;
    font-size: 3.21cqi;
  }
`;

export const Logout = styled(MdLogout)`
  display: none;
  background-color: ${colors.white};
  color: ${colors.green};
  font-size: 6cqi;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.yellow};
  }

  @media (min-width: 800px) {
    display: none;
    font-size: 5.7cqi;
  }

  @media (min-width: 1200px) {
    display: none;
    font-size: 3.21cqi;
  }
`;

export const GreetText = styled.span`
  width: fit-content;
  color: ${colors.green};
  font-size: 3cqi;

  @media (min-width: 800px) {
    font-size: 1.2cqi;
  }
`;

export const LogoutButton = styled(Button)`
  display: none;
  height: 0;
  background-color: ${colors.yellow};
  color: ${colors.green};
  font-size: 2cqi;
`;

export const LogoutContainer = styled.div`
  display: grid;

  justify-items: center;

  border-radius: 10px;
  padding: 5px;
  background-color: ${colors.white};

  &:hover ${LogoutButton} {
    display: block;
    height: fit-content;
  }
`;

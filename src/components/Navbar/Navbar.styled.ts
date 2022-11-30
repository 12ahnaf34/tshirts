import styled, { keyframes } from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { colors } from "../../App.styled";
import { MdAccountBox, MdShoppingCart, MdLogout } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";

const breatheAnimation = keyframes`
  0%   { width:0%; opacity: 0%; }
  10%  { width:10%; opacity: 10%; }
  20%  { width:20%; opacity: 20%; }
  30%  { width:30%; opacity: 30%; }
  40%  { width:40%; opacity: 40%; }
  50%  { width:50%; opacity: 50%; }
  60%  { width:60%; opacity: 60%; }
  70%  { width:70%; opacity: 70%; }
  80%  { width:80%; opacity: 80%; }
  90%  { width:90%; opacity: 90%; }
  100% { width:100%; opacity: 100%; }
`;

export const NavbarContainer = styled.div`
  min-height: 1cqi;
  width: 100%;
  display: grid;

  grid-template-columns: 1fr 4fr 1fr;
  padding: 10px 0;
  border: 0;
  align-items: center;
  justify-items: center;
  background-color: ${colors.primary};

  @media (min-width: 800px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export const Icon = styled(IoIosMenu)`
  font-size: 11cqi;
  color: ${colors.secondary};
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

  background-color: ${colors.primary};
  color: ${colors.secondary};

  @media (min-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 3px solid ${colors.secondary};
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-size: 10cqi;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.secondary};
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
  background-color: ${colors.secondary};

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
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border-bottom: 3px solid ${colors.primary};
  border-top: 3px solid ${colors.primary};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border-bottom: 3px solid ${colors.accent};
    border-top: 3px solid ${colors.accent};
    color: ${colors.accent};
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
  padding: 5px;

  text-align: center;
  font-weight: bold;
  font-size: 8cqi;
  border-radius: 10px;
  color: ${colors.secondary};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.accent};
  }

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

  grid-template-columns: 1fr;
  grid-row: 1/3;
  grid-column: 3;
  gap: 5px;
  align-self: center;
  align-items: center;
  justify-self: end;
  justify-items: center;
  margin-right: 10px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr;
    align-self: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
    align-self: start;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    align-self: start;
  }
`;

export const SignIn = styled(MdAccountBox)`
  grid-column: 2;

  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 11cqi;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.secondary};
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

  font-size: 10cqi;
  border-radius: 10px;
  padding: 6px;
  background-color: ${colors.accent};
  color: ${colors.secondary};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.accent};
  }

  @media (min-width: 800px) {
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
  color: ${colors.primary};
  font-size: 6cqi;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.secondary};
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
  width: 100%;

  align-self: top;

  padding: 3px;
  color: ${colors.secondary};
  background-color: ${colors.accent};
  font-size: 3cqi;
  font-weight: bold;
  border-radius: 10px;

  @media (min-width: 800px) {
    font-size: 2cqi;
  }
  @media (min-width: 1200px) {
    font-size: 1.2cqi;
  }
`;

export const LogoutButton = styled(Button)`
  width: 0%;
  height: 0;
  display: none;

  margin-top: 15px;
  opacity: 0;
  background-color: ${colors.secondary};
  color: ${colors.accent};
  font-family: Varela;
  font-size: 3cqi;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.4s ease;
  animation-name: ${breatheAnimation};
  animation-duration: 0.2s;

  @media (min-width: 800px) {
    font-size: 1.5cqi;
  }
  @media (min-width: 1200px) {
    font-size: 1.2cqi;
  }
`;

export const LogoutContainer = styled.div`
  display: grid;

  grid-column: 2;
  align-self: center;
  align-items: center;
  justify-items: center;

  border-radius: 10px;

  &:hover {
    background-color: ${colors.accent};
    padding: 3px;
  }

  &:hover ${GreetText} {
    padding-top: 0px;
  }

  &:hover ~ &${Cart} {
    align-self: start;
    color: ${colors.accent};
  }

  &:hover ${LogoutButton} {
    width: 100%;
    height: fit-content;
    display: block;
    opacity: 100%;
  }
`;

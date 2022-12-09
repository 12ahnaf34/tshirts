import { onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../fire";
import type { Dispatch, SetStateAction } from "react";
import {
  Button,
  Dropdown,
  ExternalLink,
  Icon,
  Link,
  List,
  Title,
  NavbarContainer,
  SignIn,
  Cart,
  UserIcons,
  Logout,
  GreetText,
  LogoutContainer,
  LogoutButton,
  CartLink,
} from "./Navbar.styled";

interface NavbarProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Redirect {
  login_register: boolean;
  cart: boolean;
}

//Main Function
export default function Navbar(props: NavbarProps) {
  const { display, setDisplay } = props;

  const [redirect, setRedirect] = useState<Redirect>({ login_register: false, cart: false });
  const [currentUser, setCurrentUser] = useState<User | null>();

  useEffect(() => {
    onAuthStateChanged(auth, (current?) => {
      setCurrentUser(current);
    });
  }, [currentUser]);

  const menu = () => setDisplay(!display);
  const signOut = () => auth.signOut();

  //Sends user to LoginRegister page when cart or login icon clicked
  const goToLoginRegister = () => setRedirect({ login_register: true, cart: false });
  const goToCart = () => setRedirect({ login_register: false, cart: true });

  if (redirect.login_register) return <Navigate to="/login_register" />;
  // if (redirect.cart) {
  //   return <Navigate to="/cart" />;
  // }

  if (display) {
    return (
      <Dropdown>
        <Button onClick={menu}>X</Button>
        <Link href="/">Home</Link>
        <Link href="/tshirts">T-Shirts</Link>
        <Link href="/trousers">Trousers</Link>
        <Link href="/caps">Caps</Link>
        <Link href="/cart">Cart</Link>
      </Dropdown>
    );
  } else {
    return (
      <NavbarContainer>
        <Icon onClick={menu} />
        <Title href="/">CLOTHAVEN</Title>
        <List>
          <li>
            <ExternalLink href="/">Home</ExternalLink>
          </li>
          <li>
            <ExternalLink href="/tshirts">T-Shirts</ExternalLink>
          </li>
          <li>
            <ExternalLink href="/trousers">Trousers</ExternalLink>
          </li>
          <li>
            <ExternalLink href="/caps">Caps</ExternalLink>
          </li>
        </List>
        <UserIcons>
          <CartLink href="/cart">
            <Cart onClick={goToCart} />
          </CartLink>
          {currentUser !== null ? (
            <LogoutContainer>
              <GreetText>
                Hello,
                <br />
                {currentUser?.email?.split("@")[0]}
              </GreetText>
              <LogoutButton onClick={signOut}>Log Out</LogoutButton>
            </LogoutContainer>
          ) : (
            <SignIn onClick={goToLoginRegister} />
          )}
        </UserIcons>
      </NavbarContainer>
    );
  }
}

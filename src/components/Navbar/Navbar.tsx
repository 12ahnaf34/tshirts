import React, { useState } from "react";
import { Button, Dropdown, ExternalLink, Icon, Link, List, Title, NavbarContainer } from "./Navbar.styled";

interface Props {
  display: boolean;
  setDisplay: (display: boolean) => void;
}

export default function Navbar(props: Props) {
  const { display, setDisplay } = props;

  const menu = () => setDisplay(!display);

  if (display) {
    return (
      <Dropdown>
        <Button onClick={menu}>X</Button>
        <Link href="/">Home</Link>
        <Link href="tshirts">T-Shirts</Link>
        <Link href="pants">Trousers</Link>
      </Dropdown>
    );
  } else {
    return (
      <NavbarContainer>
        <Icon onClick={menu} />
        <Title>CLOTHAVEN</Title>
        <List>
          <li>
            <ExternalLink href="/">Home</ExternalLink>
          </li>
          <li>
            <ExternalLink href="/tshirts">T-Shirts</ExternalLink>
          </li>
          <li>
            <ExternalLink href="/pants">Trousers</ExternalLink>
          </li>
        </List>
      </NavbarContainer>
    );
  }
}

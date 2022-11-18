import React from "react";
import { Button, Dropdown, ExternalLink, Icon, Link, List, Title, NavbarContainer } from "./Navbar.styled";

interface NavbarProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar(props: NavbarProps) {
  const { display, setDisplay } = props;

  const menu = () => {
    setDisplay((old) => !old);
  };

  if (display) {
    return (
      <Dropdown>
        <Button onClick={menu}>X</Button>
        <Link href="/">Home</Link>
        <Link href="tshirts">T-Shirts</Link>
        <Link href="pants">Trousers</Link>
        <Link href="pants">Caps</Link>
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
            <ExternalLink href="/pants">Trousers</ExternalLink>
          </li>
          <li>
            <ExternalLink href="/caps">Caps</ExternalLink>
          </li>
        </List>
      </NavbarContainer>
    );
  }
}

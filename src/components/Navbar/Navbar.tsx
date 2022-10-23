import React, { useState } from "react";
import { Dropdown, ExternalLink, Icon, Link, List, NavbarContainer } from "./Navbar.styled";

export default function Navbar() {
  const [display, setDisplay] = useState(false);

  const menu = () => (display ? setDisplay(false) : setDisplay(true));

  return (
    <NavbarContainer>
      <Icon onClick={menu} />
      {display && (
        <Dropdown>
          <Link href="#">Home</Link>
          <Link href="#">T-Shirts</Link>
          <Link href="#">Trousers</Link>
        </Dropdown>
      )}
      <List>
        <li>
          <ExternalLink>Home</ExternalLink>
        </li>
        <li>
          <ExternalLink>T-Shirts</ExternalLink>
        </li>
        <li>
          <ExternalLink>Trousers</ExternalLink>
        </li>
      </List>
    </NavbarContainer>
  );
}

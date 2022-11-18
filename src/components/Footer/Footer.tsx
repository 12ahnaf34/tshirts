import { FooterContainer, Item, List, List1, List2, Logos, PaymentImage } from "./Footer.styled";
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
      <List>
        <Item>Let's be friends!</Item>
        <Item>
          <Logos>
            <AiFillTwitterCircle />
            <AiFillFacebook />
            <AiFillInstagram />
          </Logos>
        </Item>
      </List>

      <List1>
        <Item>© Clothaven LLC 2022</Item>
      </List1>

      <List2>
        <Item>We accept</Item>
        <Item>
          <PaymentImage src="/payment_methods.png" />
        </Item>
      </List2>
    </FooterContainer>
  );
}

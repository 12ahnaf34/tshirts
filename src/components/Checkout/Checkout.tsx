import CountrySelect from "../CountrySelect/CountrySelect";
import StateSelect from "../CountrySelect/StateSelect";
import Footer from "../Footer/Footer";
import { Button, CheckoutContainer, Form, Input, Label, OneLine, SmallInput, Title } from "./Checkout.styled";

export default function Checkout() {
  const doNothing = () => {
    alert("This is a sample site.");
  };

  return (
    <CheckoutContainer>
      <Title>Shipping Information</Title>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Address" />
        <Input type="text" placeholder="Apartment, suite, etc.(optional)" />
        <Input type="text" placeholder="City" />
        <OneLine>
          <CountrySelect />
          <StateSelect />
          <SmallInput type="number" placeholder="Zip code" />
        </OneLine>
      </Form>

      <Title>Billing Information</Title>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="number" placeholder="Card Number" />
        <OneLine>
          <Input type="text" placeholder="Expiration Date" />
          <Input type="number" placeholder="CVC/CVV" />
        </OneLine>
        <Button onClick={doNothing}>Checkout</Button>
      </Form>
    </CheckoutContainer>
  );
}

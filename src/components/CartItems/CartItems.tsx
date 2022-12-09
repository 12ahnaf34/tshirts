import { useContext, useState, useEffect } from "react";
import { collection, deleteDoc, doc, DocumentData, getDocs, query, where } from "firebase/firestore";
import { Button, CartItemsContainer, CheckoutButton, ItemImage, ItemText, NoItemsText, SingleItem, TextContainer, Title } from "./CartItems.styled";
import { Cloth } from "../../pages/Tshirts";
import { store } from "../../fire";
import { AuthContext } from "../../context/AuthContext";
import Checkout from "../Checkout/Checkout";
import { Navigate } from "react-router-dom";

interface Props {
  cart: DocumentData | undefined;
}

interface SingleItemType {
  item: Cloth;
  quantity: number;
}

export default function CartItems(props: Props): JSX.Element {
  const { cart } = props;
  const user = useContext(AuthContext);

  const [toggle, setToggle] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (cart) {
      let finalTotal: number = 0;

      cart.map((element: SingleItemType) => {
        const elementTotal = element.quantity * element.item.price;
        finalTotal = finalTotal + elementTotal;
      });

      setTotal(finalTotal);
    }
  }, [cart]);

  const removeItem = async (id: string) => {
    if (user) {
      const q = query(collection(store, user.uid), where("item.id", "==", id));
      const querySnapshot = await getDocs(q);
      let fireId = "";

      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        fireId = doc.id;
      });

      await deleteDoc(doc(store, user.uid, fireId));
      window.location.reload();
    }
  };

  const goCheckout = () => {
    setToggle(!toggle);
  };

  if (cart && !toggle)
    return (
      <CartItemsContainer>
        <Title>Cart</Title>
        {cart.length > 0 &&
          cart.map((element: SingleItemType) => {
            return (
              <SingleItem key={element.item.id}>
                <ItemImage src={element.item.image} />
                <TextContainer>
                  <ItemText>{element.item.name}</ItemText>
                  <ItemText>Brand: {element.item.company}</ItemText>
                  <ItemText>Price: {element.item.price}</ItemText>
                  <ItemText>Quantity: {element.quantity}</ItemText>
                </TextContainer>
                <Button onClick={() => removeItem(element.item.id)}>Remove Item</Button>
              </SingleItem>
            );
          })}
        <span>
          {total > 0 ? <Title>Total: {total}</Title> : <NoItemsText>No Items in Cart</NoItemsText>}
          {total > 0 && <CheckoutButton onClick={goCheckout}>Proceed to Checkout</CheckoutButton>}
        </span>
      </CartItemsContainer>
    );
  else if (toggle) return <Checkout />;
  else if (!user) {
    return (
      <>
        <br />
        <Title>Log in to see cart</Title>
      </>
    );
  } else return <ItemText>Loading...</ItemText>;
}

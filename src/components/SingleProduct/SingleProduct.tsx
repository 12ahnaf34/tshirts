import { useState, useEffect, useContext } from "react";
import { store, auth } from "../../fire";
import { addDoc, collection, CollectionReference, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import type { Cloth } from "../../pages/Tshirts";
import type { QuerySnapshot, DocumentData } from "firebase/firestore";
import type { Dispatch, SetStateAction } from "react";
import {
  AddToCartButton,
  Description,
  MainImage,
  Notification,
  Price,
  Quantity,
  QuantityButton,
  QuantityContainer,
  SingleProductContainer,
  Text,
  TextArea,
  Title,
} from "./SingleProduct.styled";
import { User } from "firebase/auth";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";

interface Props {
  user: User | null;
  product: Cloth;
}

export default function SingleProduct(props: Props) {
  const { product, user } = props;

  const cart = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [proper, setProper] = useState<{ type: string; color: string }>({ type: "", color: "" });
  const [notificationDisplay, setNotificationDisplay] = useState<string>("none");

  useEffect(() => {
    const firstChar = product.color[0].toUpperCase();
    const rest = product.color.slice(1, product.color.length);
    const final = firstChar + rest;
    const typeFirstChar = product.type[0].toUpperCase();
    const typeRest = product.type.slice(1, product.type.length);
    const typeFinal = typeFirstChar + typeRest;
    setProper({ type: typeFinal, color: final });
  });

  useEffect(() => {
    if (notificationDisplay) {
      const interval = setTimeout(() => {
        setNotificationDisplay("none");
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [notificationDisplay]);

  const plusMinusQuantity = (direction: string) => {
    if (direction == "up") setQuantity((old) => old + 1);
    else if (direction == "down" && quantity > 1) setQuantity((old) => old - 1);
  };

  const addToCart = async () => {
    const item = {
      item: product,
      quantity: quantity,
    };
    if (user) {
      await addDoc(collection(store, user?.uid), item);
      setNotificationDisplay("block");
    } else {
      window.location.href = "/login_register";
    }
  };

  return (
    <SingleProductContainer>
      <Title>{product.name}</Title>
      <MainImage src={product.image} alt={product.name} />
      <Price>${product.price}</Price>
      <TextArea>
        <Text>Brand: {product.company}</Text>
        <Text>Type: {proper.type}</Text>
        <Text>Color: {proper.color}</Text>
        <Description>{product.description}</Description>
        <QuantityContainer>
          <QuantityButton onClick={() => plusMinusQuantity("down")}>-</QuantityButton>
          <Quantity>{quantity}</Quantity>
          <QuantityButton onClick={() => plusMinusQuantity("up")}>+</QuantityButton>
        </QuantityContainer>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </TextArea>
      <Notification display={notificationDisplay}>Added to cart</Notification>
    </SingleProductContainer>
  );
}

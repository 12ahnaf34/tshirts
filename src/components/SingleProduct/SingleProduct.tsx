import { useState, useEffect } from "react";
import { Cloth } from "../../pages/Tshirts";
import {
  AddToCartButton,
  Description,
  MainImage,
  Price,
  Quantity,
  QuantityButton,
  QuantityContainer,
  SingleProductContainer,
  Text,
  TextArea,
  Title,
} from "./SingleProduct.styled";

interface Props {
  product: Cloth;
}

export default function SingleProduct(props: Props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [proper, setProper] = useState<{ type: string; color: string }>({ type: "", color: "" });

  useEffect(() => {
    const firstChar = product.type[0].toUpperCase();
    const firstCharColor = product.color[0].toUpperCase();
    const rest = product.type.slice(1, product.type.length);
    const restColor = product.color.slice(1, product.type.length);
    const final = firstChar + rest;
    const finalColor = firstCharColor + restColor;
    setProper({ type: final, color: finalColor });
  }, [product.type]);

  const plusMinusQuantity = (direction: string) => {
    if (direction == "up") setQuantity((old) => old + 1);
    else if (direction == "down" && quantity > 1) setQuantity((old) => old - 1);
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
        <AddToCartButton>Add to Cart</AddToCartButton>
      </TextArea>
    </SingleProductContainer>
  );
}

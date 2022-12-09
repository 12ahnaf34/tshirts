import { useEffect, useState, useContext } from "react";
import { AppContainer, colors } from "../App.styled";
import Navbar from "../components/Navbar/Navbar";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import type { Cloth } from "./Tshirts";
import Footer from "../components/Footer/Footer";
import { tShirts } from "../components/clothes";
import { AuthContext } from "../context/AuthContext";

export interface Cart {
  item: Cloth;
  quantity: number;
}

export default function ProductPage() {
  const user = useContext(AuthContext);
  const [display, setDisplay] = useState<boolean>(false);
  const [product, setProduct] = useState<Cloth>(tShirts[0]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product") || "{}");
    setProduct(data);
  }, []);

  return (
    <AppContainer style={{ backgroundColor: colors.primary }}>
      <Navbar display={display} setDisplay={setDisplay} />
      <SingleProduct product={product} user={user} />
      <Footer />
    </AppContainer>
  );
}

import { useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import { CartContext } from "../context/CartContext";
import { store } from "../fire";
import { getDoc, doc, DocumentData, collection, getDocs, query } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = (props) => {
  const { children } = props;
  const user = useContext(AuthContext);

  const [cart, setCart] = useState<DocumentData | undefined>(undefined);
  const [toggle, setToggle] = useState(true);

  const getCart = async () => {
    if (user) {
      const docRef = await collection(store, user.uid);
      const docSnap = await getDocs(docRef);

      let list: DocumentData[] = [];
      docSnap.forEach((doc) => {
        list.push(doc.data());
      });

      setCart(list);
    }
  };
  useEffect(() => {
    getCart();
  }, [user, toggle]);

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

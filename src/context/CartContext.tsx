import { DocumentData } from "firebase/firestore";
import { createContext } from "react";
import type { Cloth } from "../pages/Tshirts";

export const CartContext = createContext<DocumentData | undefined>(undefined);

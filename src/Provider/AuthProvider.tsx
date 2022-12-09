import { Auth, User } from "firebase/auth";
import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../fire";
import { Cloth } from "../pages/Tshirts";
import { store } from "../fire";
import { doc, DocumentData, getDoc } from "firebase/firestore";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

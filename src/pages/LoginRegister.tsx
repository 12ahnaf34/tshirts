import { useState, useEffect } from "react";
import { AppContainer, colors, Title } from "../App.styled";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../fire";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import { Navigate } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

export default function LoginRegister() {
  const [display, setDisplay] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("demo123");
  const [userData, setUserData] = useState<UserData>({ email: "demoEmail@demo.com", password: "demo123" });
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (current) => {
    setCurrentUser(current);
  });

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("\n", userData.email, "\n", userData.password, "\n", confirmPassword);

    try {
      const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      alert(error);
    }
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      alert(error);
    }
  };

  const logout = async () => {};

  if (currentUser !== null) return <Navigate to="/" />;

  return (
    <AppContainer>
      <Title href="/">CLOTHAVEN</Title>
      <Login
        register={register}
        login={login}
        userData={userData}
        setUserData={setUserData}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />
      <Footer />
    </AppContainer>
  );
}

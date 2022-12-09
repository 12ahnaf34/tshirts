import { useState, useEffect, useContext } from "react";
import { AppContainer, colors, Title } from "../App.styled";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../fire";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface UserData {
  email: string;
  password: string;
}

export default function LoginRegister() {
  const user = useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState<string>("demo123");
  const [userData, setUserData] = useState<UserData>({ email: "demoEmail@demo.com", password: "demo123" });

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("\n", userData.email, "\n", userData.password, "\n", confirmPassword);

    try {
      await createUserWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      alert(error);
    }
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      alert(error);
    }
  };

  if (user !== null) return <Navigate to="/" />;
  else
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

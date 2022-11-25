import { useState, useEffect } from "react";
import { Button, EmailInput, EmailLabel, LoginContainer, NormalForm, PasswordInput, PasswordLabel, RegisterButton } from "./Login.styled";
import type { Dispatch, SetStateAction } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";

interface LoginProps {
  register: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  login: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  userData: { email: string; password: string };
  setUserData: Dispatch<SetStateAction<{ email: string; password: string }>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

export default function Login(props: LoginProps) {
  const { register, login, userData, setUserData, confirmPassword, setConfirmPassword } = props;

  const [notRegistered, setNotRegistered] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const redirectToRegister = () => setNotRegistered(true);

  if (notRegistered)
    return (
      <LoginContainer>
        <NormalForm onSubmit={register}>
          <EmailLabel htmlFor="emailInput">Email</EmailLabel>
          <EmailInput id="emailInput" type="email" onChange={handleEmail} value={userData.email} />
          <PasswordLabel htmlFor="passwordInput">Password</PasswordLabel>
          <PasswordInput id="passwordInput" type="password" onChange={handlePassword} value={userData.password} />
          <PasswordLabel htmlFor="confirmPasswordInput">Confirm Password</PasswordLabel>
          <PasswordInput id="confirmPasswordInput" type="password" onChange={handleConfirmPassword} value={confirmPassword} />
          <Button type="submit">Register</Button>
        </NormalForm>
      </LoginContainer>
    );
  else
    return (
      <LoginContainer>
        <NormalForm onSubmit={login}>
          <EmailLabel htmlFor="emailInput">Email</EmailLabel>
          <EmailInput id="emailInput" type="email" onChange={handleEmail} value={userData.email} />
          <PasswordLabel htmlFor="passwordInput">Password</PasswordLabel>
          <PasswordInput id="passwordInput" type="password" onChange={handlePassword} value={userData.password} />
          <Button type="submit">Log In</Button>
        </NormalForm>
        <RegisterButton onClick={redirectToRegister}>Not registered? Create account</RegisterButton>
      </LoginContainer>
    );
}

import { AppContainer, Title } from "./App.styled";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <AppContainer>
        <Title>Error</Title>
        <Title>{error.name || error.message}</Title>
      </AppContainer>
    );
  } else
    return (
      <AppContainer>
        <Title>Error</Title>
        <Title style={{ height: "100vh" }}>No idea what happened {":)"}</Title>;
      </AppContainer>
    );
}

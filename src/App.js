//@ts-check
import "./App.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Home from "./containers/Home";
import Menu from "./components/menu";
import { Route, Routes } from "react-router-dom";

const HomePrivate = withAuthenticationRequired(Home);

export default function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePrivate />} />
      </Routes>
    </div>
  );
}

function Login({ loginWithRedirect }) {
  return <button onClick={loginWithRedirect}>Log in</button>;
}

function Logout(props) {
  return (
    <button
      onClick={() =>
        props.logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log out
    </button>
  );
}

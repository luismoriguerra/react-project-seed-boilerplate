//@ts-check
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function useToken() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function getToken() {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_API_GATEWAY,
        scope: "access:api",
      });
      setToken(accessToken);
    }

    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return { token };
}

export default useToken;

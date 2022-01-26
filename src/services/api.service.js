//@ts-check
import useFetch from "use-http";
import { useAuth0 } from "@auth0/auth0-react";
import to from "await-to-js";

const API = process.env.REACT_APP_API;
export function useAPI() {
  const { getIdTokenClaims } = useAuth0();

  const options = {
    cachePolicy: "no-cache",
    interceptors: {
      request: async ({ options, url, path, route }) => {
        const [err, claims] = await to(getIdTokenClaims());
        const accessToken = claims && claims.__raw;
        options.headers.Authorization = `Bearer ${accessToken}`;
        return options;
      },
    },
  };

  const api = useFetch(API, options);

  return api;
}

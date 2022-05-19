import React from "react";
import { useMsal } from "@azure/msal-react";
// import Button from "react-bootstrap/Button";
import { loginRequest } from "../../authConfig";

function handleLogin(instance: any) {
  instance.loginPopup(loginRequest).catch((e: any) => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => handleLogin(instance)}
      //   variant="secondary"
      //   className="ml-auto"
      //   onClick={() => handleLogin(instance)}
    >
      Sign in using Redirect
    </button>
  );
};

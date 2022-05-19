import React from "react";
import { useMsal } from "@azure/msal-react";

function handleLogout(instance: any) {
  instance.logoutPopup().catch((e: any) => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => handleLogout(instance)}
    >
      Sign out using Redirect
    </button>
  );
};

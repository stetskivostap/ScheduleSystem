import React from "react";
// import Navbar from "reactstrap";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props: any) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MSAL React Tutorial
          </a>
        </div>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </nav>
      {/* <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        {isAuthenticated ? <span>Signed In</span> : <SignInButton />}
      </Navbar> */}
      <h5>
        {/* <center> */}
        Welcome to the Microsoft Authentication Library For React Tutorial
        {/* </center> */}
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};

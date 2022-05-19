export const msalConfig = {
  auth: {
    clientId: "a866d888-679e-4aa7-94ec-ab3f3d14c0ea",
        authority: "https://login.microsoftonline.com/f900319b-2330-4f31-8fe8-178f2b0e1fbc", // This is a URL (e.g. https://login.microsoftonline.com/70a28522-969b-451f-bdb2-abfea3aaa5bf)
    redirectUri: "/schedule",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};

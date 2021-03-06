import React from "react";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-intro-auth-fs.netlify.com">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;

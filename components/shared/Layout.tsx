import React, { ReactNode } from "react";
import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {children}
    </>
  );
};

export default Layout;

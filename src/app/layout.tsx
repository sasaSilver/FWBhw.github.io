import React, { ReactNode } from "react";
import Footer from './Footer/page';
import GlobalHeader from './GlobalHeader/page'
import "./globals.css";

interface LayoutProps{
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (

    <html lang="en">
      <head>
        <title>Obochina</title>
      </head>
      <body>
        <GlobalHeader />
        <div className="centered-div">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
};

export default Layout;

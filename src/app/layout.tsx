import React, { ReactNode } from "react";
import Footer from "../components/footer";
import GlobalHeader from "../components/globalHeader";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Aleksandr Mikhailov</title>
        <link rel="icon" type="image/x-icon" href="images/pfp.jpg"></link>
        <meta name="author" content="Aleksandr Mikhailov"></meta>
      </head>
      <body>
        <GlobalHeader />
        <div className="centered-div">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

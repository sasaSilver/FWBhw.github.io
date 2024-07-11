import React from "react";
import "./globals.css";
import Head from "next/head";

function App() {
  return (
    <>
    <Head>
      <meta name="description" content="Aleksandr Mikhailov personal web page!"></meta>
      <meta name="author" content="Aleksandr Mikhailov"></meta>
    </Head>
    <header id="header">
      <div id="header-text">
        <h1 id="my-name">Aleksandr Mikhailov</h1>
        <div id="intro-container">
          <h2 id="occupation-container">
            Front-end Web developer, UX/UI designer
          </h2>
          <p id="soon-to-be">soon to be i hope lol :)</p>
        </div>
      </div>
      <img id="pfp" src="images/pfp.jpg" alt="me" />
    </header>
    </>
  );
}

export default App;

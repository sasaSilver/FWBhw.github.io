import Head from "next/head";
import React from "react";
const Contacts = () => {
  return (
    <>
    <Head>
      <title>Contacts</title>
    </Head>
      <div id="links-section" className="section-container">
        <h2>Contact me</h2>
        <ul className="links-list">
          <li>
            <a href="https://t.me/ob0china" target="_blank" rel="noreferrer">
              <img id="tg-icon" src="images/telegram.svg" alt="tg-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sasaSilver"
              target="_blank"
              rel="noreferrer"
            >
              <img id="gh-icon" src="images/github.svg" alt="github-icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:mhlvsasha@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img id="email" src="images/gmail.svg" alt="email" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;

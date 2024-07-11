import React from "react";
import ComicBody from "../../components/comicBody";
import fetchComic from "../../scripts/fetchComic";
import Head from "next/head";
const Comic = async () => {
  return (
    <>
    <Head>
      <title>Comic</title>
    </Head>
    <ComicBody
      comicData={await fetchComic("al.mikhailov@innopolis.university")}
    ></ComicBody></>
  );
};

export default Comic;

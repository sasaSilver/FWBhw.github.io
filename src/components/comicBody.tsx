import React, { FC } from "react";
import { ComicData } from "../scripts/fetchComic";
import fetchComic from "../scripts/fetchComic";

const Comic: FC<{ comicData: ComicData }> = (props: {
  comicData: ComicData;
}) => {
  return (
    <>
      <div className="comic-container">
        <img
          src={props.comicData.imgSrc}
          alt={props.comicData.imgAlt}
          width={463.99}
          height={154.03}
        />
        <h2> {props.comicData.title} </h2>
        <p> {props.comicData.date} </p>
        <p> {props.comicData.timeAgo + " ago"} </p>
      </div>
    </>
  );
};

export default Comic;

'use client'
import React, { FC } from 'react'
import {formatDistanceToNow} from 'date-fns'
import {useEffect,useState} from 'react'
interface emailProps{
  email: string;
}
const Comic:FC<emailProps> = (props: emailProps) => {

  interface ComicResponse {
    img: string;
    alt: string;
    safe_title: string;
    day: number;
    month: number;
    year: number;
  }

  async function fetchComicId(email: string): Promise<string> {
      const searchParams : URLSearchParams = new URLSearchParams({
          email: email
      });
      const response: Response = await fetch("https://fwd.innopolis.university/api/hw2?" + searchParams);
      const comicId: string = await response.json();
      return comicId;
  }

  async function fetchComicData(email: string): Promise<ComicResponse>{
      const comicId: string = await fetchComicId(email);
      const searchParams = new URLSearchParams({
          id: comicId
      });
      const comicData: Response = await fetch("https://fwd.innopolis.university/api/comic?" + searchParams);
      return comicData.json();
  }

  interface ComicData{
    imgSrc: string;
    imgAlt: string;
    title: string;
    date: string;
    timeAgo: string;
  }

  const [comicData, setComicData] = useState({
    imgSrc: '',
    imgAlt: '',
    title: '',
    date: '',
    timeAgo: ''
  });

  async function getContainedComic(email: string): Promise<ComicData> {
      const comicData: ComicResponse = await fetchComicData(email);
      const imgDate: Date = new Date(comicData.year, comicData.month - 1, comicData.day);
      const formattedDate: string = imgDate.toLocaleDateString();
      const timeAgo: string = formatDistanceToNow(imgDate);
      return {
        imgSrc: comicData.img,
        imgAlt: comicData.alt,
        title: comicData.safe_title,
        date: formattedDate,
        timeAgo: timeAgo + " ago"
      }
  }

  useEffect(() => {
    const fetchComicData = async () => {
      const newComicData = await getContainedComic("al.mikhailov@innopolis.university");
      setComicData(newComicData);
    };

    fetchComicData();
  }, []);

  return (
    <>
      <div className='comic-container'>
        <img
        src={comicData.imgSrc}
        alt={comicData.imgAlt}
        width={463.99}
        height={154.03}
        />
        <h2> {comicData.title} </h2>
        <p> {comicData.date} </p>
        <p> {comicData.timeAgo} </p>
      </div>
    </>
  );
}

export default Comic

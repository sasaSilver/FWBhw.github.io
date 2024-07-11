import { formatDistanceToNow } from "date-fns";

interface ComicResponse {
  img: string;
  alt: string;
  safe_title: string;
  day: number;
  month: number;
  year: number;
}

async function fetchComicId(email: string): Promise<string> {
  const searchParams: URLSearchParams = new URLSearchParams({
    email: email,
  });
  const response: Response = await fetch(
    "https://fwd.innopolis.university/api/hw2?" + searchParams,
  );
  const comicId: string = await response.json();
  return comicId;
}

async function fetchComicData(email: string): Promise<ComicResponse> {
  const comicId: string = await fetchComicId(email);
  const searchParams = new URLSearchParams({
    id: comicId,
  });
  const comicData: Response = await fetch(
    "https://fwd.innopolis.university/api/comic?" + searchParams,
  );
  return comicData.json();
}

export interface ComicData {
  imgSrc: string;
  imgAlt: string;
  title: string;
  date: string;
  timeAgo: string;
}

async function getComicData(email: string): Promise<ComicData> {
  const comicData: ComicResponse = await fetchComicData(email);
  const imgDate: Date = new Date(
    comicData.year,
    comicData.month - 1,
    comicData.day,
  );
  const formattedDate: string = imgDate.toLocaleDateString();
  const timeAgo: string = formatDistanceToNow(imgDate);
  return {
    imgSrc: comicData.img,
    imgAlt: comicData.alt,
    title: comicData.safe_title,
    date: formattedDate,
    timeAgo: timeAgo,
  };
}

export default getComicData;

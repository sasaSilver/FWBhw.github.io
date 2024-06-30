import {formatDistanceToNow} from 'date-fns'

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

async function displayComic(email: string): Promise<void> {
    const comicData: ComicResponse = await fetchComicData(email);
    const imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = comicData.img;
    imgElement.alt = comicData.alt;
    const titleElement: HTMLHeadingElement = document.createElement("h1");
    titleElement.textContent = comicData.safe_title;
    const imgDate: Date = new Date(comicData.year, comicData.month - 1, comicData.day);
    const dateElement: HTMLParagraphElement = document.createElement("p");
    dateElement.textContent = imgDate.toLocaleDateString();
    const releaseDate: Date = new Date(comicData.year, comicData.month - 1, comicData.day)
    const timeAgo: string = formatDistanceToNow(releaseDate);
    const timeAgoElement: HTMLParagraphElement = document.createElement("p");
    timeAgoElement.textContent = timeAgo + " ago";
    const comicContainer: HTMLDivElement = document.createElement("div");
    comicContainer.appendChild(imgElement);
    comicContainer.appendChild(titleElement);
    comicContainer.appendChild(dateElement);
    comicContainer.appendChild(timeAgoElement);
    document.body.appendChild(comicContainer);
}

const email: string = "al.mikhailov@innopolis.university";
displayComic(email);

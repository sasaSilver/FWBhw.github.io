var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchComicId(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchParams = new URLSearchParams({
            email: email
        });
        const response = yield fetch("https://fwd.innopolis.university/api/hw2?" + searchParams);
        const comicId = yield response.json();
        return comicId;
    });
}
function fetchComicData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const comicId = yield fetchComicId(email);
        const searchParams = new URLSearchParams({
            id: comicId
        });
        const comicData = yield fetch("https://fwd.innopolis.university/api/comic?" + searchParams);
        return comicData.json();
    });
}
function displayComic(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const comicData = yield fetchComicData(email);
        const imgElement = document.createElement("img");
        imgElement.src = comicData.img;
        imgElement.alt = comicData.alt;
        const titleElement = document.createElement("h1");
        titleElement.textContent = comicData.safe_title;
        const imgDate = new Date(comicData.year, comicData.month, comicData.day);
        const dateElement = document.createElement("p");
        dateElement.textContent = imgDate.toLocaleDateString();
        const comicContainer = document.createElement("div");
        comicContainer.appendChild(imgElement);
        comicContainer.appendChild(titleElement);
        comicContainer.appendChild(dateElement);
        document.body.appendChild(comicContainer);
    });
}
const email = "al.mikhailov@innopolis.university";
displayComic(email);

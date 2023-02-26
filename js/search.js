const spotify = document.querySelector("#spotify");
const youtube = document.querySelector("#youtube");
const melon = document.querySelector("#melon");
const search = document.querySelector("#search");
let url = "";

spotify.addEventListener("click", () => {
    url = `https://open.spotify.com/search/${search.value}`;
    open(url);
});
youtube.addEventListener("click", () => {
    url = `https://music.youtube.com/search?q=${search.value}`;
    open(url);
});
melon.addEventListener("click", () => {
    url = `https://www.melon.com/search/total/index.htm?q=${search.value}`;
    open(url);
});


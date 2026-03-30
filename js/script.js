console.log("script.js loaded");

const API_KEY = "jRYaPasH2kNvWaijxJLjPf94ORjPLq8M";
const BASE_URL = "https://api.giphy.com/v1/gifs/search";


const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

// --- get GIFs from Giphy ---
async function fetchGifs(searchTerm) {
  const endpoint = `${BASE_URL}?api_key=${API_KEY}&q=${searchTerm}&limit=12&rating=g`;

  const response = await fetch(endpoint);
  const jsonData = await response.json();

  const images = jsonData.data.map((gif) => gif.images.original.url);
  console.log("Bilder hentet:", images);
  return images;
}

// --- show GIFs ---
function displayGifs(images) {
  gifContainer.innerHTML = "";
  for (const url of images) {
    gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3" alt="gif">`;
  }
}

// --- buttom ---
fetchBtn.addEventListener("click", async () => {
  const searchTerm = searchInput.value.trim() || "funny cats";
  const images = await fetchGifs(searchTerm);
  displayGifs(images);
});
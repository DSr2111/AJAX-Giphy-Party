const remove = document.getElementById("remove-btn");
const form = document.getElementById("searchForm");
const input = document.getElementById("gifSearch");
const ul = document.getElementById("gifList");

async function getGif(searchTerm) {
  //ajax function to search GIPHY API
  const url = `https://api.giphy.com/v1/gifs/random?api_key=07ynKbEJm48vdxl0BPiyB1hFyXjstKn8&tag=${searchTerm}&rating=pg`;
  let gifUrl;

  try {
    const res = await axios.get(url);
    gifUrl = res.data.data.images.original.url;
  } catch (error) {
    console.error("Error fetching GIF", error);
  }
  if (gifUrl) {
    addGif(gifUrl, searchTerm);
  }
}

function addGif(gifUrl, searchTerm) {
  let newLI = document.createElement("li");
  newLI.innerHTML = `<img class="gifs" src=${gifUrl} alt="${searchTerm} GIF">`;
  ul.append(newLI);
  input.value = "";
} //appending gifs to UL

function removeGifs() {
  //removing all gifs in UL
  ul.innerHTML = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getGif(input.value);
});

remove.addEventListener("click", function (e) {
  e.preventDefault();
  removeGifs();
});

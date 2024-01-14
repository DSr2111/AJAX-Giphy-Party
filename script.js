const remove = document.getElementById("remove-btn");
const form = document.getElementById("searchForm");
const input = document.getElementById("gifSearch");
const ul = document.getElementById("gifList");

async function getGif(searchTerm) {
  //ajax function to search GIPHY API
  const url = `https://api.giphy.com/v1/gifs/random?api_key=07ynKbEJm48vdxl0BPiyB1hFyXjstKn8&tag=${searchTerm}&rating=pg`;
  const res = await axios.get(url);
  console.log(res);
  console.log(res.data.data.url);
  let newLI = document.createElement("li");
  newLI.innerHTML = `<img class="gifs" src=${res.data.data.images.original.url} alt="${searchTerm} GIF">`;
  ul.append(newLI);
  input.value = "";
}

function addGif() {} //appending gifs to UL

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

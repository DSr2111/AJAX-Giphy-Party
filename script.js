async function getGif(searchTerm) {
  //ajax function to search GIPHY API

  const res = await axios.get("api.giphy.com/v1/gifs/search", {
    params: { searchTerm },
  });
}

function addGif() {} //appending gifs to UL

function removeGifs() {} //removing all gifs in UL

const remove = document.getElementById("remove-btn");
const form = document.getElementById("searchForm");
const input = document.getElementById("gifSearch");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getGif(input.value);
});

remove.addEventListener("click", function (e) {
  e.preventDefault();
  removeGifs();
});

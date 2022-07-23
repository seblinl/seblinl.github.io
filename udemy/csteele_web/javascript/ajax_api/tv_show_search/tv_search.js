// https://api.tvmaze.com/search/shows?q=girls
const getShows = async (query) => {
  const config = { params: { q: query } };
  const shows = await axios.get("https://api.tvmaze.com/search/shows", config);
  return shows.data;
};

const printImages = (shows) => {
  for (let item of shows) {
    if (item.show.image) {
      const newImage = document.createElement("img");
      newImage.src = item.show.image.medium;
      document.querySelector("#results").append(newImage);
    }
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = form.elements.show_title.value;
  printImages(await getShows(query));
});

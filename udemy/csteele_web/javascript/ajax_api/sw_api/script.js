const category = document.querySelector("#category");
const id = document.querySelector("#id");
const infoBox = document.querySelector("#info-box");
const searchBtn = document.querySelector("#searchBtn");
const baseURL = "https://swapi.dev/api/";

const printData = (key, value, target) => {
  const infoBit = document.createElement("p");
  target.appendChild(infoBit);
  infoBit.append(
    `${(key[0].toUpperCase() + key.slice(1)).replace("_", " ")}: ${value}.`
  );
};

const getData = (url) => {
  infoBox.textContent = "Checking...";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      infoBox.textContent = "";
      for (let key in data) {
        const keywords = ["name", "gender", "hair_color", "height", "mass"];
        if (keywords.includes(key)) {
          printData(key, data[key], infoBox);
        }
      }
    })
    .catch(() => {
      infoBox.textContent = "Try a different ID";
    });
};

searchBtn.addEventListener("click", () => {
  infoBox.innerHTML = "";
  let URL = "";
  if (category.value === "starships/" && id.value < 2) {
    URL = baseURL + category.value + (parseInt(id.value) + 1) + "/";
    id.value = "2";
  } else {
    URL = baseURL + category.value + id.value + "/";
  }

  getData(URL);
});

// fetch("https://swapi.dev/api/planets/4")
//   .then((res) => {
//     console.log("It worked");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(`The data; Name: ${data.name}, Climate: ${data.climate}`);
//   })
//   .catch((e) => {
//     console.error("Got an error", e);
//   });

// const planetN = async (n) => {
//   try {
//     const res = await fetch("https://swapi.dev/api/planets/" + n);
//     const data = await res.json();
//     console.log(`Name: ${data.name}, Climate: ${data.climate}`);
//   } catch (e) {
//     console.error(e);
//   }
// };

// for (let i = 6; i < 10; i++) {
//   planetN(i);
// }

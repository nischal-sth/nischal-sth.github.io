const animeData = `[
  {
    "title": "One Piece",
    "studio": "Toei Animation",
    "year": 1999,
    "image": "images/onepiece.jpg"
  },
  {
    "title": "Naruto",
    "studio": "Pierrot",
    "year": 2002,
    "image": "images/naruto.jpg"
  },
  {
    "title": "Bleach",
    "studio": "Pierrot",
    "year": 2004,
    "image": "images/bleach.jpg"
  },
  {
    "title": "My Hero Academia",
    "studio": "Bones",
    "year": 2016,
    "image": "images/mha.jpg"
  }
]`;

class MediaItem {
  #title;
  #studio;
  #year;
  #imagePath;

  constructor(title, studio, year, imagePath) {
    this.setTitle(title);
    this.setStudio(studio);
    this.setYear(year);
    this.setImagePath(imagePath);
  }

  getTitle() { return this.#title; }
  getStudio() { return this.#studio; }
  getYear() { return this.#year; }
  getImagePath() { return this.#imagePath; }

  setTitle(t) { this.#title = t.trim(); }
  setStudio(s) { this.#studio = s.trim(); }
  setYear(y) { this.#year = y > 0 ? y : 2000; }
  setImagePath(p) { this.#imagePath = p; }

  createHTMLElement() {
    const div = document.createElement("div");
    div.className = "media-item";

    const img = document.createElement("img");
    img.src = this.#imagePath;
    img.alt = "pic of anime";
    img.className = "thumbnail";

    const infoDiv = document.createElement("div");

    const titleEl = document.createElement("h2");
    titleEl.textContent = this.#title;

    const studioEl = document.createElement("p");
    studioEl.textContent = "Studio: " + this.#studio;

    const yearEl = document.createElement("p");
    yearEl.textContent = "Year: " + this.#year;

    infoDiv.appendChild(titleEl);
    infoDiv.appendChild(studioEl);
    infoDiv.appendChild(yearEl);

    div.appendChild(img);
    div.appendChild(infoDiv);

    return div;
  }

  matchesQuery(q) {
    q = q.toLowerCase();
    return this.#title.toLowerCase().includes(q) ||
           this.#studio.toLowerCase().includes(q);
  }
}

const animeObjects = JSON.parse(animeData);
const animeCollection = [];

for (let i = 0; i < animeObjects.length; i++) {
  const a = animeObjects[i];
  const item = new MediaItem(a.title, a.studio, a.year, a.image);
  animeCollection.push(item);
}

const mediaContainer = document.getElementById("media-container");
const queryInput = document.getElementById("query");
const searchBtn = document.getElementById("search-btn");

function displayMedia(list) {
  mediaContainer.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    mediaContainer.appendChild(list[i].createHTMLElement());
  }
}

displayMedia(animeCollection);

searchBtn.addEventListener("click", () => {
  const q = queryInput.value.trim();
  if (q === "") {
    displayMedia(animeCollection);
  } else {
    const results = animeCollection.filter(item => item.matchesQuery(q));
    displayMedia(results);
  }
});

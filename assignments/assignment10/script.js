const images = [
  { title: "Birthday", file: "images/birthday.jpg" },
  { title: "Clown", file: "images/clown.jpg" },
  { title: "Rain", file: "images/rain.jpg" },
  { title: "Read", file: "images/read.jpg" },
  { title: "Shovel", file: "images/shovel.jpg" },
  { title: "Work", file: "images/work.jpg" }
];

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const closeBtn = document.getElementById("close");

images.forEach(item => {
  const container = document.createElement("div");
  container.classList.add("image-container");

  const img = document.createElement("img");
  img.src = `images/${item.file}`;
  img.alt = item.title;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.textContent = item.title;

  container.appendChild(img);
  container.appendChild(overlay);

  container.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popupImg.src = `images/${item.file}`;
    popupTitle.textContent = item.title;
  });

  gallery.appendChild(container);
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

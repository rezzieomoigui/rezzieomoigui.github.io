const images = [
  { title: "Party Time", file: "img1.png" },
  { title: "Happy", file: "img2.png" },
  { title: "It's Raining", file: "img3.png" },
  { title: "Cool Guy", file: "img4.png" },
  { title: "Coffee Break", file: "img5.png" },
  { title: "Mail Time", file: "img6.png" }
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

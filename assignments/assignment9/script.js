const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let index = 0;
let interval;

document.getElementById("drawBtn").addEventListener("click", function () {
  const container = document.getElementById("houseContainer");
  container.innerHTML = ""; // Clear existing houses

  for (let i = 0; i < 6; i++) {
    const house = document.createElement("div");
    house.classList.add("house");
    container.appendChild(house);
  }

  // Show the exercise section
  document.getElementById("exerciseSection").style.display = "block";
});

document.getElementById("exerciseBtn").addEventListener("click", function () {
  clearInterval(interval); // Prevent multiple intervals
  index = 0;

  interval = setInterval(() => {
    document.getElementById("stickFigure").src = images[index];
    index++;

    if (index >= images.length) {
      clearInterval(interval);
    }
  }, 800);
});

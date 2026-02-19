const water = document.getElementById("water");
const bubbleCount = 16;

// Create bubbles using a FOR loop
for (let i = 0; i < bubbleCount; i++) {
  createBubble();
}

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 6 + 4;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 90 + "%";

  const duration = Math.random() * 4 + 4;
  bubble.style.animationDuration = duration + "s";

  const delay = Math.random() * 5;
  bubble.style.animationDelay = delay + "s";

  water.appendChild(bubble);

  // Randomize position each loop
  bubble.addEventListener("animationiteration", () => {
    bubble.style.left = Math.random() * 90 + "%";
  });
}



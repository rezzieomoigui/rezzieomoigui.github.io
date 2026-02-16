const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const arrow = document.getElementById("arrow");

const ex1Btn = document.getElementById("ex1Btn");
const ex2Btn = document.getElementById("ex2Btn");

const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

/* MENU TOGGLE */
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  arrow.textContent = navMenu.classList.contains("show") ? "▲" : "▼";
});

/* SECTION SWITCHING */
ex1Btn.addEventListener("click", () => {
  exercise1.classList.remove("hidden");
  exercise2.classList.add("hidden");
});

ex2Btn.addEventListener("click", () => {
  exercise2.classList.remove("hidden");
  exercise1.classList.add("hidden");
  updateCountdown();
});

/* EXERCISE 1 */
const range = document.getElementById("minutesRange");
const rangeValue = document.getElementById("rangeValue");
const rangeMessage = document.getElementById("rangeMessage");

range.addEventListener("input", () => {
  const value = range.value;
  rangeValue.textContent = `${value} minutes`;

  if (value > 45) {
    rangeMessage.textContent = "Plenty of time 🍳🥓";
  } else if (value > 30) {
    rangeMessage.textContent = "Still chill 😌";
  } else if (value > 15) {
    rangeMessage.textContent = "Focus up 👀";
  } else {
    rangeMessage.textContent = "Move it! 🚀";
  }
});

/* EXERCISE 2 */
function updateCountdown() {
  const msg = document.getElementById("countdownMessage");
  const now = new Date();

  const classTime = new Date();
  classTime.setHours(8, 30, 0, 0);

  const diff = Math.round((classTime - now) / 60000);

  if (diff > 15) msg.textContent = "Lots of time 😎";
  else if (diff > 10) msg.textContent = "Getting closer ⏰";
  else if (diff > 5) msg.textContent = "Almost time 🎒";
  else if (diff > 0) msg.textContent = "RUN 🏃‍♂️";
  else if (diff >= -5) msg.textContent = "Just started 😬";
  else if (diff >= -15) msg.textContent = "You're late 😅";
  else msg.textContent = "You missed class 😭";
}


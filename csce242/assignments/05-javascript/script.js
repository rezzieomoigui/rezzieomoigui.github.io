/* ===== CONSTANTS ===== */
const geometryBox = document.getElementById("geometryBox");
const triangle = document.querySelector(".triangle");

const datePicker = document.getElementById("datePicker");
const dateOutput = document.getElementById("dateOutput");

const toggleImage = document.getElementById("toggleImage");

/* ===== FUNCTIONS ===== */
const toggleTriangle = () => {
  triangle.classList.toggle("hidden");
};

const displayDate = () => {
  if (datePicker.value !== "") {
    const selectedDate = new Date(datePicker.value);

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    dateOutput.textContent = `Selected Date: ${formattedDate}`;
  }
};

const changeImage = () => {
  toggleImage.src = "sunny.png";
};

/* ===== EVENT LISTENERS ===== */
geometryBox.addEventListener("click", toggleTriangle);
datePicker.addEventListener("change", displayDate);
toggleImage.addEventListener("click", changeImage);
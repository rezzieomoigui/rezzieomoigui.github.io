// Associative arrays (objects)
const happySongs = {
  "Happy – Pharrell Williams": "ZbZSe6N_BXs",
  "Can't Stop the Feeling – Justin Timberlake": "ru0K8uYEZWw",
  "Good as Hell – Lizzo": "SmbmeOgWsqE",
  "Walking on Sunshine – Katrina & The Waves": "iPUmE-tne5U",
  "Uptown Funk – Bruno Mars": "OPf0YbXqDm0"
};

const sadSongs = {
  "Happier Than Ever – Billie Eilish": "5GJWxDKyk3A",
  "Someone You Loved – Lewis Capaldi": "zABLecsR5UE",
  "Someone Like You – Adele": "hLQl3WQQoQ0",
  "Fix You – Coldplay": "k4V3Mo61fJM",
  "Hurt – Johnny Cash": "8AHCfZTRGiI"
};

const moodSelect = document.getElementById("mood");
const songList = document.getElementById("song-list");
const videoContainer = document.getElementById("video-container");

moodSelect.addEventListener("change", function () {
  songList.innerHTML = "";
  videoContainer.style.display = "none";
  videoContainer.innerHTML = "";

  let selectedMood = moodSelect.value;
  let songs;

  if (selectedMood === "happy") {
    songs = happySongs;
  } else if (selectedMood === "sad") {
    songs = sadSongs;
  } else {
    return;
  }

  for (let song in songs) {
    let songLink = document.createElement("div");
    songLink.textContent = song;
    songLink.classList.add("song");

    songLink.addEventListener("click", function () {
      videoContainer.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${songs[song]}" 
          allowfullscreen>
        </iframe>
      `;
      videoContainer.style.display = "block";
    });

    songList.appendChild(songLink);
  }
});

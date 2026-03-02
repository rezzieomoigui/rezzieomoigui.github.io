// Song Class
class Song {
  constructor(title, artist, album, year, genre, cover, youtube) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.cover = cover;
    this.youtube = youtube;
  }

  // Card HTML
  getCard(index) {
    return `
      <div class="song-card" onclick="openModal(${index})">
        <h3>${this.title}</h3>
        <p>By ${this.artist}</p>
        <img src="images/${this.cover}" alt="${this.title}">
      </div>
    `;
  }
}

// Song Array
const songs = [
  new Song(
    "Two-Headed Boy",
    "Neutral Milk Hotel",
    "Aeroplane Over the Sea",
    1998,
    "Folk Music",
    "music1.jpg",
    "https://www.youtube.com/embed/4ZDf_5VqJX0"
  ),
  new Song(
    "Jailhouse Rock",
    "Elvis Presley",
    "Jailhouse Rock",
    1957,
    "Rock and Roll",
    "music2.jpg",
    "https://www.youtube.com/embed/gj0Rz-uP4Mk"
  ),
  new Song(
    "So What",
    "Miles Davis",
    "Kind of Blue",
    1959,
    "Jazz",
    "music3.jpg",
    "https://www.youtube.com/embed/zqNTltOGh5c"
  ),
  new Song(
    "Jolene",
    "Dolly Parton",
    "Jolene",
    1974,
    "Country",
    "music4.jpg",
    "https://www.youtube.com/embed/Ixrje2rXLMA"
  )
];

// Load Songs
const gallery = document.getElementById("songGallery");
songs.forEach((song, index) => {
  gallery.innerHTML += song.getCard(index);
});

// Modal Functions
function openModal(index) {
  const song = songs[index];

  document.getElementById("modalTitle").innerText = song.title;
  document.getElementById("modalArtist").innerText = `by ${song.artist}`;
  document.getElementById("modalAlbum").innerText = `${song.album}, ${song.year}`;
  document.getElementById("modalGenre").innerText = song.genre;
  document.getElementById("modalVideo").src = song.youtube;

  document.getElementById("songModal").style.display = "block";
}

function closeModal() {
  document.getElementById("songModal").style.display = "none";
  document.getElementById("modalVideo").src = "";
}

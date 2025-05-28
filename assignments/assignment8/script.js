let bikeInterval;
let bike = null;

window.addEventListener('DOMContentLoaded', () => {
  bike = document.getElementById('bike');
  handleResize();
});

function toggleMenu() {
  const menu = document.getElementById('menuItems');
  const arrow = document.querySelector('.toggle-arrow');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    arrow.textContent = '▼';
  } else {
    menu.style.display = 'flex';
    arrow.textContent = '▲';
  }
}

function showSection(section) {
  document.getElementById('speeding').style.display =
    section === 'speeding' ? 'block' : 'none';
  document.getElementById('art').style.display =
    section === 'art' ? 'block' : 'none';
}

function startBike() {
  stopBike();
  const speed = document.getElementById('speedSlider').value;
  let position = 0;
  bikeInterval = setInterval(() => {
    position += parseInt(speed);
    if (position > document.querySelector('.bike-container').offsetWidth)
      position = -100;
    bike.style.left = position + 'px';
  }, 50);
}

function stopBike() {
  clearInterval(bikeInterval);
}

function showArt(type) {
  const box = document.getElementById('artBox');
  box.innerHTML = ''; // Clear
  if (type === 'moon') {
    const moon = document.createElement('div');
    moon.className = 'moon';
    box.appendChild(moon);
  } else if (type === 'star') {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '★';
    box.appendChild(star);
  } else if (type === 'cloud') {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    box.appendChild(cloud);
  }
}

function handleResize() {
  const menu = document.getElementById('menuItems');
  if (window.innerWidth > 600) {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'row';
  } else {
    menu.style.display = 'none';
    menu.style.flexDirection = 'column';
  }
}

window.addEventListener('resize', handleResize);

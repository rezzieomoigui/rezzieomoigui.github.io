class HotDog {
  constructor(name, meat, bun, toppings, image) {
    this.name = name;
    this.meat = meat;
    this.bun = bun;
    this.toppings = toppings;
    this.image = image;
  }

  getSection() {
    const section = document.createElement('div');
    section.className = 'w3-col s3 hotdog-card';
    section.innerHTML = `
      <img src="images/${this.image}" class="hotdog-image">
      <div class="overlay">${this.name}</div>
    `;
    section.onclick = () => this.showModal();
    return section;
  }

  showModal() {
    const modal = document.getElementById('hotdog-modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
      <h2>${this.name}</h2>
      <p><strong>Meat:</strong> ${this.meat}</p>
      <p><strong>Bun:</strong> ${this.bun}</p>
      <p><strong>Toppings:</strong> ${this.toppings.join(', ')}</p>
    `;
    modal.style.display = 'block';
  }
}

// Create hotdog instances
const hotdogs = [
  new HotDog('BLT', 'Beef', 'Traditional', ['Bacon', 'Lettuce', 'Tomato', 'Mayo'], 'hotdog1.jpg'),
  new HotDog('Chicago Dog', 'Beef', 'Poppy Seed', ['Pickle', 'Tomato', 'Mustard'], 'hotdog2.jpg'),
  new HotDog('Chili Cheese', 'Pork', 'Sesame', ['Chili', 'Cheese', 'Onions'], 'hotdog3.jpg'),
  new HotDog('Classic', 'Beef', 'Whole Wheat', ['Ketchup', 'Mustard'], 'hotdog4.jpg')
];

// Add to DOM
const container = document.getElementById('hotdog-container');
hotdogs.forEach(hotdog => {
  container.appendChild(hotdog.getSection());
});

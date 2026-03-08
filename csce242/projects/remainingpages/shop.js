fetch("products.json")
  .then(response => response.json())
  .then(data => {

    const productGrid = document.querySelector(".product-grid");

    productGrid.innerHTML = "";

    data.products.forEach(product => {

      const productCard = `
        <a href="${product.page}" class="product-link">
          <div class="product-card">
            <div class="product-image">
              <img src="${product.img_name}" alt="${product.name}">
            </div>

            <div class="product-info">
              <h4>${product.name}</h4>
              <p class="price">$${product.price}</p>
              <span class="btn">View Item</span>
            </div>
          </div>
        </a>
      `;

      productGrid.innerHTML += productCard;

    });

  })
  .catch(error => console.error("Error loading products:", error));
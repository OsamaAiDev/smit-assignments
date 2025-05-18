let productForm = document.querySelector("#product-form");
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let productTitle = document
    .querySelector("#product-name")
    .value.toUpperCase();
  let productDescription = document.querySelector("#product-description").value;
  let buttonName = document.querySelector("#button-name").value.toUpperCase();
  let buttonLink = document.querySelector("#button-link").value;
  let imageLink = document.querySelector("#image-link").value;
  let product = `
                    <div class="product-item">
                    <img src="${imageLink}" alt="Product Image">
                    <h3>${productTitle}</h3>
                    <p>${productDescription}</p>
                    <a href="${buttonLink}" target="_blank">${buttonName}</a>
                </div>
  `;
  document.querySelector(".product-items").innerHTML += product;
});

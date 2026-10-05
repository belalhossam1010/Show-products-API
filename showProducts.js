let carddata = document.querySelector(".row");
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
  delete e.currentTarget.dataset.bsTarget;
  carddata.innerHTML = `<p class="text-center fs-4">Loading Data ...</p>`;
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      carddata.innerHTML = null;
      data.products.map((products) => {
        let productnames = products.title;
        let category = products.category;
        let description = products.description;
        let price = products.price;
        let photo = products.thumbnail;

        Display_data(productnames, category, description, price, photo);
      });
    })
    .catch((error) => {
      carddata.innerHTML = `<p class="text-danger">${error.message}</p>`;
    });
});
function Display_data(productnames, category, description, price, photo) {
  carddata.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="card product-card w-100 h-100 shadow-sm">
  <img src="${photo}" class="card-img-top" alt="Image not found">
  <div class="card-body">
    <h5 class="card-title">${productnames}</h5>
      <p>${category}</p>
    <p>${description}</p>
    <p class="text-success fs-5">$${price}</p>
    <a class="view w-100 btn btn-primary">View product</a>
  </div>
</div>`;
}

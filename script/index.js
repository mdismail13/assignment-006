const array = [];
const cardMaker = (object) => {
  const div = document.createElement("div");
  div.classList.add("p-3", "space-y-3", "bg-white", "rounded-lg");
  div.innerHTML = `
        <img src='${object.image}' alt="" class = 'rounded-lg'>
        <h3 class="font-bold cursor-pointer">${object.name}</h3>
        <p class="text-sm">${object.description}</p>
        <div class="flex justify-between items-center">
            <p class="font-bold text-[#15803D] py-1 px-3 bg-[#DCFCE7] rounded-l-full rounded-r-full">${object.category}</p>
            <p class="font-bold">৳${object.price}</p>
        </div>
        <button id='cart-${object.id}' class="w-full font-bold bg-[#15803D] text-white py-3 rounded-l-full rounded-r-full cursor-pointer">Add to Cart</button>
    `;
  return div;
};

const ArrayPusher = (object) => {
  const found = array.find((item) => item.name === object.name);
  if (found) {
    found.quantity = found.quantity + 1;
  } else {
    const category = {};
    category.name = object.name;
    category.price = object.price;
    category.quantity = 1;
    array.push(category);
  }
};

const displayArray = (array) => {
  document.getElementById("add-to-cart-container").innerHTML = "";
  let total = 0;
  for (const arr of array) {
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "bg-[#F0FDF4]",
      "p-2",
      "my-2",
      "rounded-lg"
    );
    div.setAttribute("id", `card-${arr.name}`);
    div.innerHTML = `
            <div>
                <p class='font-semibold'>${arr.name}</p>
                <p><span>৳</span>${arr.price} X ${arr.quantity}</p>
            </div>
            <div>
                <p id="btn-${arr.name}" class = "font-bold text-lg cursor-pointer text-red-500">X</p>
            </div>
        `;
    total = total + arr.price * arr.quantity;
    document.getElementById("add-to-cart-container").append(div);
    document.getElementById(`btn-${arr.name}`).addEventListener("click", () => {
      const index = array.findIndex((item) => item.name === arr.name);
      if (index !== -1) {
        array.splice(index, 1);
      }
      displayArray(array);
    });
  }
  const div = document.createElement("div");
  div.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "border-t",
    "border-gray-200",
    "pt-2"
  );
  div.innerHTML = `
    <p class = 'font-bold'>Total</p>
    <p class = 'font-semibold'><span>৳</span><span>${total}</span></p>
  `;
  document.getElementById("add-to-cart-container").append(div);
  if (array.length === 0) {
    div.classList.remove("border-t");
    div.innerHTML = "";
  }
};
const loadAllCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayAllCategories(data));
};
const displayAllCategories = (data) => {
  data.categories.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add(
      "p-2",
      "cursor-pointer",
      "text-lg",
      "font-semibold",
      "category-btn"
    );
    li.innerText = category.category_name;
    li.setAttribute("id", `category-${category.id}`);
    document.getElementById("category-container").append(li);
    document
      .getElementById(`category-${category.id}`)
      .addEventListener("click", () => {
        document.getElementById("card-container").innerHTML = "";
        loadByCategories(`${category.id}`);
        document.querySelectorAll(".category-btn").forEach((btn) => {
          btn.classList.remove("bg-[#15803D]", "text-white", "rounded-lg");
        });
        document
          .getElementById(`category-${category.id}`)
          .classList.add("bg-[#15803D]", "text-white", "rounded-lg");
      });
  });
};
loadAllCategories();

const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayAllPlants(data));
};

const displayAllPlants = (data) => {
  data.plants.forEach((plant) => {
    document.getElementById("card-container").append(cardMaker(plant));
    document
      .getElementById(`cart-${plant.id}`)
      .addEventListener("click", () => {
        ArrayPusher(plant);
        displayArray(array);
      });
  });
};

loadAllPlants();

const loadByCategories = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayByCategories(data));
};

const displayByCategories = (data) => {
  data.plants.forEach((plant) => {
    document.getElementById("card-container").append(cardMaker(plant));
    document
      .getElementById(`cart-${plant.id}`)
      .addEventListener("click", () => {
        ArrayPusher(plant);
        displayArray(array);
      });
  });
};

const products = [
  { id: 1, name: "Wireless Headphones", cat: "Audio", price: 6499 },
  { id: 2, name: "Bluetooth Speaker", cat: "Audio", price: 3999 },
  { id: 3, name: "Smart Watch", cat: "Wearables", price: 10999 },
  { id: 4, name: "Fitness Band", cat: "Wearables", price: 2999 },
  { id: 5, name: "Phone Case", cat: "Accessories", price: 499 },
  { id: 6, name: "USB-C Charger", cat: "Accessories", price: 1299 }
];

const backgrounds = {
  1: ["#ffb88c", "#ff5f7e"],
  2: ["#43e8b0", "#1d5fb8"],
  3: ["#b79cff", "#ffc2e2"],
  4: ["#ffe27a", "#ff8a5c"],
  5: ["#8dfbc0", "#6ec1ff"],
  6: ["#7f9cff", "#8a4fd0"]
};

const artwork = {
  1: `
    <defs>
      <linearGradient id='a' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#3a4160'/>
        <stop offset='1' stop-color='#1b1f33'/>
      </linearGradient>
    </defs>
    <path d='M46 122V98a54 54 0 0 1 108 0v24' fill='none' stroke='#1b1f33' stroke-width='13' stroke-linecap='round'/>
    <path d='M46 122V98a54 54 0 0 1 108 0' fill='none' stroke='#5b6390' stroke-width='3' stroke-linecap='round' transform='translate(0 -2)'/>
    <rect x='28' y='108' width='42' height='64' rx='18' fill='url(#a)'/>
    <rect x='130' y='108' width='42' height='64' rx='18' fill='url(#a)'/>
    <ellipse cx='49' cy='140' rx='11' ry='20' fill='#ffd23f'/>
    <ellipse cx='151' cy='140' rx='11' ry='20' fill='#ffd23f'/>
    <ellipse cx='47' cy='132' rx='4' ry='9' fill='#fff' opacity='.55'/>
    <ellipse cx='149' cy='132' rx='4' ry='9' fill='#fff' opacity='.55'/>`,
  2: `
    <defs>
      <linearGradient id='a' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#3b4252'/>
        <stop offset='1' stop-color='#12151d'/>
      </linearGradient>
      <radialGradient id='b'>
        <stop offset='0' stop-color='#ffe08a'/>
        <stop offset='.6' stop-color='#ff8a5c'/>
        <stop offset='1' stop-color='#d63b6a'/>
      </radialGradient>
    </defs>
    <rect x='48' y='28' width='104' height='144' rx='22' fill='url(#a)'/>
    <circle cx='100' cy='66' r='15' fill='#222836'/>
    <circle cx='100' cy='66' r='9' fill='url(#b)'/>
    <circle cx='100' cy='122' r='36' fill='#222836'/>
    <circle cx='100' cy='122' r='29' fill='url(#b)'/>
    <circle cx='100' cy='122' r='11' fill='#12151d'/>
    <circle cx='90' cy='111' r='5' fill='#fff' opacity='.5'/>
    <circle cx='136' cy='42' r='4' fill='#4dff9a'/>
    <rect x='56' y='34' width='6' height='100' rx='3' fill='#fff' opacity='.12'/>`,
  3: `
    <defs>
      <linearGradient id='a' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#00d2ff'/>
        <stop offset='1' stop-color='#3a47d5'/>
      </linearGradient>
      <linearGradient id='b' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#f5f7fa'/>
        <stop offset='1' stop-color='#9aa5b5'/>
      </linearGradient>
    </defs>
    <rect x='74' y='10' width='52' height='180' rx='12' fill='url(#a)'/>
    <rect x='48' y='54' width='104' height='92' rx='28' fill='url(#b)'/>
    <rect x='57' y='63' width='86' height='74' rx='20' fill='#0b0e17'/>
    <circle cx='100' cy='100' r='26' fill='none' stroke='#ff3b6b' stroke-width='6' stroke-dasharray='120 50' stroke-linecap='round'/>
    <circle cx='100' cy='100' r='17' fill='none' stroke='#7dff6b' stroke-width='6' stroke-dasharray='70 40' stroke-linecap='round'/>
    <circle cx='100' cy='100' r='8' fill='none' stroke='#3bd1ff' stroke-width='5' stroke-dasharray='30 22' stroke-linecap='round'/>
    <rect x='152' y='88' width='7' height='22' rx='3' fill='#7c8798'/>`,
  4: `
    <defs>
      <linearGradient id='a' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0' stop-color='#2c5364'/>
        <stop offset='1' stop-color='#0f2027'/>
      </linearGradient>
    </defs>
    <rect x='18' y='74' width='164' height='52' rx='26' fill='url(#a)'/>
    <rect x='18' y='74' width='164' height='10' rx='5' fill='#fff' opacity='.15'/>
    <rect x='66' y='70' width='68' height='60' rx='16' fill='#05070b'/>
    <path d='M74 102h12l5-14 8 28 6-14h19' fill='none' stroke='#ff4d8d' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/>
    <circle cx='36' cy='100' r='3' fill='#0f2027' opacity='.7'/>
    <circle cx='164' cy='100' r='3' fill='#0f2027' opacity='.7'/>`,
  5: `
    <defs>
      <linearGradient id='a' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#7b2ff7'/>
        <stop offset='1' stop-color='#f107a3'/>
      </linearGradient>
    </defs>
    <rect x='54' y='18' width='92' height='164' rx='24' fill='url(#a)'/>
    <rect x='54' y='18' width='92' height='164' rx='24' fill='none' stroke='#fff' stroke-opacity='.35' stroke-width='3'/>
    <rect x='64' y='28' width='42' height='46' rx='12' fill='#14101f'/>
    <circle cx='78' cy='43' r='9' fill='#2a2f45' stroke='#8b93b8' stroke-width='2'/>
    <circle cx='78' cy='43' r='3.5' fill='#6ea8ff'/>
    <circle cx='78' cy='61' r='9' fill='#2a2f45' stroke='#8b93b8' stroke-width='2'/>
    <circle cx='78' cy='61' r='3.5' fill='#6ea8ff'/>
    <circle cx='95' cy='52' r='4' fill='#ffd23f'/>
    <path d='M72 150q28-30 58-8' fill='none' stroke='#fff' stroke-opacity='.4' stroke-width='5' stroke-linecap='round'/>`,
  6: `
    <defs>
      <linearGradient id='a' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#ffffff'/>
        <stop offset='1' stop-color='#cfd6e6'/>
      </linearGradient>
    </defs>
    <rect x='84' y='26' width='9' height='30' rx='2' fill='#d9dde6'/>
    <rect x='107' y='26' width='9' height='30' rx='2' fill='#d9dde6'/>
    <rect x='58' y='54' width='84' height='86' rx='16' fill='url(#a)'/>
    <rect x='84' y='86' width='32' height='14' rx='7' fill='#1d2233'/>
    <path d='M104 62l-10 14h8l-4 12 12-16h-8z' fill='#ff9f1c'/>
    <path d='M100 140v14q0 24 40 24' fill='none' stroke='#ffd166' stroke-width='9' stroke-linecap='round'/>
    <rect x='136' y='168' width='28' height='20' rx='8' fill='#cfd6e6'/>`
};

let cart = [];
let currentFilter = "all";
let feedbackTimer;

const productList = document.getElementById("product-list");
const menu = document.getElementById("menu");
const menuLinks = document.getElementsByClassName("menu-link");
const listItems = document.getElementsByTagName("li");
const searchBox = document.querySelector("#search");
const sortSelect = document.getElementById("sort");
const planSelect = document.getElementById("plan");
const allButtons = document.querySelectorAll("button");
const resultCount = document.getElementById("result-count");
const cartList = document.getElementById("cart-list");
const emptyMessage = document.getElementById("empty-msg");
const totalElement = document.getElementById("total");
const clearButton = document.getElementById("clear-btn");
const themeButton = document.getElementById("theme-btn");
const feedback = document.getElementById("feedback");
const preview = document.getElementById("preview");
const previewImage = document.getElementById("preview-img");
const previewCaption = document.getElementById("preview-cap");
const closePreviewButton = document.getElementById("close-preview");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const formHint = document.getElementById("form-hint");

function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function findProduct(id) {
  return products.find(function (product) {
    return product.id == id;
  });
}

function getImage(product) {
  const colors = backgrounds[product.id] || ["#cccccc", "#999999"];
  const shapes = artwork[product.id] || "";
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>" +
    "<defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>" +
    "<stop offset='0' stop-color='" + colors[0] + "'/>" +
    "<stop offset='1' stop-color='" + colors[1] + "'/>" +
    "</linearGradient></defs>" +
    "<rect width='200' height='200' fill='url(#bg)'/>" +
    "<ellipse cx='100' cy='184' rx='58' ry='7' fill='#000' opacity='.22'/>" +
    shapes +
    "</svg>";
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function showFeedback(message, isError) {
  feedback.textContent = message;
  feedback.classList.toggle("error", Boolean(isError));
  feedback.classList.add("show");
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(function () {
    feedback.classList.remove("show");
  }, 2200);
}

function renderProducts() {
  const query = searchBox.value.trim().toLowerCase();
  const sortOrder = sortSelect.value;

  const shown = products.filter(function (product) {
    const matchesCategory = currentFilter === "all" || product.cat === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (sortOrder === "low") {
    shown.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortOrder === "high") {
    shown.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  productList.innerHTML = "";

  shown.forEach(function (product) {
    const card = document.createElement("div");
    card.className = "product";
    card.dataset.id = product.id;

    const image = document.createElement("img");
    image.src = getImage(product);
    image.alt = product.name;
    image.dataset.id = product.id;

    const title = document.createElement("h3");
    title.textContent = product.name;
    title.title = "Double-click to rename";
    title.dataset.id = product.id;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = product.cat + " · " + formatPrice(product.price);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = "Add to cart";
    addButton.dataset.add = product.id;

    card.append(image, title, price, addButton);
    productList.appendChild(card);
  });

  if (shown.length) {
    resultCount.textContent = shown.length + " product(s) shown";
  } else {
    resultCount.textContent = "No products match. Try a different search.";
  }
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(function (item, index) {
    total += item.price;

    const row = document.createElement("li");
    row.textContent = item.name + " - " + formatPrice(item.price);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.dataset.remove = index;

    row.appendChild(removeButton);
    cartList.appendChild(row);
  });

  totalElement.textContent = formatPrice(total);
  emptyMessage.style.display = cart.length ? "none" : "block";
}

function openPreview(product) {
  previewImage.src = getImage(product);
  previewImage.alt = product.name;
  previewCaption.textContent = product.name + " - " + formatPrice(product.price);
  preview.classList.add("open");
  preview.setAttribute("aria-hidden", "false");
}

function closePreview() {
  preview.classList.remove("open");
  preview.setAttribute("aria-hidden", "true");
}

function renameProduct(title) {
  const input = document.createElement("input");
  input.value = title.textContent;
  title.replaceWith(input);
  input.focus();
  input.select();

  input.addEventListener("blur", function () {
    const product = findProduct(title.dataset.id);
    if (input.value.trim()) {
      product.name = input.value.trim();
    }
    renderProducts();
    showFeedback("Product name updated");
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      input.blur();
    }
  });
}

productList.addEventListener("click", function (event) {
  const target = event.target;

  if (target.dataset.add) {
    const product = findProduct(target.dataset.add);
    cart.push(product);
    renderCart();
    showFeedback(product.name + " added to cart");
  }

  if (target.tagName === "IMG") {
    openPreview(findProduct(target.dataset.id));
  }
});

productList.addEventListener("dblclick", function (event) {
  if (event.target.tagName === "H3") {
    renameProduct(event.target);
  }
});

productList.addEventListener("mouseover", function (event) {
  const card = event.target.closest(".product");
  if (card) {
    card.classList.add("highlight");
  }
});

productList.addEventListener("mouseout", function (event) {
  const card = event.target.closest(".product");
  if (card) {
    card.classList.remove("highlight");
  }
});

cartList.addEventListener("click", function (event) {
  if (event.target.dataset.remove !== undefined) {
    const removed = cart.splice(Number(event.target.dataset.remove), 1)[0];
    renderCart();
    showFeedback(removed.name + " removed from cart");
  }
});

clearButton.addEventListener("click", function () {
  if (!cart.length) {
    showFeedback("Cart is already empty", true);
    return;
  }
  cart = [];
  renderCart();
  showFeedback("Cart cleared");
});

menu.addEventListener("click", function (event) {
  if (!event.target.classList.contains("menu-link")) {
    return;
  }
  for (const link of menuLinks) {
    link.classList.remove("active");
  }
  event.target.classList.add("active");
  currentFilter = event.target.dataset.filter;
  renderProducts();
  showFeedback("Showing: " + event.target.textContent);
});

searchBox.addEventListener("keyup", renderProducts);
sortSelect.addEventListener("change", renderProducts);

planSelect.addEventListener("change", function (event) {
  showFeedback("Plan set to " + event.target.value);
});

themeButton.addEventListener("click", function () {
  const root = document.documentElement;
  const goDark = root.dataset.theme !== "dark";
  root.dataset.theme = goDark ? "dark" : "light";
  themeButton.textContent = goDark ? "Light theme" : "Dark theme";
  showFeedback(goDark ? "Dark theme on" : "Light theme on");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePreview();
  }
});

closePreviewButton.addEventListener("click", closePreview);

preview.addEventListener("click", function (event) {
  if (event.target === preview) {
    closePreview();
  }
});

emailInput.addEventListener("keyup", function () {
  const valid = isValidEmail(emailInput.value);
  formHint.textContent = valid ? "Looks good." : "Enter a valid email, like name@example.com.";
  formHint.style.color = valid ? "var(--accent)" : "var(--warn)";
  emailInput.style.borderColor = valid ? "var(--accent)" : "var(--warn)";
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    showFeedback("Please enter a valid email address", true);
    emailInput.focus();
    return;
  }

  showFeedback("Subscribed " + emailInput.value + " (" + planSelect.value + ")");
  signupForm.reset();
  formHint.textContent = "Enter your email address.";
  formHint.style.color = "";
  emailInput.style.borderColor = "";
});

console.log("List items:", listItems.length, "| Buttons:", allButtons.length);

renderProducts();
renderCart();
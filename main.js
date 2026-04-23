const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantity = document.getElementById("value");
const defaultPrice = document.querySelector(".price");

function changeImage(e) {
  // Change The Big Image
  document.getElementById("main-img").src = e.src;
  // Remove (active) Class From All
  document.querySelectorAll(".thumb").forEach(img => {
    img.classList.remove("active");
    img.parentElement.classList.remove("active-img");
  });
  // Set (active) Class To The Clicked One
  e.classList.add("active");
  e.parentElement.classList.add("active-img");
}

function plusFunc() {
  let defaultQt = parseInt(quantity.innerHTML);
  quantity.innerHTML = defaultQt + 1;

  let NewPrice = parseFloat(defaultPrice.innerHTML.replace("$", ""));
  NewPrice += 125;
  defaultPrice.innerHTML = "$" + NewPrice.toFixed(2);

  if (NewPrice > 999.99) {
    defaultPrice.style.transform = "scale(0.92)";
  } else {
    defaultPrice.style.transform = "scale(1)";
  }
}

function minusFunc() {
  let defaultQt = parseInt(quantity.innerHTML);
  if(defaultQt > 0) {
    quantity.innerHTML = defaultQt - 1;
  }

  let NewPrice = parseFloat(defaultPrice.innerHTML.replace("$", ""));
  NewPrice -= 125;
  if(NewPrice >= 125) {
    defaultPrice.innerHTML = "$" + NewPrice.toFixed(2);
  }

  if (NewPrice > 999.99) {
    defaultPrice.style.transform = "scale(0.92)";
  } else {
    defaultPrice.style.transform = "scale(1)";
  }
}

// --< Gallery Overlay >--
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalImgRv = document.getElementById("modal-img-rv");
const images = [
  "assets/product-1.jpg",
  "assets/product-2.jpg",
  "assets/product-3.jpg",
  "assets/product-4.jpg"
];
let currentIndex = 0;

function openModal() {
  modal.style.display = "flex";

  // open with the same current image
  const currentSrc = document.getElementById("main-img").src;
  currentIndex = images.findIndex(img => currentSrc.includes(img));
  updateModalImage();
}

function closeModal() {
  modal.style.display = "none";
}

function changeSlide(step) {
  modalImgRv.style.display = "none";
  currentIndex += step;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  updateModalImage();
}

function selectModalImage(index) {
  currentIndex = index;
  updateModalImage();
}

function updateModalImage() {
  modalImg.src = images[currentIndex];
}
"using strict";

const firstColorChoose = document.querySelector(".first-color");
const secondColorChoose = document.querySelector(".second-color");
const thirdColorChoose = document.querySelector(".third-color");
const fourthColorChoose = document.querySelector(".fourth-color");
const fifthColorChoose = document.querySelector(".fifth-color");
const sixthColorChoose = document.querySelector(".sixth-color");
const productColorChoose = document.querySelector(".product-color-choose");

const productColorImages = [
  "./assets/first-color-product.png",
  "./assets/second-color-product.png",
  "./assets/third-color-product.png",
  "./assets/fourth-color-product.png",
  "./assets/fifth-color-product.png",
  "./assets/sixth-color-product.png",
];

firstColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[0];
});

secondColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[1];
});

thirdColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[2];
});

fourthColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[3];
});

fifthColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[4];
});

sixthColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[5];
});

const imagesElement = document.querySelector("#images");
const imageViewElement = document.querySelector("#imageView");
const actionsElement = document.querySelector("#actions");
const cartContainerElement = document.querySelector("#cart");

let cart = [];

imagesElement.addEventListener("click", (event) => {
  const image = event.target;
  console.log(imagesElement.querySelectorAll("div"));
  imagesElement.querySelectorAll("div").forEach((element) => {
    if (element !== image.parentElement) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
  imageViewElement.src = image.src.replace("-thumbnail", "");
});

actionsElement.addEventListener("click", (event) => {
  const button = event.target;
  let count = actionsElement.querySelector("span").textContent;
  switch (button.id) {
    case "add":
      actionsElement.querySelector("span").textContent = parseInt(count) + 1;
      break;
    case "reduce":
      actionsElement.querySelector("span").textContent =
        parseInt(count) > 0 ? parseInt(count) - 1 : 0;
      break;
    case "addCart":
      actionsElement.querySelector("span").textContent = 0;
      addCart({ amount: parseInt(count), id: 1, price: 125 });
      break;
  }
});

function addCart(product) {
  console.log(product);
  const article = document.createElement("article");
  const element = `
  <div><img src="images/image-product-1-thumbnail.jpg" alt=""></div>
  <div>
    <p>Fall Limited Edition Sneakers</p>
    <p><span id="price">${product.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}</span> x ${product.amount} <span>$${(
    product.amount * product.price
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })}</span></p>
  </div>
  <div>
    <button><img src="images/icon-delete.svg" alt=""></button>
  </div>`;
  article.innerHTML = element;
  console.log(article);
  document.querySelector(".cart-elements").children[0].remove();
  document.querySelector(".cart-elements").appendChild(article);
  cart.push(product);
  console.log(cart);
  counter();
  let btn = document.createElement("button");
  btn.innerText = "Checkout";
  document.querySelector(".cart-container").children[0].appendChild(btn);
}

function counter() {
  document.querySelector(".counter-cart").classList.add("show");
  let counter = 0;
  cart.forEach((element) => {
    // console.log(cart.length, element.amount);
    counter = counter + element.amount;
  });
  document.querySelector(".counter-cart").textContent = counter;
}

cartContainerElement.addEventListener("click", (event) => {
  document.querySelector(".cart-container").classList.toggle("show");
});

const modalElements = document.querySelector("#modalE");
const modalViewer = document.querySelector("#modalV");

modalElements.addEventListener("click", (event) => {
  const element = event.target;
  console.log(element);
  modalElements.children[0].querySelectorAll("div").forEach((elementa) => {
    console.log(element.parentElement, elementa);
    if (elementa !== element.parentElement) {
      elementa.classList.remove("active");
    } else {
      elementa.classList.add("active");
    }
  });
  modalViewer.querySelector("img").src = element.src.replace("-thumbnail", "");
});

const buttons = modalViewer.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  const element = event.target;
  // console.log(event.target);
  const index = modalElements.children[0].querySelector(".active");
  switch (element.id) {
    case "prev":
      modalElements.children[0].querySelectorAll("div").forEach((el, i) => {
        if (el === index && i > 0) {
          modalElement(modalElements.children[0].children[i - 1]);
          console.log(
            modalElements.children[0].children[i - 1].children[0].src
          );
        }
      });
      modalViewer.querySelector("img").src = modalElements.children[0]
        .querySelector(".active")
        .children[0].src.replace("-thumbnail", "");
      break;
    case "next":
      modalElements.children[0].querySelectorAll("div").forEach((el, i) => {
        if (el === index && i < modalElements.children[0].children.length - 1) {
          modalElement(modalElements.children[0].children[i + 1]);
          console.log(
            modalElements.children[0].children[i + 1].children[0].src
          );
        }
      });
      modalViewer.querySelector("img").src = modalElements.children[0]
        .querySelector(".active")
        .children[0].src.replace("-thumbnail", "");
      break;
  }
});

function modalElement(element) {
  modalElements.children[0].querySelectorAll("div").forEach((el) => {
    if (element !== el) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
}

const closeModalElement = document.querySelector("#close");
closeModalElement.addEventListener("click", () => {
  document.querySelector(".image-modal").classList.remove("show");
});

document.querySelector(".img-view").addEventListener("click", () => {
  document.querySelector(".image-modal").classList.add("show");
});

const buttonsView = document.querySelector("#buttons-img-view");
const imagesArray = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

buttonsView.addEventListener("click", (event) => {
  const element = event.target;
  let elementPath;
  // console.log(elementPath);
  switch (element.id) {
    case "next":
      elementPath = imageViewElement.src.substr(
        imageViewElement.src.length - 27,
        imageViewElement.src.length
      );
      console.log(imagesArray.indexOf(elementPath) + 1);
      if (
        imagesArray.indexOf(elementPath) < 3 &&
        imagesArray.indexOf(elementPath) !== -1
      ) {
        imageViewElement.src =
          imagesArray[imagesArray.indexOf(elementPath) + 1];
      }
      break;
    case "prev":
      elementPath = imageViewElement.src.substr(
        imageViewElement.src.length - 27,
        imageViewElement.src.length
      );
      console.log(imagesArray.indexOf(elementPath) - 1);
      if (
        imagesArray.indexOf(elementPath) > 0 &&
        imagesArray.indexOf(elementPath) !== -1
      ) {
        imageViewElement.src =
          imagesArray[imagesArray.indexOf(elementPath) - 1];
      }
      break;
  }
});

const menuBtn = document.querySelector("#menu");
const menuElement = document.querySelector(".menu");
const menuClose = document.querySelector("#close-menu");
menuBtn.addEventListener("click", () => {
  menuElement.classList.toggle("show");
});

menuClose.addEventListener("click", () => {
  menuElement.classList.toggle("show");
});

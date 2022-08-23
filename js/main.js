let lis = document.querySelectorAll(".our-works ul li");
let images = document.querySelectorAll(".our-works .row .image");
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let date = `${month[new Date().getMonth()]} ${new Date().getDate()} , ${new Date().getFullYear()}`
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.currentTarget.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
      e.target.className = "active rounded-pill";
    });
    images.forEach((imag) => {
      imag.style.display = "none";
    });
    let i = 0;
    let marginCounter = 100;
    document
      .querySelectorAll(`.our-works .row .${e.target.dataset.work}`)
      .forEach((imag) => {
        imag.style.display = "block";
        imag.classList.add("animated");
      });
  });
});

let imgs = document.querySelectorAll(".blogs img");
imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Over lay;
    let overLay = document.createElement("div");
    overLay.className = "over-lay";
    document.body.append(overLay)
    // Create Main Div
    let div = document.createElement("div");
    div.className = "img-popup";

    // Create Close Icon
    let close = document.createElement("span");
    close.className = "close";
    close.append(document.createTextNode("X"));

    // Create Img
    let image = document.createElement("img");
    image.src = e.target.src;
    image.className = "img-fluid"

    // Create Date
    let span = document.createElement("span");
    span.innerHTML = date;
    // Create Description
    let p = document.createElement("p");
    p.append(document.createTextNode("Some Awesome Blog Title Here "));

    // Append Elements
    div.append(close);
    div.append(image);
    div.append(span)
    div.append(p);
    document.body.append(div);
    // close Func
    closeDiv(close, overLay);
  });

});

function closeDiv(ele, overLay) {
  ele.onclick = () => {
    ele.parentElement.remove();
    document.body.removeChild(overLay)
  }
}

let toUp = document.querySelector(".scroll-up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    toUp.style.display = "flex"
  }
  else {
    toUp.style.display = "none"
  }
  toUp.onclick = () => {
    window.scrollTo({top: 0, behavior:"smooth"})
  }
}
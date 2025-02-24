//toggle navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let hamburger = document.querySelector(".menu-icon");
let close = document.querySelector(".icon-home");
hamburger.onclick = () => {
  close.classList.toggle("hide");
  hamburger.classList.add("hide");
  navbar.classList.toggle("active");
};
close.onclick = () => {
  hamburger.classList.toggle("hide");
  close.classList.add("hide");
  navbar.classList.toggle("active");
};

//scroll behaviour

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header a");
console.log(navlinks);
let closeIcon = document.querySelector(".tag");
console.log(closeIcon);
window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((navlink) => {
        navlink.classList.remove("active");
        document
          .querySelector("header a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  navbar.classList.toggle("active");
};
document.querySelector("#bnt").addEventListener("click", function () {
  document.querySelector(".comment").classList.add("show");
});

// /* :root {
//   --bg-color: #210336;
//   --second-bg-color: #2a0225;
//   --text-color: #ededed;
//   --main-color: #00abf0;
//   --scroll-color: #023b40;

// :root {
//   --bg-color: #7c15d6; /* Deep Purple */
//   --second-bg-color: #4b0f6b; /* Dark Plum */
//   --text-color: #e6d6ff; /* Soft Lavender */
//   --main-color: #9d4edd; /* Vivid Purple */
// }
// } */

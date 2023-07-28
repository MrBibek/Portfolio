// Ascessing the DOM Elements
let navBar = document.querySelector(".nav");
let project = document.querySelector(".project-list");
let loader = document.querySelector(".loader-content");
let navToogle = document.querySelector(".toggle-btn");
let navLinks = document.querySelector(".nav-others");
let links = document.querySelector(".links")
let date = new Date().getFullYear();
let dateCopyright = document.querySelector(".date");
let scrollLinks = document.querySelectorAll(".nav-links");
// const links = document.querySelector(".links");

console.log(navToogle);
// Loading Screen
document.addEventListener("DOMContentLoaded", function () {
  loadingAnimation();
  let projectList = projects.map(function (p) {
    return `<div class="project-card" style="width: 18rem">
        <img
          class="card-img-top"
          src="${p.src}"
          alt="${p.alt}"
        />
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">
           ${p.text}
          </p>
          <a href="" class="btn btn-primary">Open</a>
        </div>
        </div>
        </div>
        </div>`;
  });
  project.innerHTML = projectList;
  if (projects.length < 4) {
    project.style.cssText = `display:flex;gap:20px;`;
  }
});

function loadingAnimation() {
  setTimeout(function () {
    // document.documentElement.innerHTML = ``
    loader.classList.add("loader-remove");
    console.log("setTimeout");
  }, 1);
}

navToogle.addEventListener("click", function () {
  links.classList.toggle("show-links")
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = navLinks.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navLinks.style.height = `${linksHeight}px`;
  } else {
    navLinks.style.height = 0;
  }
});

dateCopyright.innerHTML = date;

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("nav-fixed");
  } else {
    navBar.classList.remove("nav-fixed");
  }
});

// Nav Links
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let containerHeight = navLinks.getBoundingClientRect().height;
    let navHeight = navBar.getBoundingClientRect().height;
    let fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (fixedNav) {
      position = position + navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight - 150;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    navLinks.style.height = 0;
    navToogle.classList.remove("toggle-btn-active");
    links.classList.remove("show-links")
  });
});

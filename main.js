// dom elements
const scrollTopBtn = document.querySelector(".scrollTopBtn");
const mobilenav = document.querySelector(".mobilenav");
const hamburger = document.querySelector(".header__hamburger");
const mobilenavclose = document.querySelector(".mobilenavclose");

// event listeners

hamburger.addEventListener("click", () => {
  mobilenav.classList.add("active");
});

mobilenavclose.addEventListener("click", () => {
  mobilenav.classList.remove("active");
});

// swiper
let swiperHero = new Swiper(".home__hero", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperActivities = new Swiper(".home__activities-swiper", {
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    654: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let swiperFooter = new Swiper(".footer-swiper", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// scroll

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

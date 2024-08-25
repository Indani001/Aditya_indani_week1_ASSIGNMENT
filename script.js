// const burger = document.querySelector('.burger');
// const nav = document.querySelector('#nav-links');
// const navLinks = document.querySelectorAll('.nav-link');

// burger.addEventListener('click', () => {
//   nav.classList.toggle('active');
//   burger.classList.toggle('toggle');
// });

// // Attach event listeners to all nav links
// navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//         // Remove 'active' class from all nav links
//         navLinks.forEach(l => l.classList.remove('active'));

//         // Add 'active' class to the clicked link
//         this.classList.add('active');
//     });
// });

// Add 'active' class to the first nav link when scrolling to the top
// window.addEventListener('scroll', () => {
//     if (window.scrollY === 0) {
//         navLinks.forEach(link => link.classList.remove('active'));
//         if (navLinks.length > 0) {
//             navLinks[0].classList.add('active');
//         }
//     }
// });

const burger = document.querySelector(".burger");
const nav = document.querySelector("#navlinks");
const navLinks = document.querySelectorAll(".navlink");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("toggle");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    nav.classList.remove("active");
    burger.classList.remove("toggle");
  });
});

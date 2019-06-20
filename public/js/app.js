console.log('active');

$('.navbutton').on("click", (e) => {
  // console.log($('nav').find('a'));
  // e.preventDefault();
  $('nav').find('a').removeClass('active');
  // $('html,body').scrollTo(this.hash,this.hash); 
  $(e.target).addClass('active');
})

// // Active on scroll
// // https://css-tricks.com/sticky-smooth-active-nav/
// let mainNavLinks = document.querySelectorAll("nav ul li a");
// let mainSections = document.querySelectorAll("main section");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.classList.add("current");
//     } else {
//       link.classList.remove("current");
//     }
//   });
// });
// console.log('connected');

// Set single nav item active
const setActive = (target) => {
  if (!target.hasClass('active')) {
    // console.log('set')
    $('nav').find('a').removeClass('active');
    $(target).addClass('active');
  }
}

// Set active by click
// This is now redundant, with scroll triggering it
// $('.navbutton').on("click", (e) => {
//   setActive(e.target);
// })

// Set active by scroll
// from https://jsfiddle.net/cse_tushar/Dxtyu/141/
// fixed position off by 1 and flickering for already active navs
$(document).on("scroll", (e) => {
  scrollActive();
  toggleNavSize();
});

const scrollActive = () => {
  const scrollPos = $(document).scrollTop();
  $('nav ul.fullnav a').each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    const refTopPos = refElement.position().top - 1;
    if (refTopPos <= scrollPos && refTopPos + refElement.height() > scrollPos) {
      setActive(currLink);
    } 
  });
};

// Shrink Nav bar on scroll
const toggleNavSize = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // shrink social icons    
    $('.social img').css({
     'height': '30px',
     'margin': '5px'
    });
    // shrink hamburger menu
    $('.hamburger').css({
      'width': '40px',
      'top': '5px',
    });
    $('.hamburger .line').css({
      'width': '70%',
      'border': '1.5px solid black',
      'margin': '6px',
    });
  } else {
    // restore social icons size
    $('.social img').css({
      'height': '50px',
      'margin': '10px'
    });
    // restore hamburger menu size
    $('.hamburger').css({
      'width': '50px',
      'top': '15px',
    });
    $('.hamburger .line').css({
      'width': '66%',
      'border': '2.5px solid black',
      'margin': '8px',
    });
  }
}


// .hamburger .line {
//   width: 70%;
//   border: 2px solid black;
//   margin: 7px;
// }


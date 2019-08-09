console.log('####################');
console.log('Oh hi! Curious about the code used to build this site? Good news it\'s open source! You can find everything here:');
console.log('https://github.com/travisformayor/portfolio');
console.log('Feel free to fork or send me a PR request \\o/');
console.log(' - Travis');
console.log('####################');

// // Open and Close mobile hamburger menu
// Open hamburger menu
$('#hamburger').on("click", () => {
  $('.sidemenu').css('right', '0px');
});
// Close hamburger menu with close
$('#close').on("click", () => {
  $('.sidemenu').css('right', '-300px');
});
// Close hamburger menu by making selection
$('nav#sidenav a').on("click", () => {
  $('.sidemenu').css('right', '-300px');
});
// Close hamburger menu by anywhere outside
$('body').on("click", (e) => {
  const burgerButton = e.target.closest('button#hamburger')
  const sidemenu = e.target.closest('div.sidemenu')
  if(!burgerButton && !sidemenu) {
    $('.sidemenu').css('right', '-300px');
  };
});

// // Set single nav item active
const setActive = (target) => {
  if (!target.hasClass('active')) {
    // console.log('set')
    $('nav').find('a').removeClass('active');
    $(target).addClass('active');
  };
};

// // Set active by click
// This is now redundant, with scroll triggering it
// $('.navbutton').on("click", (e) => {
//   setActive(e.target);
// })

// // Set active by scroll
// from https://jsfiddle.net/cse_tushar/Dxtyu/141/
// fixed position off by 1 and flickering for already active navs
$(document).on("scroll", (e) => {
  scrollActive();
  toggleNavSize();
});
const scrollActive = () => {
  const scrollPos = $(document).scrollTop();
  $('nav#fullnav ul a').each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    const refTopPos = refElement.position().top - 5;
    if (refTopPos <= scrollPos && refTopPos + refElement.height() > scrollPos) {
      setActive(currLink);
    };
  });
};

// // Shrink nav bar and elements on scroll
const toggleNavSize = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // shrink social icons    
    $('header .social img').css('height', '30px');
    $('header .social a').css('margin', '7px 5px 3px');
    // shrink hamburger menu
    $('#hamburger').css({
      'width': '45px',
      'top': '4px',
    });
    $('#hamburger .line').css({
      'width': '70%',
      'border': '1.5px solid black',
      'margin': '6px 5px',
    });
  } else {
    // restore social icons size
    $('header .social img').css('height', '50px');
    $('header .social a').css('margin', '13px 10px 7px');
    // restore hamburger menu size
    $('#hamburger').css({
      'width': '60px',
      'top': '12px',
    });
    $('#hamburger .line').css({
      'width': '70%',
      'border': '2.5px solid black',
      'margin': '8px 7px',
    });
  };
};
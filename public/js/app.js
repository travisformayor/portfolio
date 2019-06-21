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
  $('nav a').each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    const refTopPos = refElement.position().top - 1;
    if (refTopPos <= scrollPos && refTopPos + refElement.height() > scrollPos) {
      setActive(currLink);
    } 
  });
};

const toggleNavSize = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // header .social img {
    //   height: 50px;
    $('.social img').css({
     'height': '30px',
     'margin': '5px'
    })
  } else {
    $('.social img').css({
      'height': '50px',
      'margin': '10px'
    })
  }
}


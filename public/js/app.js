// console.log('connected');

// Set single nav item active
const setActive = (target) => {
  if (!target.hasClass('active')) {
    console.log('something')
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
  const scrollPos = $(document).scrollTop();
  $('nav a').each(function () {
    const currLink = $(this);
    const refElement = $(currLink.attr("href"));
    const refTopPos = refElement.position().top - 1;
    if (refTopPos <= scrollPos && refTopPos + refElement.height() > scrollPos) {
      setActive(currLink);
    } 
  });
});
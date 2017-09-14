var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

var myNav = document.getElementById("myNav");
var overlyStart = document.getElementById("overlay-nav");

var mainNav = document.getElementById("main-nav");

var thisMe = document.getElementById('this_is_me_text');
var thisMeHide = document.getElementById('this_is_me_hide_text');

// $('window').scroll(function(){
//  if( $(this).scrollTop() > 50 ) {
//    mn.addClass("main-nav-scrolled");
//  } else {
//    mn.removeClass("main-nav-scrolled");
//  }
// });




//---------------------------------------- Sticky Nav

document.addEventListener('scroll', function() {
 if( $(this).scrollTop() > hdr ) {
   mn.addClass(mns);
  myNav.className = "overlay nav_height_top";
 } else {
   mn.removeClass(mns);
   myNav.className = "overlay";
 }
});


//---------------------------------------- Nav Overlay

// if (mainNav.className === "main-nav") {
//   myNav.className = "overlay nav_height_btm";
// } else if(mainNav.className === "main-nav main-nav-scrolled") {
//  myNav.className = "overlay nav_height_top";
// }

/* Open */
overlyStart.addEventListener('click', function () {
     document.getElementById("myNav").style.height = "100%";
 });



/* Close */
myNav.addEventListener('click', function () {
    document.getElementById("myNav").style.height = "0%";
});


//---------------------------------------- Carousel

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    accessibility: true,
    arrows: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 7500,
    speed: 3000,
    slidesToShow: 1,
    // adaptiveHeight: true
  });
});



//---------------------------------------- Multiline toggle

thisMe.addEventListener('click', function() {
  if (thisMeHide.style.display == "none") {
    thisMeHide.style.display = "flex";
  } else {
      thisMeHide.style.display = "none";
  }
});

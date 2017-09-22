var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

var myNav = document.getElementById("myNav");
var overlyStart = document.getElementById("overlay-nav");

var mainNav = document.getElementById("main-nav");

var hideText = document.querySelectorAll('.hide_text');
var revialText = document.querySelectorAll('.revial_Text');

var treeInactive = document.querySelectorAll('.treehouse_inactive');
var treeSwap = document.getElementById('treehouse_swap');



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

// revialText.addEventListener('click', function() {
//   if (thisMeHide.style.display == "none") {
//     thisMeHide.style.display = "flex";
//   } else {
//       thisMeHide.style.display = "none";
//   }
// });

for (var i = 0; i < revialText.length; i++) {
  revialText[i].index = i;
  revialText[i].addEventListener("click", function(e){
    for (var i = 0; i < revialText.length; i++) {
      var textact = event.target;
      var textPar = textact.parentNode;
      var textSib = textPar.children;
      textSib[1].style.display = "flex";
      // if (textSib[1].style.display === "none") {
      //   textSib[1].style.display = "flex";
      //   } else {
      //   textSib[1].style.display = "none";
      //   }
    }
  });
}

for (var i = 0; i < hideText.length; i++) {
  hideText[i].index = i;
  hideText[i].addEventListener("click", function(e){
    // for (var i = 0; i < hideText.length; i++) {
      var textact = event.target;
      // var textPar = textact.parentNode;
      // var textSib = textPar.children;
      if (textact.style.display === "flex") {
        textact.style.display = "none";
        }
    // }
  });
}




//---------------------------------------- switch Position

var actSP = document.getElementById('test_sp');
var actSpCh = actSP.children;

for (var i = 0; i < treeInactive.length; i++) {
  treeInactive[i].index = i;
  treeInactive[i].addEventListener("click", function(e){
    var activate = event.target;
    var activatePar = activate.parentNode;
    var siblingsMe = activatePar.children;
     for (var i = 0; i < treeInactive.length; i++) {
        // var allChildren = activatePar.parentNode.children;
        var treeChildren = treeInactive[i].children;
        var number = i+1;
        var indexString = number.toString();
        activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
        treeInactive[i].setAttribute("class", ["inactive_space treehouse_inactive col"]+[indexString]);
        activatePar.parentNode.firstChild.className = "active_space";
        treeChildren[0].style.display = "flex";
        treeChildren[1].style.display = "flex";
        treeChildren[2].style.display = "none";
        treeChildren[3].style.display = "none";
        // treeChildren[4].style.display = "none";
     }

    //  actSpCh[0].style.display = "flex";
    //  actSpCh[1].style.display = "none";
    //  actSpCh[2].style.display = "none";
    //  actSpCh[3].style.display = "none";

     for(var r=0; r<siblingsMe.length; r++) {
      siblingsMe[r].style.display = "flex";
      }
      activate.style.display = "none";
      siblingsMe[0].style.display = "none";
      siblingsMe[4].style.display = "none";


  });
}

// elOne.addEventListener('click', function(){
//   elOne.parentNode.insertBefore(elOne,elOne.parentNode.firstChild);
//   elOne.className = "active_space placeholder_sizea_main";
//   elTwo.className = "inactive_space placeholder_size_sec";
//     // $("#element1").before($("#element2"));
// });

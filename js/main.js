var mn = $(".main-nav");
    mnh = $(".main-nav").height();
    mns = "main-nav-scrolled";
    hdr = $('header').height();

var myNav = document.getElementById("myNav");
var overlyStart = document.getElementById("overlay-nav");
var closeNav = document.getElementById('close_Nav');
var navLi = document.querySelectorAll('.navLi');
var mainNav = document.getElementById("main-nav");
var ulLarge = document.getElementById("nav_size_L");

var hideText = document.querySelectorAll('.hide_text');
var revialText = document.querySelectorAll('.revial_Text');



//
// var treeInactive = document.querySelectorAll('.treehouse_inactive');
// var logosInactive = document.querySelectorAll('.logos_inactive');
// var printInactive = document.querySelectorAll('.print_inactive');
// var funInactive = document.querySelectorAll('.fun_inactive');

// var treeSwap = document.getElementById('treehouse_swap');



// $('window').scroll(function(){
//  if( $(this).scrollTop() > 50 ) {
//    mn.addClass("main-nav-scrolled");
//  } else {
//    mn.removeClass("main-nav-scrolled");
//  }
// });


//---------------------------------------- Nav Media query




$(document).ready(function(){
  if (window.matchMedia("(min-width: 1024px)").matches) {
    console.log("test");
      // The browser window is at least 480px wide
        overlyStart.style.display = "none";
  }
  else {
      ulLarge.style.display = "none";
      // The browser window is less than 480px wide
  }

});


// function (mql) {
//     if (mediaQueryList.matches) {
//       console.log("test");
//         // The browser window is at least 480px wide
//           overlyStart.style.display = "none";
//     }
//     else {
//         // The browser window is less than 480px wide
//     }
// };


//---------------------------------------- Nav Scroll to

var navLi = document.getElementsByClassName('navLi');

for (var i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener("click", function(e){
       event.preventDefault;
       $("html, body").animate({
         scrollTop: $(this.getAttribute("href")).offset().top -mnh}, 1000);
       });
}

var myLogo = document.getElementsByClassName('DB Logo');
var carTop = document.getElementById('carousel_top');

for (var i = 0; i < myLogo.length; i++) {
  myLogo[i].addEventListener("click", function(e){
       event.preventDefault;
       $("html, body").animate({
         scrollTop: $(carTop)});
       });
}





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
// overlyStart.addEventListener('click', function () {
//       document.getElementById("myNav").style.height = "100%";
//  });

 overlyStart.addEventListener('click', function () {
     if (document.getElementById("myNav").style.height == "0%") {
       document.getElementById("myNav").style.height = "100%";
     } else {
       document.getElementById("myNav").style.height = "0%";
     }
  });


/* Close */
closeNav.addEventListener('click', function () {
    document.getElementById("myNav").style.height = "0%";
});

// workNav.addEventListener('click', function () {
//     document.getElementById("myNav").style.height = "0%";
// });

for (var i = 0; i < navLi.length; i++) {
  navLi[i].index = i;
  navLi[i].addEventListener("click", function(e){
    var activate = event.target;
     for (var i = 0; i < navLi.length; i++) {
           document.getElementById("myNav").style.height = "0%";
     }
  });
}




//---------------------------------------- Carousel

var item_length = $('.carousel > div').length - 1;
var slider = $('.carousel');

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    accessibility: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 6500,
    speed: 3000,
    // slidesToShow: 1,
    // infinite: false,
    // onAfterChange: function(){
    //     //check the length of total items in .slide container
    //     //if that number is the same with the number of the last slider
    //     //Then pause the slider
    //     if( item_length == slider.slickCurrentSlide() ){
    //       slider.slickPause();
    //         // slider.slickSetOption("autoplay",false,false)
    //     };
    // }

    // adaptiveHeight: true
  });
});

$('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.carousel').slick('slickPause');
});



//---------------------------------------- Multiline toggle

//


var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function(direction) {
    var bar_animation = document.getElementsByClassName('bar_animation');
    for (var i = 0; i < bar_animation.length; i++) {
      bar_animation[i].classList.add("active");
    }
  },
  offset: '75%'
})

for (var i = 0; i < revialText.length; i++) {
  revialText[i].index = i;
  revialText[i].addEventListener("click", function(e){
       var actText = event.target;
      //  var hiddenText = hideText[this.index];
       var panel = this.nextElementSibling;
       if (panel.style.maxHeight){
         panel.style.maxHeight = null;
       } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
       }

     });
}

// for (var i = 0; i < hideText.length; i++) {
//   hideText[i].index = i;
//   hideText[i].addEventListener("click", function(e){
//        var actText = event.target;
//        if (hideText[this.index].style.display = "flex") {
//          hideText[this.index].style.display = "none";
//        }
//      });
// }

// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = function() {
//     // this.classList.add("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   }
// }


//---------------------------------------- switch Position



//------------------------------------------------- switch Position Treehouse
//
// var actSP = document.getElementById('test_sp');
// var actSpCh = actSP.children;
//
// for (var i = 0; i < treeInactive.length; i++) {
//   treeInactive[i].index = i;
//   treeInactive[i].addEventListener("click", function(e){
//     var activate = event.target;
//     var activatePar = activate.parentNode;
//     var siblingsMe = activatePar.children;
//      for (var i = 0; i < treeInactive.length; i++) {
//         // var allChildren = activatePar.parentNode.children;
//         var treeChildren = treeInactive[i].children;
//         var number = i+1;
//         var indexString = number.toString();
//         activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
//         treeInactive[i].setAttribute("class", ["inactive_space treehouse_inactive col"]+[indexString]);
//         activatePar.parentNode.firstChild.className = "active_space";
//         treeChildren[0].style.display = "flex";
//         treeChildren[1].style.display = "flex";
//         treeChildren[2].style.display = "none";
//         treeChildren[3].style.display = "none";
//         // treeChildren[4].style.display = "none";
//      }
//
//     //  actSpCh[0].style.display = "flex";
//     //  actSpCh[1].style.display = "none";
//     //  actSpCh[2].style.display = "none";
//     //  actSpCh[3].style.display = "none";
//
//      for(var r=0; r<siblingsMe.length; r++) {
//       siblingsMe[r].style.display = "flex";
//       }
//       activate.style.display = "none";
//       siblingsMe[0].style.display = "none";
//       siblingsMe[4].style.display = "none";
//   });
// }
//
//
//
//
//
// //---------------------------------------------------- switch Position Logos
//
// for (var i = 0; i < logosInactive.length; i++) {
//   logosInactive[i].index = i;
//   logosInactive[i].addEventListener("click", function(e){
//     var activate = event.target;
//     var activatePar = activate.parentNode;
//     var siblingsMe = activatePar.children;
//      for (var i = 0; i < logosInactive.length; i++) {
//         // var allChildren = activatePar.parentNode.children;
//         var logoChildren = logosInactive[i].children;
//         var number = i+1;
//         var indexString = number.toString();
//         activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
//         logosInactive[i].setAttribute("class", ["inactive_space logo_inactive col"]+[indexString]);
//         activatePar.parentNode.firstChild.className = "active_space";
//         logoChildren[0].style.display = "flex";
//         logoChildren[1].style.display = "flex";
//         logoChildren[2].style.display = "none";
//         logoChildren[3].style.display = "none";
//         // treeChildren[4].style.display = "none";
//      }
//
//     //  actSpCh[0].style.display = "flex";
//     //  actSpCh[1].style.display = "none";
//     //  actSpCh[2].style.display = "none";
//     //  actSpCh[3].style.display = "none";
//
//      for(var r=0; r<siblingsMe.length; r++) {
//       siblingsMe[r].style.display = "flex";
//       }
//       activate.style.display = "none";
//       siblingsMe[0].style.display = "none";
//       siblingsMe[4].style.display = "none";
//   });
// }
//
//
//
//
//
// //--------------------------------------------------- switch Position Print
//
// for (var i = 0; i < printInactive.length; i++) {
//   printInactive[i].index = i;
//   printInactive[i].addEventListener("click", function(e){
//     var activate = event.target;
//     var activatePar = activate.parentNode;
//     var siblingsMe = activatePar.children;
//      for (var i = 0; i < printInactive.length; i++) {
//         // var allChildren = activatePar.parentNode.children;
//         var printChildren = printInactive[i].children;
//         var number = i+1;
//         var indexString = number.toString();
//         activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
//         printInactive[i].setAttribute("class", ["inactive_space print_inactive col"]+[indexString]);
//         activatePar.parentNode.firstChild.className = "active_space";
//         printChildren[0].style.display = "flex";
//         printChildren[1].style.display = "flex";
//         printChildren[2].style.display = "none";
//         printChildren[3].style.display = "none";
//         // treeChildren[4].style.display = "none";
//      }
//
//     //  actSpCh[0].style.display = "flex";
//     //  actSpCh[1].style.display = "none";
//     //  actSpCh[2].style.display = "none";
//     //  actSpCh[3].style.display = "none";
//
//      for(var r=0; r<siblingsMe.length; r++) {
//       siblingsMe[r].style.display = "flex";
//       }
//       activate.style.display = "none";
//       siblingsMe[0].style.display = "none";
//       siblingsMe[4].style.display = "none";
//   });
// }
//
// //-------------------------------------------------------- switch Position Fun
//
// for (var i = 0; i < funInactive.length; i++) {
//   funInactive[i].index = i;
//   funInactive[i].addEventListener("click", function(e){
//     var activate = event.target;
//     var activatePar = activate.parentNode;
//     var siblingsMe = activatePar.children;
//      for (var i = 0; i < funInactive.length; i++) {
//         // var allChildren = activatePar.parentNode.children;
//         var funChildren = funInactive[i].children;
//         var number = i+1;
//         var indexString = number.toString();
//         activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
//         funInactive[i].setAttribute("class", ["inactive_space fun_inactive col"]+[indexString]);
//         activatePar.parentNode.firstChild.className = "active_space";
//         funChildren[0].style.display = "flex";
//         funChildren[1].style.display = "flex";
//         funChildren[2].style.display = "none";
//         funChildren[3].style.display = "none";
//         // treeChildren[4].style.display = "none";
//      }
//
//     //  actSpCh[0].style.display = "flex";
//     //  actSpCh[1].style.display = "none";
//     //  actSpCh[2].style.display = "none";
//     //  actSpCh[3].style.display = "none";
//
//      for(var r=0; r<siblingsMe.length; r++) {
//       siblingsMe[r].style.display = "flex";
//       }
//       activate.style.display = "none";
//       siblingsMe[0].style.display = "none";
//       siblingsMe[4].style.display = "none";
//   });
// }
//

var entry = document.getElementsByClassName('entry');

var button = document.getElementsByClassName('button');

for (var i = 0; i < button.length; i++) {
  button[i].index = i;
  button[i].addEventListener("click", function(e){
       var actButton = event.target;
       $("html, body").animate({
         scrollTop: $("#tree").offset().top -mnh}, 1000);
      for (var i = 0; i < entry.length; i++) {
          entry[i].setAttribute('class', 'entry');
          var numbers = i+1;
          // var indexStrings = number.toString();
           button[i].setAttribute('class', 'button col'+[numbers]);
      }
       entry[this.index].setAttribute('class', 'entry active_space active');
       actButton.parentNode.setAttribute('class', 'button col' + [this.index] + ' hide');
     });
}



var entryL = document.getElementsByClassName('entryL');

var buttonL = document.getElementsByClassName('buttonL');

for (var i = 0; i < buttonL.length; i++) {
  buttonL[i].index = i;
  buttonL[i].addEventListener("click", function(e){
       var actButton = event.target;
       $("html, body").animate({
         scrollTop: $("#logo").offset().top -mnh}, 1000);
      for (var i = 0; i < entryL.length; i++) {
          entryL[i].setAttribute('class', 'entryL');
          var numbers = i+1;
          // var indexStrings = number.toString();
           buttonL[i].setAttribute('class', 'buttonL col'+[numbers]);
      }
       entryL[this.index].setAttribute('class', 'entryL active_space active');
       actButton.parentNode.setAttribute('class', 'buttonL col' + [this.index] + ' hide');
     });
}


var entryP = document.getElementsByClassName('entryP');

var buttonP = document.getElementsByClassName('buttonP');

for (var i = 0; i < buttonP.length; i++) {
  buttonP[i].index = i;
  buttonP[i].addEventListener("click", function(e){
       var actButton = event.target;
       $("html, body").animate({
         scrollTop: $("#print").offset().top -mnh}, 1000);
      for (var i = 0; i < entryP.length; i++) {
          entryP[i].setAttribute('class', 'entryP');
          var numbers = i+1;
          // var indexStrings = number.toString();
           buttonP[i].setAttribute('class', 'buttonP col'+[numbers]);
      }
       entryP[this.index].setAttribute('class', 'entryP active_space active');
       actButton.parentNode.setAttribute('class', 'buttonP col' + [this.index] + ' hide');
     });
}






var entryF = document.getElementsByClassName('entryF');

var buttonF = document.getElementsByClassName('buttonF');

for (var i = 0; i < buttonF.length; i++) {
  buttonF[i].index = i;
  buttonF[i].addEventListener("click", function(e){
       var actButton = event.target;
       $("html, body").animate({
         scrollTop: $("#fun").offset().top -mnh}, 1000);
      for (var i = 0; i < entryF.length; i++) {
          entryF[i].setAttribute('class', 'entryF');
          var numbers = i+1;
          // var indexStrings = number.toString();
           buttonF[i].setAttribute('class', 'buttonF col'+[numbers]);
      }
       entryF[this.index].setAttribute('class', 'entryF active_space active');
       actButton.parentNode.setAttribute('class', 'buttonF col' + [this.index] + ' hide');
     });
}



//-------------------------------------------------------- Charts
//
// Chart.defaults.global.legend.display = false;

// var ctx = document.getElementById("myChart").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Red", "Blue", "Yellow"],
//         datasets: [{
//             data: [12, 19, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)'
//             ],
//             borderWidth: 0
//
//         }]
//     },
//     options: {
//       scales: {
//           xAxes: [{
//               gridLines: {
//                   display: false
//               }
//           }],
//           yAxes: [{
//               gridLines: {
//                   display: false
//               }
//           }]
//       }
//     }
// });


//---------------------------- Charts


var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function(direction) {
    var bar_animation = document.getElementsByClassName('bar_animation');
    for (var i = 0; i < bar_animation.length; i++) {
      bar_animation[i].classList.add("active");
    }
  },
  offset: '75%'
})

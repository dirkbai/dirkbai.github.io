var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

var myNav = document.getElementById("myNav");
var overlyStart = document.getElementById("overlay-nav");
var closeNav = document.getElementById('close_Nav');
var navLi = document.querySelectorAll('.navLi');
var mainNav = document.getElementById("main-nav");

var hideText = document.querySelectorAll('.hide_text');
var revialText = document.querySelectorAll('.revial_Text');

var treeInactive = document.querySelectorAll('.treehouse_inactive');
var logosInactive = document.querySelectorAll('.logos_inactive');
var printInactive = document.querySelectorAll('.print_inactive');
var funInactive = document.querySelectorAll('.fun_inactive');

// var treeSwap = document.getElementById('treehouse_swap');



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
// overlyStart.addEventListener('click', function () {
//       document.getElementById("myNav").style.height = "100%";
//  });

 overlyStart.addEventListener('click', function () {
     if (document.getElementById("myNav").style.height = "0%") {
       document.getElementById("myNav").style.height = "100%";
     } else if (document.getElementById("myNav").style.height = "100%") {
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

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    accessibility: true,
    arrows: false,
    dots: false,
    infinite: false,
    autoplaySpeed: 7500,
    speed: 3000,
    slidesToShow: 1
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



//------------------------------------------------- switch Position Treehouse

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





//---------------------------------------------------- switch Position Logos

for (var i = 0; i < logosInactive.length; i++) {
  logosInactive[i].index = i;
  logosInactive[i].addEventListener("click", function(e){
    var activate = event.target;
    var activatePar = activate.parentNode;
    var siblingsMe = activatePar.children;
     for (var i = 0; i < logosInactive.length; i++) {
        // var allChildren = activatePar.parentNode.children;
        var logoChildren = logosInactive[i].children;
        var number = i+1;
        var indexString = number.toString();
        activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
        logosInactive[i].setAttribute("class", ["inactive_space logo_inactive col"]+[indexString]);
        activatePar.parentNode.firstChild.className = "active_space";
        logoChildren[0].style.display = "flex";
        logoChildren[1].style.display = "flex";
        logoChildren[2].style.display = "none";
        logoChildren[3].style.display = "none";
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





//--------------------------------------------------- switch Position Print

for (var i = 0; i < printInactive.length; i++) {
  printInactive[i].index = i;
  printInactive[i].addEventListener("click", function(e){
    var activate = event.target;
    var activatePar = activate.parentNode;
    var siblingsMe = activatePar.children;
     for (var i = 0; i < printInactive.length; i++) {
        // var allChildren = activatePar.parentNode.children;
        var printChildren = printInactive[i].children;
        var number = i+1;
        var indexString = number.toString();
        activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
        printInactive[i].setAttribute("class", ["inactive_space print_inactive col"]+[indexString]);
        activatePar.parentNode.firstChild.className = "active_space";
        printChildren[0].style.display = "flex";
        printChildren[1].style.display = "flex";
        printChildren[2].style.display = "none";
        printChildren[3].style.display = "none";
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

//-------------------------------------------------------- switch Position Fun

for (var i = 0; i < funInactive.length; i++) {
  funInactive[i].index = i;
  funInactive[i].addEventListener("click", function(e){
    var activate = event.target;
    var activatePar = activate.parentNode;
    var siblingsMe = activatePar.children;
     for (var i = 0; i < funInactive.length; i++) {
        // var allChildren = activatePar.parentNode.children;
        var funChildren = funInactive[i].children;
        var number = i+1;
        var indexString = number.toString();
        activatePar.parentNode.insertBefore(activatePar,activatePar.parentNode.firstChild);
        funInactive[i].setAttribute("class", ["inactive_space fun_inactive col"]+[indexString]);
        activatePar.parentNode.firstChild.className = "active_space";
        funChildren[0].style.display = "flex";
        funChildren[1].style.display = "flex";
        funChildren[2].style.display = "none";
        funChildren[3].style.display = "none";
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


//-------------------------------------------------------- Charts

Chart.defaults.global.legend.display = false;

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 0

        }]
    },
    options: {
      scales: {
          xAxes: [{
              gridLines: {
                  display: false
              }
          }],
          yAxes: [{
              gridLines: {
                  display: false
              }
          }]
      }
    }
});



// elOne.addEventListener('click', function(){
//   elOne.parentNode.insertBefore(elOne,elOne.parentNode.firstChild);
//   elOne.className = "active_space placeholder_sizea_main";
//   elTwo.className = "inactive_space placeholder_size_sec";
//     // $("#element1").before($("#element2"));
// });

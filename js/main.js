var mn = $(".main-nav");
    mnh = $(".main-nav").height();
    mns = "main-nav-scrolled";
    // hdr = $('header').height();

var myNav = document.getElementById("myNav");
var overlyStart = document.getElementById("overlay-nav");
var closeNav = document.getElementById('close_Nav');
var navLi = document.querySelectorAll('.navLi');
var mainNav = document.getElementById("main-nav");
var ulLarge = document.getElementById("nav_size_L");
var navLi = document.getElementsByClassName('navLi');

var hideText = document.querySelectorAll('.hide_text');
var revialText = document.querySelectorAll('.revial_Text');



//---------------------------------------- Nav Media query




// $(document).ready(function(){
//   if (window.matchMedia("(min-width: 1024px)").matches) {
//       // The browser window is at least 480px wide
//         $(overlyStart).addClass( "hide" );
//   }
//   else {
//       $(ulLarge).addClass( "hide" );
//       // The browser window is less than 480px wide
//   }
//
// });



//---------------------------------------- Nav Scroll to


for (var i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener("click", function(event){
       event.preventDefault;
       $("html, body").animate({
         scrollTop: $(this.getAttribute("href")).offset().top -mnh}, 1000);
       });
}

var myLogo = document.getElementsByClassName('DB Logo');
var carTop = document.getElementById('carousel_top');

for (var i = 0; i < myLogo.length; i++) {
  myLogo[i].addEventListener("click", function(event){
       event.preventDefault;
       $("html, body").animate({
         scrollTop: $(carTop)});
       });
}





//---------------------------------------- Sticky Nav


function header_sticky() {
   if( $(this).scrollTop() >  $('header').height() ) {
     mn.addClass(mns);
    myNav.className = "overlay showMe nav_height_top";
   } else {
     mn.removeClass(mns);
     myNav.className = "overlay showMe";
   }
}
 document.addEventListener('scroll', header_sticky);
 window.addEventListener("resize", header_sticky);



//---------------------------------------- Nav Overlay


 overlyStart.addEventListener('click', function () {
     if (document.getElementById("myNav").className == "overlay showMe") {
       document.getElementById("myNav").classList.add("active_text");
     } else if (document.getElementById("myNav").className == "overlay showMe nav_height_top"){
      document.getElementById("myNav").classList.add("active_text");
    } else {
      document.getElementById("myNav").classList.remove("active_text");
    }
  });




/* Close */
closeNav.addEventListener('click', function () {
    document.getElementById("myNav").classList.remove("active_text");
});


for (var i = 0; i < navLi.length; i++) {
  navLi[i].index = i;
  navLi[i].addEventListener("click", function(event){
    var activate = event.target;
     for (var i = 0; i < navLi.length; i++) {
           document.getElementById("myNav").classList.remove("active_text");
     }
  });
}

//---------------------------------------- Multiline toggle


var arrowText = document.querySelectorAll('.arrow_text');

for (var i = 0; i < revialText.length; i++) {
  revialText[i].index = i;
  revialText[i].addEventListener("click", function(event){
      //  var hiddenText = hideText[this.index];
       var panel = this.nextElementSibling;
       if (panel.className === "hide_text showMe"){
         panel.classList.add("active_text");
         arrowText[this.index].classList.add("hide");
       } else {
         panel.classList.remove("active_text");
       }

     });
}

for (var i = 0; i < hideText.length; i++) {
  hideText[i].index = i;
  hideText[i].addEventListener("click", function(event){

       hideText[this.index].classList.remove("active_text");
       arrowText[this.index].classList.remove("hide");
     });
}



var entry = document.getElementsByClassName('entry');

var button = document.getElementsByClassName('button');

for (var i = 0; i < button.length; i++) {
  button[i].index = i;
  button[i].addEventListener("click", function(event){
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
  buttonL[i].addEventListener("click", function(event){
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
  buttonP[i].addEventListener("click", function(event){
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
  buttonF[i].addEventListener("click", function(event){
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



//---------------------------- Charts


var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function(direction) {
    var bar_animation = document.getElementsByClassName('bar_animation');
    for (var i = 0; i < bar_animation.length; i++) {
      bar_animation[i].classList.add("active_bar");
    }
  },
  offset: '75%'
});


//---------------------------------------- Lightbox

$('.light_it').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: false,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}

	});

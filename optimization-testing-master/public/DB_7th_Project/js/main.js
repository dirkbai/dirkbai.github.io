document.addEventListener("DOMContentLoaded", () => {

$('video').mediaelementplayer({
       features: ['playpause','progress','fullscreen','volume'],
       startLanguage: 'en',
       stretching: 'responsive'
     });



  const vidi = document.getElementById("video");
  const startingTime = [
                        0.1, 4.130, 7.535, 11.270, 13.960, 17.940, 22.370, 26.880,
                        32.100, 34.730, 39.430, 42.350, 46.300, 49.270, 53.760, 57.780
                        ];
  const allSpan = document.querySelectorAll(".captions span");
  var index = 0;

  vidi.addEventListener('timeupdate', function(){
      if (startingTime[index] <= vidi.currentTime) {
          for (var i = 0; i < allSpan.length; i++) {
            allSpan[i].classList.remove('orange');
          }
          document.querySelector('#c' + index).classList.add('orange');
          index++;
      }
    });

    $(allSpan).click(function(e) {
       e.preventDefault();
       for (var i = 0; i < allSpan.length; i++) {
         allSpan[i].classList.remove('orange');
       }
       index = $(this).attr('data-info');
       vidi.currentTime = startingTime[index];
       allSpan[index].classList.add('orange');
       vidi.play();

     });

});

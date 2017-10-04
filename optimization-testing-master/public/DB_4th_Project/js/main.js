$('.Photos_wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
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

	$(document).ready(function(){
    $("#Search").keyup(function(){
			var seek = $(this).val();
			var filter = seek.toUpperCase();
			    $(".Photos_wrapper a").each(function(){
						var captions = $(this).attr('title');
						var captionUp = captions.toUpperCase();
            if (captionUp.search(filter) < 0) {
                $(this).hide(600);
            } else {
                $(this).show(600);
            }
        });
    });
});

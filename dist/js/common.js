$(document).ready(function() {

	function masonryMy() {
		var $containerMy = $(".masonry-container");
			$containerMy.imagesLoaded( function() {
					$containerMy.masonry( {
					singleMode: true, 
					columnWidth: ".item-m",
					itemSelector: ".item-m"
				});
				
		});
	}


//.masonry('reloadItems')




	$('.how-works__carusel .owl-carousel').owlCarousel({
			loop:true,
			navText: ['<div class="owl-carousel-control left"></div>', '<div class="owl-carousel-control right"></div>'],
			nav:true,
			items: 1,
			slideBy: 3
	})

$(".btn-search").on('click', function() {
		seerchMy();
		masonryMy();
});

$('.input-search').keypress(function(e) {
		if (e.which == 7) {
			seerchMy();
			masonryMy();
		}
});

	function seerchMy() {
		var searchMyInput = $('.input-search').val();
			if (!searchMyInput){
				searchMyInput = "world";
			}
		 var URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent(searchMyInput);
			$.getJSON(URL, function(data) {
					$('.conclusion-search').empty();
					data.hits.splice(10);
					$('.masonry-container').html("");
					if (parseInt(data.totalHits) > 0)
							$.each(data.hits, function(i, hit) {
									$('.masonry-container').append('<div class="item-m"><img src="' + hit.previewURL + '" alt="' + hit.tags + '"><span>' + hit.tags + '</span></div>');
							});
					else
							$('.masonry-container').append('<p>Простите, мы не смогли найти совпадений.</p>');
				$('.input-search').val("");
			});
	}

seerchMy();
masonryMy();

});



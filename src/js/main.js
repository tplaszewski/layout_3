// jQuery
$(window).load(function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({'overflow':'visible'});
            });

//$( document ).ready(function() {
//	var $container = jQuery('#masonry-grid');
//	// initialize
//	$container.masonry({
//        itemSelector: '.grid-item',
//        columnWidth: 1
//	});
//});


$(document).ready(function(){
        $('.about').each(function(){              
            var highestBox = 0;
            $('.equal_height .box', this).each(function(){           
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });            
            $('.equal_height .box',this).height(highestBox);  
    });    
});


$(document).ready(function(){
    wow = new WOW(
              {
                animateClass: 'animated',
                offset:       100,
                callback:     function(box) {
                  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
              }
            );
            wow.init();
    
});


jQuery(document).ready(function( $ ) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
            });

window.onload = function () {
            var styles = [ { "featureType": "water", "stylers": [ { "color": "#354148" } ] },{ "featureType": "landscape.man_made", "stylers": [ { "color": "#303c42" } ] },{ "featureType": "landscape.natural", "stylers": [ { "color": "#303c42" } ] },{ "featureType": "road", "stylers": [ { "color": "#333f45" } ] },{ "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#333f45" } ] },{ },{ "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" } ] },{ } ];

        var options = {
            mapTypeControlOptions: {
                mapTypeIds: ['Styled']
            },
            center: new google.maps.LatLng(-25.463, 128.044),
            zoom: 8,
            disableDefaultUI: true,	
            mapTypeId: 'Styled'
        };
        var div = document.getElementById('map');
    
        var map = new google.maps.Map(div, options, marker, myLatLng);
    
        var myLatLng = {lat: -25.363, lng: 131.044};
        var image = 'img/marker.png';

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
          });
    
        marker.setMap(map);

        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
        }


jQuery(function(){jQuery("img").load(function(){jQuery("#masonry-grid").masonry()}),jQuery("#masonry-grid").masonry({itemSelector:".grid-item",isResizable:"true"})})

 $(document).ready(function() {
                $(".fancybox").fancybox();
            });


$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

$(document).ready(function() { 
    
    
      $("#slider-top").owlCarousel({
        autoPlay : 3000,
        navigation:true,
        paginationSpeed : 400,
        singleItem : true,
      });
  
    $("#slider-testimonials").owlCarousel({     
      //navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
  }); 
    
});

$('.parallax-section').parallax({
    speed : 0.15
});

/* hide menu */
$('.nav a').on('click', function(){
    $('.navbar-toggle').click(); 
});


/*scroll height */

$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var top_offset = 0;
				if ( $('.navbar').css('position') == 'fixed' ) {
					top_offset = $('.navbar').height();
				}
				 $('html,body').animate({
					 scrollTop: target.offset().top - top_offset
				}, 1000);
				return false;
			}
		}
	});	
	});

$( document ).ready(function() {
	smoothScrollEnable();
	toggleMapScrollOnClickAndLeave();

	var heroBottom = $('#hero').height();
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    var stop = Math.round($(window).scrollTop());

	    if (stop > heroBottom) {
	        $('#nav-secondary').fadeIn();
	    } else {
	        $('#nav-secondary').fadeOut();
	    }

	});	

});


function smoothScrollEnable() {
	$('a[href*=\\#]').on('click', function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	return;
}

function toggleMapScrollOnClickAndLeave() {
	$('#about-location-map').click(function () {
		$('#about-location-map iframe').css("pointer-events", "auto");
	});

	$( "#about-location-map" ).mouseleave(function() {
		$('#about-location-map iframe').css("pointer-events", "none"); 
	});
}
$( document ).ready(function() {
	smoothScrollEnable();
});


function smoothScrollEnable() {
	$('a[href*=\\#]').on('click', function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	return;
}
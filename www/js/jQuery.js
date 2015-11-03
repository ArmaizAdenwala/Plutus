$( window ).load(function() {
		$(".rippleEffect").css({"opacity": "0"});
	setTimeout(function(){
		jQuery(".rippleEffect").addClass("ripple");
	setTimeout(function(){
    Materialize.showStaggeredList('#staggered-test');
    Materialize.showStaggeredList('#notificationAnimation');
}, 0);
		
	setTimeout(function(){
	$(".ripple").css({"opacity": "1"});
    jQuery(".ripple").removeClass("ripple");
}, 2500);
}, 200);
	/*var size = 1000;

    $(window).scroll(function
(){
		size = size - 1;
         $("#profile").css({"width": 'calc(80% - size)'});
    });*/
	$( ".addToCart" ).click(function() {
	Materialize.toast('Added to cart', 1500); 
	navigator.notification.vibrate(200);
	
	});
var star = false;	
	document.getElementById("star").onmousedown = function () {

	if(star){
		$("#star").css({"color": "white"});
		star = false;
	}
	else {
		$("#star").css({"color": "yellow"});
		star = true;
	}
	navigator.notification.vibrate(200);
	
	}
});

	

$(document).ready(function(){
	//Let's start by setting up some variables
	var speed = 500;            // Speed for the Fade in and Fade out effects
	var autoswitch = true;      // Auto slider option
	var autoswitch_speed = 4000; // Speed for the auto slider 

	// Here we'll add the initial active class
	$('.slide').first().addClass('active');

	// Next we'll hide all slides
	$('.slide').hide();

	// Next we'll show the first slide only
	$('.active').show();

	// This will be the next handler
	$('#next').on('click', nextSlide);

	// This will be the previous handler
	$('#prev').on('click', prevSlide);

	// This is the Auto slider handler
	if(autoswitch == true) {
		setInterval(nextSlide, autoswitch_speed);
	}

	// Here we'll create a function that will switch to the next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	// Here we'll create a new function that will switch to the previous slide
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
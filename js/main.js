$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
let aboutUsBtn = document.querySelector('#Layer_1 path');
let aboutDsgnBtn = document.querySelector('#Layer_2 path');
            let text1 = document.querySelector('.aboutus p');
            let text2 = document.querySelector('.aboutdesigners p');

            aboutUsBtn.addEventListener('click',function(){
                text1.classList.remove('fadeout');
                text1.classList.add('fadein');
                if(text2.className =='fadein'){
                text2.classList.remove('fadein');
                text2.classList.add('fadeout');}
            });
            aboutDsgnBtn.addEventListener('click',function(){
                text2.classList.remove('fadeout');
                text2.classList.add('fadein');
                if(text1.className == 'fadein'){
                text1.classList.remove('fadein');
                text1.classList.add('fadeout');}
            });

         // Grab a handle to the video
        var video = document.getElementById("bgvid");
   // Turn off the default controls
        video.controls = false;

       function togglePlayPause() {
 var playpause = document.getElementById("playpause");
   if (video.paused || video.ended) {
      playpause.title = "pause";
      playpause.innerHTML = "pause";
      video.play();
   }
   else {
      playpause.title = "play";
      playpause.innerHTML = "play";
      video.pause();
   }
}
// Grab a handle to the video
        var video2 = document.getElementById("main");
   // Turn off the default controls
        video.controls = false;

       function togglePlayPause2() {
 var playpause = document.getElementById("playpause2");
   if (video2.paused || video2.ended) {
      playpause.title = "pause";
      playpause.innerHTML = "pause";
      video2.play();
   }
   else {
      playpause.title = "play";
      playpause.innerHTML = "play";
      video2.pause();
   }
};


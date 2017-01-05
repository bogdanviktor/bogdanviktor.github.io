(function($){
	'use strict';

/* --------------------------------------------------
	Initialization
-------------------------------------------------- */

    // Initialize all functions when the document is ready.
	$(document).ready(function(){
        initNavbar();
		initScroller();
		//initCountCirc();	//not in use BV 12.10.2016
		//initCountCircMin(); //not in use BV 12.10.2016
		initCountNbr();
		initCountMin();
		initSliders();
		//initGallery(); //not in use BV 12.10.2016
		initAnimation();  //not sure BV 12.10.2016
		//initVideoBg();  //put after init BV 12.10.2016
		//initKenburns(); //not in use BV 12.10.2016
		//initCountdown(); //not in use BV 12.10.2016
		
		initScrollMagic();
		// Parallax disabled for mobile screens
		if ($(window).width() >= 1260) {
			initParallax();

			if ($.isFunction($(window).stellar) ) { //BV
				$(window).stellar({
					hideDistantElements: false
				});
			}
		}
	});

	// Initialize functions after elements are loaded.
	$(window).load(function() {
				
		$(".clickmark").click(function(){			
			var hrefToGo=$(this).find("a").attr('href');
			window.location.href=hrefToGo;
		});

		$("#popup-holder").click( function() {
			window.location.href = 'index.html';	
		});

		// Preloader
		$('.preloader img').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(350).fadeOut('slow', function(){ loadHangableStuff();});			

		
		initVideoBg(); //was in init but caused too slow page loading. now it seems to be faster (but not in real) BV 12.10.2016

		
		$("#demosubmit").click( function() {
			window.scrollTo(0, 0);
			$("#popup-holder").addClass('visible');
		});
		
		initPortfolio();
		initBlogMasonry();

	});
	
	////BV 03.11.2016 it launches after fadeout done. Hopefully if one of these hangs on that doesn't hang the page load itself (the fader)
	function loadHangableStuff() {
		if ($('#bv-vidcontainer').hasClass('vidcontainer')) {
				$('.vidcontainer').html('<iframe style="max-width: 100%;" src="https://www.youtube.com/embed/ffHr-PLjlqk" frameborder="0" allowfullscreen></iframe>') ;
				$('.vidcontainer').fitVids();
		}
	}

	function initScrollMagic() {
        //code
		if (typeof ScrollMagic == 'undefined') { //BV
			return ;
		}

		   // init controller
            var controller = new ScrollMagic.Controller();
    
	      // build tween
            var truckTween = TweenMax.to("#truck", 0.5, {left: "0"});
			var bikeTween = TweenMax.to("#bike", 0.5, {right: "0"});
			
			
			var cloud1Tween = TweenMax.to("#cloud1", 0.5, {left: "20%"});
			var cloud2Tween = TweenMax.to("#cloud2", 0.5, {right: "0px"});
		//	var cloud3Tween = TweenMax.to("#cloud3", 0.5, {left: +"300"});
			
  
            // build scene
            var truckScene = new ScrollMagic.Scene({triggerElement: "#trigger", offset:0, duration: 1000})
                            .setTween(truckTween)
                           // .addIndicators() // add indicators (requires plugin)
                            .addTo(controller)
							.on("update", function (e) {
								if (e.target.controller().info("scrollDirection")=="REVERSE") {
                                   $("#truck").addClass('flipped');
                                }else{
									$("#truck").removeClass('flipped');
								}
							});
							
							
			 var bikeScene = new ScrollMagic.Scene({triggerElement: "#trigger", offset:0, duration: 1000})
                            .setTween(bikeTween)
                          //  .addIndicators() // add indicators (requires plugin)
                            .addTo(controller)
							.on("update", function (e) {
								if (e.target.controller().info("scrollDirection")=="REVERSE") {
                                   $("#bike").addClass('flipped');
                                }else{
									$("#bike").removeClass('flipped');
								}
							});
							
			 var c1Scene = new ScrollMagic.Scene({triggerElement: "#trigger", offset:0, duration: 1000})
                            .setTween(cloud1Tween)
                            .addTo(controller);
							
			var c2Scene = new ScrollMagic.Scene({triggerElement: "#trigger", offset:0, duration: 1000})
                            .setTween(cloud2Tween)
                            .addTo(controller);
		
		
		
		
		
		/*					
			var c3Scene = new ScrollMagic.Scene({triggerElement: "#trigger", offset:500, duration: 800})
                            .setTween(cloud3Tween)
                            .addTo(controller);
							
		*/					
							
			
							
							
								
	
		
			var planeTween = TweenMax.to("#plane", 0.5, {right: "-300px"});
            var planeScene = new ScrollMagic.Scene({triggerElement: "#trigger2", offset:-400, duration: 650})
                            .setTween(planeTween)
                       //     .addIndicators() // add indicators (requires plugin)
                            .addTo(controller)
							.on("update", function (e) {
								
								if (e.target.controller().info("scrollDirection")=="REVERSE") {
                                   $("#plane").addClass('flipped');
                                }else{
									$("#plane").removeClass('flipped');
								}
							});
							
							
							
			var shipScene = new ScrollMagic.Scene({triggerElement: "#trigger3",offset:-30})
					// trigger animation by adding a css class
					.setClassToggle("#ship", "moving")
					//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);
					
					
			/*		
			var trainTween = TweenMax.to("#train", 0.5, {left: "-600px"});
            var trainScene = new ScrollMagic.Scene({triggerElement: "#train_trigger", offset:-500, duration: 1100})
                            .setTween(trainTween)
                         //   .addIndicators() // add indicators (requires plugin)
                            .addTo(controller)
							.on("update", function (e) {
								if (e.target.controller().info("scrollDirection")=="REVERSE") {
                                   $("#train").addClass('flipped');
                                }else{
									$("#train").removeClass('flipped');
								}
							});
							
			*/
			
			
			var b1 = TweenMax.to("#biker1", 0.5, {right: "0px"});
			var b2 = TweenMax.to("#biker2", 0.5, {left: "0px"});
			
			var biker1Scene = new ScrollMagic.Scene({triggerElement: "#train_trigger", offset:-350, duration: 1100})
                            .setTween(b1)
                            .addTo(controller)
							.on("update", function (e) {
								if (e.target.controller().info("scrollDirection")=="REVERSE") {
                                   $("#biker1").addClass('flipped');
                                }else{
									$("#biker1").removeClass('flipped');
								}
							});
							
							
							
			var biker2Scene = new ScrollMagic.Scene({triggerElement: "#train_trigger", offset:-350, duration: 1100})
                            .setTween(b2)
                            .addTo(controller)
							.on("update", function (e) {
								if (e.target.controller().info("scrollDirection")=="REVERSE") {
                                   $("#biker2").addClass('flipped');
                                }else{
									$("#biker2").removeClass('flipped');
								}
							});				
			
			
			
	}
	
	
	
	

/* --------------------------------------------------
	Navigation | Navbar
-------------------------------------------------- */
	
	function initNavbar(){

		// Sticky Nav & Transparent Background
		$(window).scroll(function(){
			if ($(window).scrollTop() > 20) {
				
				$('nav').removeClass('navbar-trans', 300);
				$('nav').removeClass('navbar-trans-dark');
//				$('nav').addClass('navbar-small', 300);
			}
			else {
				$('nav:not(.mobile-nav):not(.investor)').addClass('navbar-trans', 300);
//				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
					$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');

		});

		
		// Nav on mobile screens
		$(window).resize(function() {
	        if ($(window).width() <= 1259) {
				$('nav').addClass('mobile-nav');		        
		    } else {
		    	$('nav').removeClass('mobile-nav');
		    }

    		if ($('nav').hasClass('mobile-nav')) {
    			$('nav').removeClass('navbar-trans');
    			$('nav').removeClass('navbar-trans-dark');
    		} else {
    			if ($(window).width() >= 1259 && $(window).top) {
    				$('nav').addClass('navbar-trans');
    			}
    		}

    		// Remove dropdown open on hover for small screens
    		if ($('nav').hasClass('mobile-nav')) {

    			$('.dropdown-toggle').on('mouseover', function(e){    
    			        e.preventDefault();

    			        $('.dropdown').removeClass('open');

    			    e.stopPropagation();
    			});
    		}

    		// Close mobile menu when clicked link
    		// var isNotDropdown = $('nav:not(.mobile-nav)');

    		if (!$('.nav a').hasClass('dropdown-toggle')) {

    			$('.nav a').on('click', function(){ 
			        if($('.navbar-toggle').css('display') !='none'){
			            $(".navbar-toggle").trigger( "click" );
			        }
			    });

    		}

	    }).resize();

		// Bugfix for iOS not scrolling on open menu
	    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });


	} // initNavbar



/* --------------------------------------------------
	Scroll Nav
-------------------------------------------------- */

	function initScroller () {
		if (typeof $('#navbar') !== 'undefined' && $.isFunction($('#navbar').localScroll) ) { //BV 
			$('#navbar').localScroll({
				easing: 'easeInOutExpo'
			});
		}

		if (typeof $('#page-top') !== 'undefined' && $.isFunction($('#page-top').localScroll) ) { //BV 
			$('#page-top').localScroll({
				easing: 'easeInOutExpo'
			});	
		}
	} // initScroller




/* --------------------------------------------------
	Parallax
-------------------------------------------------- */

	
	function initParallax () {

		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

		if (!isSafari) {
			if (typeof $('.main-op') !== 'undefined' && $.isFunction($('.main-op').parallax) ) { $(".main-op").parallax("50%", 0.2); }
			if (typeof $('.number-counters') !== 'undefined' && $.isFunction($('.number-counters').parallax) ) { $(".number-counters").parallax("50%", 0.2); }
			if (typeof $('.cirlce-counters') !== 'undefined' && $.isFunction($('.cirlce-counters').parallax) ) { $(".cirlce-counters").parallax("50%", 0.3); }
			if (typeof $('.client-list-parallax') !== 'undefined' && $.isFunction($('.client-list-parallax').parallax) ) { $(".client-list-parallax").parallax("50%", 0.4); }
			if (typeof $('.ft-slider-parallax') !== 'undefined' && $.isFunction($('.ft-slider-parallax').parallax) ) { $(".ft-slider-parallax").parallax("50%", 0.4);}
			if (typeof $('.testimonials-parallax') !== 'undefined' && $.isFunction($('.testimonials-parallax').parallax) ) { $(".testimonials-parallax").parallax("50%", 0.4); }
			if (typeof $('.twitter-slider') !== 'undefined' && $.isFunction($('.twitter-slider').parallax) ) { $(".twitter-slider").parallax("50%", 0.4); }
			if (typeof $('.login-2') !== 'undefined' && $.isFunction($('.login-2').parallax) ) { $(".login-2").parallax("50%", 0.2); }
		}		
	}



/* --------------------------------------------------
	Counters Circles
-------------------------------------------------- */

	function initCountCirc() {
		
		var hasCircles = $('#skillsCircles').hasClass('circles-counters');

		if (hasCircles) {

			var waypoint = new Waypoint({
			  element: document.getElementById('skillsCircles'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					
					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
					    barColor: '#f8f8f8',
					    scaleColor: false,
					    easing: 'easeOutBack',
					    animate: {
					    	duration: 1600,
					    	enabled: true 
					    }
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc



	function initCountCircMin() {
		
		var hasCircles = $('#skillsCirclesMin').hasClass('circles-counters-dark-bg');

		if (hasCircles) {

			var waypoint = new Waypoint({
			  element: document.getElementById('skillsCirclesMin'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					
					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
					    barColor: '#f8f8f8',
					    scaleColor: false,
					    easing: 'easeOutBack',
					    animate: {
					    	duration: 1600,
					    	enabled: true 
					    }
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc




/* --------------------------------------------------
	Number Counters
-------------------------------------------------- */

	function initCountNbr () {

		var hasCounters = $('#counters').hasClass('count-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters'),
			  handler: function() {

			    	var options = {
						useEasing : true,
						useGrouping : true, 
						separator : ','
					};
					// Counter 1
					var counter1 = new CountUp('count-1', 0, 2, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-2', 0, 8, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-3', 0, 591, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-4', 0, 32294, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}
		

	} // initCountNbr



	function initCountMin () {

		var hasCounters = $('#counters-min').hasClass('nbr-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters-min'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					// Counter 1
					var counter1 = new CountUp('count-min-1', 0, 675, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-min-2', 0, 1457, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-min-3', 0, 471, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-min-4', 0, 753, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}
		

	} // initCountMin



/* --------------------------------------------------
	Sliders
-------------------------------------------------- */
	
	function initSliders() {

		//All typeof cons are by BV
		// Features Slider
		if (typeof $('.ft-slider') !== 'undefined' && $.isFunction($('.ft-slider').slick) ) {
			$('.ft-slider').slick({
				autoplay: true,
				autoplaySpeed: 4000,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="info-slider-nav slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="info-slider-nav slick-next"><i class="fa fa-long-arrow-right"></i></button>',
				responsive: [
					{
					  breakpoint: 999,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
					  }
					},
					{
					  breakpoint: 770,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
				  ]
			});
		}

		// Testimonials Sliders
		if (typeof $('.t-slider') !== 'undefined' && $.isFunction($('.t-slider').slick) ) {
			$('.t-slider').slick({
				autoplay: false,
				autoplaySpeed: 4000,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="t-slider-nav slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="t-slider-nav slick-next"><span class="linea-arrows-slim-right"></span></button>',
			});
		}

		// Brands/Clients Slider
		if (typeof $('.clients-slider') !== 'undefined' && $.isFunction($('.clients-slider').slick) ) {
			$('.clients-slider').slick({
				autoplay: true,
				autoplaySpeed: 4000,
				slidesToShow: 5,
				slidesToScroll: 1,
				dots: false,
				arrows: false,
				responsive: [
					{
					  breakpoint: 999,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: true,
					  }
					},
					{
					  breakpoint: 770,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					  }
					},
					{
					  breakpoint: 599,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
				]
			});
		}

		// Portfolio Single Slider
		if (typeof $('.single-img-slider') !== 'undefined' && $.isFunction($('.single-img-slider').slick) ) {
			$('.single-img-slider').slick({
				autoplay: true,
				autoplaySpeed: 4000,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="slider-nav sl-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slider-nav sl-next"><span class="linea-arrows-slim-right"></span></button>',
			});
		}

		// Centered Gallery
		if (typeof $('.centered-gallery') !== 'undefined' && $.isFunction($('.centered-gallery').slick) ) {
			$('.centered-gallery').slick({
				centerMode: true,
				  centerPadding: '60px',
				  slidesToShow: 3,
				  responsive: [
					{
					  breakpoint: 768,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					  }
					}
				  ]
			});
		}

		// Full Screen Hero Slider
		if (typeof $('.fs-slider') !== 'undefined' && $.isFunction($('.fs-slider').slick) ) {
			$('.fs-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				useCSS: true,
				fade: true,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: true,
				autoplaySpeed: 4000,
			});
		}

		// Full Width Hero Slider
		if (typeof $('.fw-slider') !== 'undefined' && $.isFunction($('.fw-slider').slick) ) {
			$('.fw-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: true,
				autoplaySpeed: 4000,
			});
		}
		
		// Text Slider
		if (typeof $('.text-slider') !== 'undefined' && $.isFunction($('.text-slider').slick) ) {
			$('.text-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				speed: 300,
				fade: true,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: true,
				autoplaySpeed: 4000,
			});
		}
	} // initSliders



/* --------------------------------------------------
	Portfolio
-------------------------------------------------- */
	
	function initPortfolio () {

		// Filters
		$('.portfolio-filters a').click(function (e) {
			  e.preventDefault();

			  $('li').removeClass('active');
			  $(this).parent().addClass('active');
		});

		
		// Full Width Gallery (3 columns)
		function pfolio3colFW () {
		
			var $container = $('#pfolio');
			// init
			if (typeof $container !== 'undefined' && $.isFunction($container.isotope) ) { //BV 
				$container.isotope({
					// options
					itemSelector: '.portfolio-item',
				});
			}

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				if (typeof $container !== 'undefined' && $.isFunction($container.isotope) ) { //BV 
					$container.isotope({ filter: filterValue });
				}
			});

		} // fwNogap3col


		function pfolioMasonry () {
			
			var $container = $('.pfolio-items');
			// init
			if (typeof $container !== 'undefined' && $.isFunction($container.isotope) ) { //BV 
				$container.isotope({
					// options
					itemSelector: '.p-item',
					percentPosition: true,
					layoutMode: 'packery',
					masonry: {
					  columnWidth: '.grid-sizer'
					}				
				});
			}

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				if (typeof $container !== 'undefined' && $.isFunction($container.isotope) ) { //BV 
					$container.isotope({ filter: filterValue });
				}
			});

		}


		pfolio3colFW();
		pfolioMasonry();

	} // initPortfolio



/* --------------------------------------------------
	Light Gallery
-------------------------------------------------- */

	function initGallery () {

		// Image Lightbox
		var hasPopup = $('a').hasClass('open-gallery');

		if (hasPopup) {

			$('.open-gallery').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				  }
			});
			
		}

		// Footer Gallery Lightbox
		var hasFtPopup = $('a').hasClass('gallery-widget-lightbox');

		if (hasPopup) {

			$('.gallery-widget-lightbox').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				  }
			});

		}

		// Video Lightbox
		var hasVideoPopup = $('a').hasClass('popup-video');

		if (hasVideoPopup) {

			$('.popup-video').magnificPopup({
	          	disableOn: 700, 
	         	type: 'iframe',
	          	mainClass: 'mfp-fade',
	          	removalDelay: 160,
	          	preloader: false,

	          	fixedContentPos: false
			});

		}

	} // initGallery




/* --------------------------------------------------
	Blog Masonry Layout
-------------------------------------------------- */

	function initBlogMasonry () {

		var $container = $('.blog-container');
			// init
		if (typeof $container !== 'undefined' && $.isFunction($container.isotope) ) { //BV 
			$container.isotope({
				// options
				itemSelector: '.blog-selector',
				percentPosition: true
			});
		}
	}
	



/* --------------------------------------------------
  Contact Pages
-------------------------------------------------- */

	$('.show-map').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $('.show-info-link').toggleClass('info-open');
	});

	$('.show-info-link').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $(this).toggleClass('info-open');
	});



/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		if (typeof WOW !== 'undefined') { //BV
			new WOW().init();
		}

	}




/* --------------------------------------------------
	Video Background
-------------------------------------------------- */

	function initVideoBg () {
		var hasBgVideo = $('#fs-video-one-bg').hasClass('player');
		var hasFwBgVideo = $('#fw-video-one-bg').hasClass('player');
		var hasSecBgVideo = $('#section-video').hasClass('player');

		if (hasBgVideo || hasFwBgVideo || hasSecBgVideo) {
			$('.player').YTPlayer();
			
		}
		

	}



/* --------------------------------------------------
	Ken Burns Slider
-------------------------------------------------- */
	function initKenburns () {
		
		var hasKenburns = $('.kenburn-hero')[0];

		if (hasKenburns) {
			var w_height = $(window).height();
			var w_width = $(window).width();

			$('.kenburns').attr('width', w_width);
			$('.kenburns').attr('height', w_height);
			$('.kenburns').kenburns({
				images: ['http://placehold.it/2440x1578',
						'http://placehold.it/2440x1578/eee/333',
						'http://placehold.it/2440x1578'
						],
				frames_per_second: 30,
				display_time: 5000,
				fade_time: 1000,
				zoom: 1.1,
				background_color:'#000000'
			});
		}

	} // initKenburns



/* --------------------------------------------------
	Coming Soon - Countdown
-------------------------------------------------- */

	function initCountdown () {

		var hasCountdown = $('#cs-timer').hasClass('cs-timer');

		if (hasCountdown) {

			// Add end date here (current: 2016/01/01) from witch the timer will countdown.
			$('#cs-timer').countdown('2016/01/01', function(event) {
			    $(this).html(event.strftime('<div class="item"><span class="nbr-timer">%D</span><span class="title-timer">Days<span></div><div class="item"><span class="nbr-timer">%H</span><span class="title-timer">Hours<span></div><div class="item"><span class="nbr-timer">%M</span><span class="title-timer">Minutes<span></div><div class="item"><span class="nbr-timer">%S</span><span class="title-timer">Seconds<span></div>'));
			  });
		}

	}



})(jQuery);



/* --------------------------------------------------
	Contact Form JS Validation & AJAX call 
-------------------------------------------------- */
$(function() {
//	Regular Expressions
var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
var	expLettersOnly = /^[A-Za-z ]+$/;

//	Checks if a field has the correct length
function validateLength ( fieldValue, minLength ) {
	return ( $.trim( fieldValue ).length > minLength );
}

//	Validate form on typing
$( '.form-ajax' ).on( 'keyup', 'input.validate-locally', function() {
	validateField( $(this) );
});

//	AJAX call

/*
$( '.form-ajax' ).submit(function(e) {
	e.preventDefault();
	
	var $this = $( this ),
			action = $this.attr( 'action' );
	
	alert(action);		
	// The AJAX requrest
	$.post(
			action,
			$this.serialize(),
			function( data ) {
				$( '.ajax-message' ).html( data );
			}
	);
});
*/

//	Validates the fileds
function validateField ( field ) {
	var errorText = "",
			error = false,
			value = field.val(),
			siblings = field.siblings( ".alert-error" );

	// Test the name field
	if ( field.attr("name") === "name" ) {
		if ( !validateLength( value, 2 ) ) {
					error = true;
					errorText += '<i class="fa fa-info-circle"></i> The name is too short!<br>';
					$('input[name="name"]').addClass('input-error');
		} else {
			$('input[name="name"]').removeClass('input-error');
		}

		if ( !expLettersOnly.test( value ) ) {
					error = true;
					errorText += '<i class="fa fa-info-circle"></i> The name can contain only letters and spaces!<br>';
					$('input[name="name"]').addClass('input-error-2');
		} else {
			$('input[name="name"]').removeClass('input-error-2');
		}
	}

	// Test the email field
	if ( field.attr("name") === "email" ) {
		if ( !expEmail.test( value ) ) {
					error = true;
					errorText += '<i class="fa fa-info-circle"></i> Enter correct email address!<br>';
					$('input[name="email"]').addClass('input-error');
		} else {
			$('input[name="email"]').removeClass('input-error');
		}
	}

	// Display the errors
	siblings.html( errorText );

	}

	$('.register1, .register2').click(function() {
		console.log('TESZT');
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      console.log(target);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      console.log(target);
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
  	});

});





/**
 * Középre helyez egy képet, amit megadunk az addImg-el. 
 *
 * A használathoz, minden esetben a képet körülvelő elemet kell megadni. Ennek az elmenek a szélessége és hoszúsága lesz alapulvéve, és ebben középre lesz igatítva.
 *
 * 	// Az objektum, amit használni kell.
 *  var t = new ImgToCenter();
 *  //Hozzá adunk egy elemet.
 *  t.addJqueryObject($('#imgBox'));
 *  //Elindítjuk a process-t, hogy minden egyes elemet középre igazítsunk.
 *  t.allWork();
 *  //Ha ezt meghívjuk, bekapcsoljuk scrollozás figyelését.(még nem kikapcsolható siettem :)
 *  t.resizeMonitioringOn();
 * 
 */
var ImgToCenter = function() {
    this.imgBoxes = [];

    var self = this;
    /**
     * Hozzá adunk egy jquery, objektumot, amiben középre akatunk helyezni egy képet.
     * @param Jquery Object Jquery A cél objektumunk
     */
    this.addJqueryObject = function(Jquery) {
            self.imgBoxes.push(Jquery);
        }
        /**
         * Hozzá adunk egy id-t, objektumot, amiben középre akatunk helyezni egy képet.
         * @param string id Egy id, #-el kell hogy kezdődjön.
         */
    this.addId = function(id) {
            self.addJqueryObject($(id));
        }
        /**
         * Feldolgozzuk az összes meglévő adatot.
         * 
         * @return void
         */
    this.allWork = function() {
        $.each(self.imgBoxes, function(index, val) {
            self.worker(val);
        });
    }


    /**
     * Ez a függvény középre igazít egy képet.
     * @param  Jquery Objectum Jquery Jquery objektum.
     * @return void
     */
    this.worker = function(Jquery) {
        var boxInnerWidth = Jquery.innerWidth();
        var boxInnerHeight = Jquery.outerHeight();

        var Img = Jquery.children('img');
        var imgWidth = Img.width();
        var imgHeight = Img.height();

        //console.log(imgWidth);
		console.log(boxInnerHeight);
        
        var left = (boxInnerWidth - imgWidth) / 2;
        var top = ((boxInnerHeight - imgHeight) / 2 )-50;

		var btnPosTop = (top + Img.outerHeight());
		var btnPosLeft = (boxInnerWidth - $('.biggerbutton').innerWidth()) / 2;

		$('.biggerbutton').css({ top: btnPosTop, left: btnPosLeft, position: "absolute"});

        Img.css({ top: top, left: left, position: "absolute" });

    }

    /**
     * Bekapcsoljuk, hogy az algoritums figyelje, átméretezük az oldalt.
     * 
     * @return void
     */
    this.resizeMonitioringOn = function() {
        $(window).resize(function() {
            self.allWork();
        });
    }
};


$(window).bind('load', function(){
    // Az objektum, amit használni kell.
    var t = new ImgToCenter();
    //Hozzá adunk egy elemet.
    t.addJqueryObject($('.hero-content'));
    //Elindítjuk a process-t, hogy minden egyes elemet középre igazítsunk.
    t.allWork();
    //Ha ezt meghívjuk, bekapcsoljuk scrollozás figyelését.
    t.resizeMonitioringOn();
});

	<!-- BV -->
	//
	$('input[name^=newsletter]').on('keypress', function (e) {
         if(e.which === 13){
			$('#newsletter-top').trigger("click") ;
			return false ;
         }
	});
	<!-- BV END -->

	function postNewsLetter(f) {
		var post = {
			"async": true,
			"crossDomain": true,
			"url": "https://yojee-webforms.herokuapp.com/api/newsletter",
			"method": "POST",
			"data": $("#newsletter_form").serialize(),
		}
		$.ajax(post).done(function(response) {
			if (f != null) {
				f(response);
			}
		});
	};

	function postNewsLetter2(f) {
		var post = {
			"async": true,
			"crossDomain": true,
			"url": "https://yojee-webforms.herokuapp.com/api/newsletter",
			"method": "POST",
			"data": $("#newsletter_form_2").serialize(),
		}
		$.ajax(post).done(function(response) {
			if (f != null) {
				f(response);
			}
		});
	};

	$("#newsletter-top").on('click', function() {
		var post = {
			"async": true,
			"crossDomain": true,
			"url": "https://yojee-webforms.herokuapp.com/api/newsletter",
			"method": "POST",
			"data": $("#newsletter_form").serialize(),
		};
		$.ajax(post).done(function(response) {
			if (response.code == 0) {
				window.scrollTo(0, 0);
				alert('Thank you!');
			} else {
				alert(response.msg);
			}
		});
	});

	$("#newsletter-bottom").on('click', function() {
		var post = {
			"async": true,
			"crossDomain": true,
			"url": "https://yojee-webforms.herokuapp.com/api/newsletter",
			"method": "POST",
			"data": $("#newsletter_form_2").serialize(),
		};
		$.ajax(post).done(function(response) {
			if (response.code == 0) {
				window.scrollTo(0, 0);
				alert('Thank you!');
			} else {
				alert(response.msg);
			}
		});
	});

	$("#newsletter_form").submit(function() {
		postNewsLetter(function(response) {
			if (response.code == 0) {
				$("#newsletter_form").hide();
				$("#ty").show();
				$("#newsletter_form_2").hide();
				$("#ty-2").show();
			} else {
				alert(response.msg);
			}
		});
	});

	$("#newsletter_form_2").submit(function() {
		postNewsLetter2(function(response) {
			if (response.code == 0) {
				$("#newsletter_form").hide();
				$("#ty").show();
				$("#newsletter_form_2").hide();
				$("#ty-2").show();
			} else {
				alert(response.msg);
			}
		});
	});

    <!-- Google Analytics Tracking Code -->

	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-75173327-1', 'auto');
	ga('send', 'pageview');

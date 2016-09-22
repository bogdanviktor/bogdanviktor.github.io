<!doctype html>

<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Yojee - Edit Blog Post</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Favicon -->
        <link rel="shortcut icon" href="favicon.ico">
        <!-- Bootstrap -->
        <link rel="stylesheet" href="assets/styles/vendor/bootstrap.min.css">
        <!-- Fonts -->
        <link rel="stylesheet" href="assets/fonts/et-lineicons/css/style.min.css">
        <link rel="stylesheet" href="assets/fonts/linea-font/css/linea-font.min.css">
        <link rel="stylesheet" href="assets/fonts/fontawesome/css/font-awesome.min.css">
        <!-- Slider -->
        <link rel="stylesheet" href="assets/styles/vendor/slick.min.css">
        <!-- Lightbox -->
        <link rel="stylesheet" href="assets/styles/vendor/magnific-popup.min.css">
        <!-- Animate.css -->
        <link rel="stylesheet" href="assets/styles/vendor/animate.min.css">


        <!-- Definity CSS -->
        <link rel="stylesheet" href="assets/styles/main.css">
        <link rel="stylesheet" href="assets/styles/responsive.css">

		<!-- Yojee CSS -->
		<link rel="stylesheet" href="assets/styles/yojee.css"> <!-- BV -->

        <!-- JS -->
        <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body id="page-top">
           
        
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->



        <!-- ========== Preloader ========== -->

        <div class="preloader">
          <img src="assets/images/loader.svg" alt="Loading...">
        </div>


        
    <!-- ========== Navigation ========== -->

    <nav class="navbar navbar-default navbar-fixed-top  navbar-fw investor" role="navigation">
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
            <!-- Logo -->
            <a class="navbar-brand" href="index.html"><img class="navbar-logo" src="assets/images/logo.png" alt="Yojee - Logo" height="50" /></a>
        </div>

        <!-- Navbar Links -->
        <div id="navbar" class="navbar-collapse collapse page-scroll navbar-right">
            <ul class="nav navbar-nav">
                <li><a href="index.html">Home<span class="sr-only"></span></a></li>
				<li><a href="investors.html">investors<span class="sr-only"></span></a></li>
		        <li class="active"><a href="blog-right-sidebar.html">blog<span class="sr-only"></span></a></li>
                <li><a href="contact.html">contact us<span class="sr-only"></span></a></li>
                <li>
                    <form action="https://yojee-webforms.herokuapp.com/api/newsletter" method="post" id="newsletter_form">
                        <div class="form-group">
                            <input type="email" name="newsletter[email]" placeholder="JOIN OUR NEWSLETTER" autocomplete="off">
                            <button type="button" id="newsletter-top"><i class="fa fa-send-o"></i></button>
                        </div>
                    </form>
                    <p id="ty" style="display: none">WE&apos;LL KEEP YOU UPDATED</p>
                </li>


            </ul>
            <!-- / .nav .navbar-nav -->
        </div>
        <!--/.navbar-collapse -->
    </nav>
    <!-- / .navbar -->



        <!-- ========== Single Blog Post ========== -->
        
        <div id="blog" class="section container blog-classic">
          <div class="row">

			<header class="sec-heading">
				<h2 class="nunito_bold">BLOG</h2>
				<span class="subheading">EDIT BLOG POST</span>
			</header>

            <div class="col-md-bv mb-sm-160">
              
                <?PHP
					require_once ("dynamic/blog-edit.php") ;
				?>
                

            </div><!-- / .col-md-8 -->



          </div><!-- / .row -->
        </div><!-- / .container -->



    

        <!-- ========== Scripts ========== -->

        <script src="assets/js/vendor/jquery-2.1.4.min.js"></script>
        <script src="assets/js/vendor/google-fonts.js"></script>
        <script src="assets/js/vendor/jquery.easing.js"></script>
        <script src="assets/js/vendor/jquery.waypoints.min.js"></script>
        <script src="assets/js/vendor/bootstrap.min.js"></script>
        <script src="assets/js/vendor/bootstrap-hover-dropdown.min.js"></script>
        <script src="assets/js/vendor/smoothscroll.js"></script>
        <script src="assets/js/vendor/jquery.localScroll.min.js"></script>
        <script src="assets/js/vendor/jquery.scrollTo.min.js"></script>
        <script src="assets/js/vendor/jquery.stellar.min.js"></script>
        <script src="assets/js/vendor/jquery.parallax.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>
        <script src="assets/js/vendor/jquery.easypiechart.min.js"></script>
        <script src="assets/js/vendor/countup.min.js"></script>
        <script src="assets/js/vendor/isotope.min.js"></script>
        <script src="assets/js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/vendor/wow.min.js"></script>

		<!-- BV -->
		<script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>

		<script src="assets/js/vendor/jquery.ajaxchimp.js"></script>
		<script src="assets/js/vendor/animDots.js"></script>

		<script src="assets/js/vendor/ScrollMagic.min.js"></script>
		<script src="assets/js/vendor/animation.gsap.min.js"></script>
		<script src="assets/js/vendor/animation.velocity.min.js"></script>
		
		<script src="assets/js/vendor/jquery.ScrollMagic.min.js"></script>

		<script src="assets/js/vendor/TweenMax.min.js"></script>
		<!-- BV -->

        <!-- Definity JS -->
        <script src="assets/js/main.js"></script>
    </body>
</html>

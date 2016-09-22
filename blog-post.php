<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Yojee - Blog Post</title>
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
				<span class="subheading">LATEST BLOG POSTS</span>
			</header>

            <div class="col-md-8 mb-sm-160">
              
                <?PHP
					require_once ("dynamic/blog-post-body.php") ;
				?>
                

                <!-- ========== Comments ========== -->

                <div class="row">
                  <div class="col-md-12 blog-post-comments">
                    <h4 class="blog-section-title">Comments <span>(4)</span></h4>

                    <!-- Comment 1 -->
                    <div class="bp-comment">
                      <div class="comment-avatar"><i class="fa fa-user"></i></div>
                      <div class="comment-info">
                        <h6 class="comment-name">Stella Hartmann</h6>
                        <span class="comment-time">on June 23,2015, at 22:34</span>
                        <button class="comment-replay-btn"><i class="fa fa-mail-reply-all"></i> Reply</button>
                      </div>
                      <p class="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div><!-- / .bp-comment -->

                    <!-- Replay Comment -->
                    <div class="bp-comment-reply">
                      <div class="comment-avatar"><i class="fa fa-user"></i></div>
                      <div class="comment-info">
                        <h6 class="comment-name">Stella Hartmann</h6>
                        <span class="comment-time">on June 23,2015, at 22:34</span>
                        <button class="comment-replay-btn"><i class="fa fa-mail-reply-all"></i> Reply</button>
                      </div>
                      <p class="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div><!-- / .bp-comment-reply -->
                    
                    <!-- Comment 2 -->
                    <div class="bp-comment">
                      <div class="comment-avatar"><i class="fa fa-user"></i></div>
                      <div class="comment-info">
                        <h6 class="comment-name">Stella Hartmann</h6>
                        <span class="comment-time">on June 23,2015, at 22:34</span>
                        <button class="comment-replay-btn"><i class="fa fa-mail-reply-all"></i> Reply</button>
                      </div>
                      <p class="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div><!-- / .bp-comment -->

                    <!-- Comment 3 -->
                    <div class="bp-comment">
                      <div class="comment-avatar"><i class="fa fa-user"></i></div>
                      <div class="comment-info">
                        <h6 class="comment-name">Stella Hartmann</h6>
                        <span class="comment-time">on June 23,2015, at 22:34</span>
                        <button class="comment-replay-btn"><i class="fa fa-mail-reply-all"></i> Reply</button>
                      </div>
                      <p class="comment-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                    </div><!-- / .bp-comment -->


                    <!-- Leave a comment -->
                    <div class="comment-form">
                      <h4 class="blog-section-title">Leave a comment</h4>

                      <form action="post">
                        <!-- Name -->
                        <div class="col-md-6 form-group no-gap-left">
                          <input type="text" class="form-control" id="inpt-name-forms" placeholder="Enter your name">
                          <label for="inpt-name-forms">Name *</label>
                        </div>
                        
                        <!-- Email -->
                        <div class="col-md-6 form-group no-gap-right">
                          <input type="email" class="form-control" id="inpt-email-forms" placeholder="Enter your email">
                          <label for="inpt-email-forms">Email *</label>
                        </div>
                        
                        <!-- Website -->
                        <div class="col-md-12 form-group no-gap">
                          <input type="url" class="form-control" id="inpt-web-forms" placeholder="http://...">
                          <label for="inpt-name-forms">Website</label>
                        </div>
                        
                        <!-- Comment -->
                        <div class="col-md-12 form-group no-gap">
                          <textarea class="form-control" name="textarea" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
                          <label for="txt-forms">Comment *</label>
                        </div>

                        <input type="submit" value="Send Comment" class="btn pull-right">
                      </form>
                    </div><!-- / .comment-form -->

                  </div><!-- / .blog-post-comments -->
                </div><!-- / .row -->
                
                <!-- Post Navigation -->
                <div class="row">
                  <nav class="blog-post-nav">
                    <a href="#" class="prev-btn">Prev post</a>
                    <a href="#" class="next-btn">Next post</a>
                  </nav>
                </div>

            </div><!-- / .col-md-8 -->



            <!-- ========== Sidebar ========== -->

            <aside class="col-md-offset-1 col-md-3 sidebar">

              <!-- Search - Widget -->
              <div class="col-md-12 ws-s searh-widget">
                <div class="form-group">
                  <input type="search" placeholder="Search ..." class="form-control">
                  <button class="inside-input-btn"><i class="fa fa-search"></i></button>
                </div>
              </div>


              <!-- Tags - Widget -->
              <div class="col-md-12 ws-s tags-widget">
                <h5 class="header-widget">Tags</h5>
                <ul class="tag-list">
                  <li><a href="#">Photography</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">PHP</a></li>
                  <li><a href="#">UI/UX</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">HTML5</a></li>
                  <li><a href="#">CSS3</a></li>
                  <li><a href="#">iOS</a></li>
                </ul>
              </div>
              

              <!-- Recent Posts - Widget -->
              <div class="col-md-12 ws-s recent-posts-widget">
                <h5 class="header-widget">Recent Posts</h5>

                <!-- Item 1 -->
                <div class="widget-item">
                  <a href="#"><h6 class="h-alt">Blog Post Example</h6></a>
                  <span>by <a href="#">Joel Fischer</a> / <a href="#">June 23</a></span>
                </div>

                <!-- Item 2 -->
                <div class="widget-item">
                  <a href="#"><h6 class="h-alt">Another Blog Post Example</h6></a>
                  <span>by <a href="#">Joel Fischer</a> / <a href="#">June 23</a></span>
                </div>

                <!-- Item 3 -->
                <div class="widget-item">
                  <a href="#"><h6 class="h-alt">Blog Post Example</h6></a>
                  <span>by <a href="#">Joel Fischer</a> / <a href="#">June 23</a></span>
                </div>

              </div><!-- / .recent-posts-widget -->


              <!-- Categories - Widget -->
              <div class="col-md-12 ws-s categories-widget">
                <h5 class="header-widget">Categories</h5>

                <!-- Item 1 -->
                <div class="widget-item">
                  <a href="#">Web Design - <span>15</span></a>
                </div>

                <!-- Item 2 -->
                <div class="widget-item">
                  <a href="#">Graphic Design - <span>6</span></a>
                </div>

                <!-- Item 3 -->
                <div class="widget-item">
                  <a href="#">iOS Development - <span>12</span></a>
                </div>

                <!-- Item 4 -->
                <div class="widget-item">
                  <a href="#">Other - <span>3</span></a>
                </div>

              </div><!-- / .categories-widget -->


              <!-- Comments - Widget -->
              <div class="col-md-12 ws-s comments-widget">
                <h5 class="header-widget">Comments</h5>

                <!-- Item 1 -->
                <div class="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" class="widget-comm-title">Lorem ipsum dolor sit amet</a></span>
                </div>

                <!-- Item 2 -->
                <div class="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" class="widget-comm-title">Sed do eiusmod</a></span>
                </div>

                <!-- Item 3 -->
                <div class="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" class="widget-comm-title">Lorem ipsum dolor sit amet</a></span>
                </div>

                <!-- Item 4 -->
                <div class="widget-item">
                  <span><a href="#">Jon Doe</a> on <a href="#" class="widget-comm-title">Sed do eiusmod</a></span>
                </div>
                
              </div><!-- / .comments-widget -->


              <!-- Text - Widget -->
              <div class="col-md-12 text-widget">
                <h5 class="header-widget">Text Widget</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae qui error, incidunt quia pariatur facere quasi totam inventore amet rerum.</p>
              </div><!-- / .text-widget -->

            </aside><!-- / .sidebar -->

          </div><!-- / .row -->
        </div><!-- / .container -->



       <!-- ========== Footer ========== -->
        
    <!-- ========== Footer Widgets ========== -->
    <div id="trigger3"></div>
    <footer class="footer-widgets">
    <div class="container">
      <div class="row section">

        <!-- About Us -->
        <div class="col-md-4">
          <div class="widget about-widget">
            <h5 class="header-widget">Register</h5>
            <a href="#joinus" class="btn btn-white-outline gray">Join Us Now</a>
          </div><!-- / .widget -->
        </div><!-- / .col-md-3 -->

        <!-- Newsletter -->
        <div class="col-md-4">
          <div class="widget newsletter-widget">
            <h5 class="header-widget">Keep me updated</h5>

            <form action="post" id="newsletter_form_2">
              <div class="form-group">
                <input type="email" name="newsletter[email]" placeholder="JOIN OUR NEWSLETTER">
                <button type="button" id="button-submit-2"><i class="fa fa-send-o"></i></button>
              </div>
            </form>
			<p id="ty-2"  style="display: none">WE&apos;LL KEEP YOU UPDATED</p>
          </div><!-- / .widget -->
        </div><!-- / .col-md-4 -->


        <!-- About Us -->
        <div class="col-md-4">
          <div class="widget about-widget">
            <h5 class="header-widget">Contact</h5>
            <p>8 EU TONG SEN ST.2<br/>#12-82<br/>THE CENTRAL<br/>SINGAPORE<br/>059818</p>
          </div><!-- / .widget -->
        </div><!-- / .col-md-3 -->
        <h4 style="color:#8A8A8A; margin-left:1.67em">&copy; 2016 Yojee Pte. Ltd. All rights reserved.</h4>
      </div><!-- / .row -->
    </div><!-- / .container -->
    <div class="seaport">
      <img  id="ship" class="ship" src="assets/images/backgrounds/port/ship_optimized.png" />
    </div>
    </footer><!-- / .footer-widgets -->

    

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

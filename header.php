<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ACStarter
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">



<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!-- Begins our App -->
<div id="page" class="site" ng-app="app">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'acstarter' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		<div class="wrapper">
			<!-- <div class="site-branding">
				<?php
				if ( is_front_page() && is_home() ) : ?>
					<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
				<?php else : ?>
					<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
				<?php
				endif;

				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
				<div class="clear"></div>
					<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
				<?php
				endif; ?>
			</div>.site-branding -->

			<!-- <div id="connect"><a href="#connect">Connect with me</a></div> -->


			<div id="nav-trigger" class="nav-trigger open">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</div>
<nav id="nav" class="out">
  <ul>
    <li><span class="nav-label">
    	<a href="<?php bloginfo('url'); ?>">Home</a>
    </span></li>
    <li><span class="nav-label">
    	<a href="<?php bloginfo('url'); ?>/work">Work</a>
    </span></li>
    <li><span class="nav-label">
    	<a href="<?php bloginfo('url'); ?>/blog">Blog</a>
    </span></li>
    <li><span class="nav-label">
    	<a href="<?php bloginfo('url'); ?>/contact">Contact</a>
    </span></li>
   
  </ul>
</nav>


			
	</div><!-- wrapper -->
	</header><!-- #masthead -->

	<div id="content" class="site-content wrapper">

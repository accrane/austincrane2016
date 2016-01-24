<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package ACStarter
 */

get_header(); ?>

<!--<div class="connect">
	<div id="close">X</div>
	<div class="webform"><?php echo do_shortcode('[gravityform id="2" title="false" description="false"]'); ?></div>
</div> connect -->

<!-- <div class="pageview"> -->
<!-- Viewer for the App -->
    <div ng-view class="view-animation"></div>
<!-- </div> -->



<div class="fullscreen-bg">
    <video loop muted autoplay poster="<?php echo get_stylesheet_directory_uri(); ?>/images/start.jpg" class="fullscreen-bg__video">
        <source src="<?php echo get_stylesheet_directory_uri(); ?>/images/video1.webm" type="video/webm">
        <source src="<?php echo get_stylesheet_directory_uri(); ?>/images/video1.mp4" type="video/mp4">
        	<source src="<?php echo get_stylesheet_directory_uri(); ?>/images/video1.mov" type="video/mov">
        	<source src="<?php echo get_stylesheet_directory_uri(); ?>/images/video1.m4v" type="video/m4v">

        <source src="video1.ogv" type="video/ogg">
    </video>
</div>
<?php
//get_sidebar();
get_footer();

jQuery.noConflict();
jQuery(document).ready(function(){



});

//position the popup at the center of the page
function positionPopup(){
//close popup
jQuery("#close").click(function(){
	jQuery("#overlay_form").fadeOut(500);
});
  if(!jQuery("#overlay_form").is(':visible')){
    return;
  } 
 
}

//maintain the popup at center of the page when browser resized
jQuery(window).bind('resize',positionPopup);
//validation
//var $k=jQuery.noConflict();
  //jQuery(document).ready(function(){
    //jQuery("#commentForm").validate();
  //});
  
//content-slider

//var $jk = jQuery.noConflict(); 
jQuery(document).ready(function(){
	jQuery('#home-content-product-container').slides({
		preload: true,
		play: 8000,
		pause: 2500,
		hoverPause: true,
		crossfade: true,
		generateNextPrev: false,
        slideSpeed: 1000,
		generatePagination: false,
		animationStart: function() {
            jQuery('.slides_container').css('overflow','hidden');
        },
		animationComplete: function() {
            jQuery('.slides_container').css('overflow','');
        }
	}).show();
	jQuery('.slides_container').css('overflow','');
});  
jQuery(document).ready(function(){
jQuery('#slideshow').after('<div id="nav1">').cycle({ 
    fx:     'scrollHorz', 
    speed:  'slow', 
    timeout: 0, 
    pager:  '#nav1' 
});
});
jQuery(document).ready(function(){
    jQuery(window).load(function(){
      jQuery('.flexslider').flexslider({
        animation: "slide",
        timeout: 3000
      });
    });	
    });	function refreshCartBox(){ jQuery(".head-cart").hover(         function(){ jQuery(".mini-cart").stop().slideDown(); 	
	},function(){ jQuery(".mini-cart").stop().slideUp(); }    );	}		
jQuery(document).ready(function(){refreshCartBox();
   //jQuery(".mini-cart").hide();/*jQuery('.head-cart').live('mouseover mouseout', function(event) {if (event.type == 'mouseover') {	jQuery(".mini-cart").stop().slideDown(); } else {	jQuery(".mini-cart").stop().slideUp();}});*/
});
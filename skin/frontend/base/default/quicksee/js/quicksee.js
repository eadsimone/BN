$js = jQuery.noConflict();$js(document).ready(function(){$js('.quicksee-container h2.product-name a').each(function(){	$js(this).parent().parent().children('a').attr('href',$js(this).attr('href'));});});
Event.observe(window, 'load', function(e) {
	$$(".products-grid a.product-image img,.products-list a.product-image img").each(function(img){
		img.addClassName('abc');
		img.observe('mouseover', function(event) {
			var div = $(this).up('li.item').down('.quicksee-container');
			$(this).up('li.item').addClassName('hover');
			div.show();
		}).observe('mouseout', function(event) {
			$(this).up('li.item').removeClassName('hover');
			$(this).up('li.item').down('.quicksee-container').hide();
		});
		
		img.up('li.item').down('.quicksee-container').observe('mouseover',function(event){
			$(this).up('li.item').addClassName('hover');
			$(this).show();
		}).observe('mouseout', function(event) {
			$(this).up('li.item').removeClassName('hover');
			$(this).setStyle({'top':''}).hide();
		});
		
	});
});
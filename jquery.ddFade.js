jQuery.fn.dropdownFade = function(params) {
	var opacity	= params.opacity;
	var trigger = params.trigger;
	var speed 	= params.speed;
	var hoverDelay = params.delay;
	var menuList = $(this).children().find('ul');
	var item = menuList.find('a');
	var w = 0;
	$(item).each(function(i){
		if($(this).outerWidth() > w){
			w = $(this).outerWidth(true);
		}
	});
	var h = menuList.outerHeight();
	var timeout;	
	var container = menuList.parent(trigger);
	$(this).mouseenter(function(){
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			$(container).css({
				'width'		 : w,
    			'margin-left': "0"
			});
			$(container).css({
    			'z-index': 11
			});
			$(container).animate({ 
				opacity: opacity,
    			height: h
  			}, speed);
  		}, hoverDelay);	
	});
	$(this).mouseleave(function() {
		clearTimeout(timeout);
		$(container).animate({ 
			opacity: 0,
    		height: 0
  		}, 100);
  		$(container).css({
			'margin-left': -9999,
    		'z-index': 1
		});	
	});
};
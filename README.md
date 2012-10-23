#A jQuery based dropdown menu for primary navigation#

This was a project that started as a leaner replacement for a javascript animated drodown menu that just proved to be cumbersome and clumsy. 

I ripped out the javascript that worked and ported the whole thing into a jQuery plugin.

The plugin accepts variables for the speed of the menu and the final opacity. The dimesions are automatically calculated by the number of items in the list and the width of the longest item in the list.

##Usage##
$(document).ready(function() {
	$(".someClass").each(function(e) {
		$(this).dropdownFade({	
			opacity : 1.0,			// The final opacity of the menu once expanded.
			trigger : '.dropdown',	// The class or ID of the <div> to be triggered for expansion. 
			speed 	: 200,			// The speed (ms) of the menu animation.
			delay 	: 100			// The timeout delay (ms) of the mouseover event on the parent <li> item.
		});
	});		
});

###To Be Added###

-I need to add in default values for the variables.
-I might examine the variables names (notably 'trigger') to be more descriptive. 
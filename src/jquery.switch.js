/** 
jQuery Switch Plugin
http://github.com/carlosvillu/jquery_switch

Copyright (c) 2010 Carlos Villuendas Zambrana (http://www.carlosvillu.com)
Licensed under the MIT license.

*/

jQuery.widget('carlosvillu.jswitch', {
	_init: function(){
		if(this.element[0] == jQuery('p')[0]){
			jQuery(this.element).html('mandatory swicth container is a div');
			return false;
		}
		this._switch = jQuery('<div/>').attr('class', 'switch');
		jQuery(this.element).append(this._switch);
	}
});


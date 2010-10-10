/** 
jQuery Switch Plugin
http://github.com/carlosvillu/jquery_switch

Copyright (c) 2010 Carlos Villuendas Zambrana (http://www.carlosvillu.com)
Licensed under the MIT license.

*/

jQuery.widget('carlosvillu.jswitch', {
	_init: function(){

		this._switch = jQuery('<div/>').attr('class', 'switch');
		jQuery(this.element).append(this._switch);
	}
});


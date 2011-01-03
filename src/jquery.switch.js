/** 
jQuery Switch Plugin
http://github.com/carlosvillu/jquery_switch

Copyright (c) 2010 Carlos Villuendas Zambrana (http://www.carlosvillu.com)
Licensed under the MIT license.

*/

jQuery.widget('carlosvillu.jswitch', {
	options: {
		image_dir: 'images',
		state: 'enabled',
		value: 'on',
		on: function(){return false;},
		off: function(){return false;}
	},
	_init: function(){
		// Solo están permitidos los switch en elementos 'div'
		if(!jQuery(this.element).is('div')){
			jQuery(this.element).html('mandatory swicth container is a div');
			return false;
		}
		
		// Elemento DOM que representa el switch
		this._switch = jQuery('<div/>').attr('class', 'switch')
										.css( {height: '27px', width: '94px', overflow: 'hidden'});
		
		//comienzo con algunas inicializaciones
		// this.options = jQuery.extend({}, jQuery.fn.jswitch.defaults, this.options);
		this._changeState(this.options.state);
		jQuery(this.element).append(this._switch);
	},
	_setData: function(key, value){
		this.options[key] = value;
		// Actualizamos el nuevo estado del switch
		if(key === 'state') this._changeState(value);
	},
	_changeState: function(state){
		this._switch.css('background-image', 'url("'+this.options.image_dir+'/switch_'+state+'.png")');
		this._state = state;
	}
});

// Opciones por defecto para no tener que configurar absolutamente nada en el switch
jQuery.carlosvillu.jswitch.options = {
	image_dir: 'images',
	state: 'enabled',
	value: 'on',
	on: function(){return false;},
	off: function(){return false;}
};


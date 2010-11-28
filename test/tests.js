// Contenedor del switch para todas las pruebas
var switch_container = jQuery('<div/>').attr('id', 'switch_container');

module('jQuery Swtich', {
	teardown: function(){
		jQuery('#switch_container .switch').remove();
	}
});
test('Existe un función en el espacio de nombre de jQuery', 1, function(){
	ok( typeof(jQuery.fn.jswitch) === 'function', 'No existe una función para utilizar el plugin');
});

test('Agregamos un Switch en un capa', 2, function(){
	jQuery(switch_container).jswitch();
	ok(!!jQuery('.switch'), 'No hay ningún elemento switch');
	equals(jQuery('.switch').parent()[0], jQuery(switch_container)[0], 'El switch no esta dentro de la capa contenedora');
});
test('Intentamos agregar el swicth a un contenedor que no es un DIV', 1, function(){
	var p = jQuery('<p/>');
	jQuery(switch_container).append(p);
	jQuery(p).jswitch();
	equals(jQuery('p .switch').length, 0, 'Se ha agregado un switch a un elemento <p>');
});

test('El plugin tiene opciones por defecto', function(){
	//jQuery('#switch_container .switch').remove();
	ok(jQuery.carlosvillu.jswitch.defaults, 'No tiene opciones por defecto');
	
	jQuery(switch_container).jswitch();
	
	equals(jQuery(switch_container).jswitch('option', 'image_dir'), 'images', 'El directorio por defecto no es el esperado');
	equals('enabled', jQuery(switch_container).jswitch('option', 'state'), 'El estado inicial por defecto no es el esperado');
	equals('on', jQuery(switch_container).jswitch('option', 'value'), 'El valor inicial por defecto no es el esperado');
});

test('Se realiza el cambio de los valores por defecto del plugin por los suministrados por el usuario', 5, function(){
	var newOptions = {
		image_dir: 'newImages',
		state: 'disabled',
		value: 'off',
		on: function(){return true;},
		off: function(){return true;}
	};
	
	jQuery(switch_container).jswitch(newOptions);
	
	equals('newImages', jQuery(switch_container).jswitch('option', 'image_dir'), 'No es el directoria de imagenes modificado');
	equals('disabled', jQuery(switch_container).jswitch('option', 'state'), 'No es el estado modificado');
	equals('off', jQuery(switch_container).jswitch('option', 'value'), 'No es el valor modificado');
	ok(jQuery(switch_container).jswitch('option', 'on').call(this), 'No se ha ejecutado el callback para turn on modificado');
	ok(jQuery(switch_container).jswitch('option', 'off').call(this), 'No se ha ejecutado el callback para turn off modificado');
	
});

test('El nuevo elemento creado presenta las imagenes adecuadas según su estado', function(){
	jQuery(switch_container).jswitch();
	ok(jQuery('.switch').css('background-image').match(/\/switch_enabled.png.*/), 
	   'No esta mostrando la imagen esperada para el estado enabled');

	jQuery(switch_container).jswitch('option', 'state', 'disabled');

	ok(jQuery('.switch').css('background-image').match(/\/switch_disabled.png.*/), 
	   'No esta mostrando la imagen esperada para el estado disabled');
});



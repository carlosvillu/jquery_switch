// Contenedor del switch para todas las pruebas
var switch_container = jQuery('<div/>').attr('id', 'switch_container');

module('jQuery Swtich', {
	setup: function(){
		jQuery('#qunit-fixture').append(switch_container);
	},
	teardown: function(){
		jQuery(switch_container).remove();
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
test('Intentamos agregar el swicth a un contenedor que no es un DIV', function(){
	var p = jQuery('<p/>');
	jQuery(switch_container).append(p);
	jQuery(p).jswitch();
	equals(jQuery('.switch').length, 1, 'Se ha agregado un switch a un elemento <p>');
	jQuery(switch_container).remove();
});
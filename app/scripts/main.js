$(document).ready(function(){
	var lines = [
		' Al despuntar el alba una joven cucuteña sale de su hogar con sigilo para evitar lastimar a su sobrino con la partida.',
		' De su actividad diaria de martes hace todo un recorrido y se sumerge en el análisis de su desayuno.',
		' La ciudad brillante y caliente está ahí afuera. Parece que nada puede pasar más que calor y algo de pereza, entonces de su monumento más emblemático brota cerveza.',
		' La firma de la paz trae de regreso importantes grupos de turistas al departamento, pero el tradicional paso de frontera está cerrado. Una delegación de personajes “autóctonos” se encarga de enseñarles que la región es mucho más que cocosettes y diablitos.',
		' Un tren bala atraviesa la cuenca del lago de Maracaibo y su impacto logra la independencia económica y política de la región. ¿Qué harán los centrales de ambos centros?',
		' Cuando un duende y una lagartija se suben a un bus les da pereza luchar por el puesto y se toman un jugo para aprender que no son los únicos.',
		' Mientras tanto se reúnen los eruditos y maestros de la cultura en la región para cambiar y renovar la praxis social mediante una investigación teórica con los actores del conflicto armado colombiano.',
		' En medio de esta crisis binacional, un terremoto destruye la frontera, revalorando la existencia de unos seres subterráneos. ¿Cómo enfrentarán las dos naciones esta nueva amenaza?',
		' Un grupo de jóvenes de una residencia se reúnen en un pabellón y se topan con una guaca, poniendo a prueba su actitud pacífica.',
		' En Ventura Plaza Santos y Maduro abren fuego contra un grupo de rehenes fingiendo su muerte para manipular al pueblo.',
		' Un escuadrón de foráneos lava-cerebros busca someter a un grupo de jóvenes becarios académicos, quienes fueron convocados para salvar a Cúcuta con un portal Wix.',
		' No sospechan que caerán en la trampa de una secta de vampiros androides hambrientos sexuales.',
		' Al salir de casa Marlon mira el reloj y se da cuenta de que no llegará a tiempo, sin saber que la clase de hoy será poner a prueba su equilibrio.'
	];

	unirLoglines();

	$('#loglines a').on('click', function(event) {
		event.preventDefault();
		unirLoglines();
	});

	$('header h2 a').on('click', function(event) {
		event.preventDefault();
		if( $('#intro').hasClass('display') ){
			$('#intro').removeClass('display').hide();
		}else{
			$('#intro').addClass('display').show();
		}
	});

	function unirLoglines(){
		$('#loglines p').text('');
		var linesRandom = shuffle( lines );
		for (var i = 0; i < linesRandom.length; i++) {
			$('#loglines p').append('<span>'+ linesRandom[i] +'</span>');
		}
	}

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
});
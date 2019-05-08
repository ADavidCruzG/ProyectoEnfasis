$(document).ready(function () {

	var Body = $('body');
    Body.addClass('preloader-site');

	/*
	showDiv(1);
	
	$("#close-result").click(function () {
		$("#result-missing-doc").slideUp(500);
	});

	$("#btn-login").click(function () {
		$("#menu-create-missing-doc").show();
		$("#menu-signup").hide();
		$("#menu-login").hide();
	});
	



	//------------------ EVENTOS BOTONES (MENÚ) -----------------------

	$('#btn-menu').on('click', 'a', function(e) {

	    e.preventDefault();
	    
	    if (!$(this).hasClass('active')) {

		    $('#btn-menu').find('.active').removeClass('active');
		    $(this).addClass('active');
		    $('.container-menu:visible').slideUp(300);
		    $('.container-menu[id=' + $(this).attr('container-id') + ']').delay(300).slideDown();

	    }

	 });

	//-----------------------------------------------------------------
	
	*/
	
});

// EVENTO PARA DESPLEGAR DIV DE RESULTADO EN LA BÚSQUEDA PRINCIPAL
$(document).on('keypress', '#search-term', function(e) {
	if (e.keyCode == 13) {
		$("#result-missing-doc").slideDown(500);
	}	
});


// MOSTRAR LOS DIVS
function showDiv(option){

	$("#result-missing-doc").hide();
	$("#container-login").hide();
	$("#container-searching").hide();
	$("#container-signup").hide();
	$("#container-create-missing-doc").hide();
	$("#menu-create-missing-doc").hide();
	
	switch (option){
		case 1:
			$("#container-searching").show();
			$("#menu-signup").show();
			$("#menu-login").show();
			break;
	}

}

// LOADER IMAGEN
$( window ).on("load", function() {
    $('.preloader-image').fadeOut();
    $('body').removeClass('preloader-site');
});
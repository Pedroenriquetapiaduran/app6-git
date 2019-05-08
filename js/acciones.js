// JavaScript Document

$(document).ready(function (e) {
	document.addEventListener ("deviceready",function(e){ 
		
		$('#izquierda').on("swipeleft",function(e){
		navigator.notification.alert("Deslizo a la izquierda", function(e){"Aplicacion","Aceptar"});
});
		
$('#derecha').on("swiperight",function(e){
		navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;

			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
	},"Aplicacion ","Beep,Vibrar,Cancelar");

});
	},false);
});	











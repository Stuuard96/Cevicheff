  $(document).ready(function(){
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'slide', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });
  // ScrollUp

  
  $(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
    });
});
// Slider


  $(document).ready(function mapGoogle() {
    var coordenada = {
        lat: -11.1076011,
        lng: -77.5940595
    }

    var mapa = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 10,
            center: coordenada
        }
    )

    new google.maps.Marker({
        position: coordenada,
        map: mapa
    });
});

$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
// Api google

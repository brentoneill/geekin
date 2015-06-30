$(document).ready(function() {

  $("#owl-carousel").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  var map;
  function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 15,
      center: {lat: 32.799, lng: -79.942},
      offCenter: {lat: 32.794, lng: -79.942},
      disableDefaultUI: true,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false,
      scrollwheel: false,
      styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#f5f5f5"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"color":"#f5f5f5"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#e8e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fe934c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#666666"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#9a96c5"}]}]
    });

    // var placement = [
    //   ['Balboa Park', -37.724, -122.444]
    // ];

    var circle = {
      path: 'M-18,0a18,18 0 1,0 36,0a18,18 0 1,0 -36,0',
      fillColor: '#FF7E00',
      fillOpacity: 1,
      scale: 1,
      strokeColor: 'white',
      strokeWeight: 6
    };

    var marker = new google.maps.Marker({
      position: map.offCenter,
      icon: circle,
      map: map,
      title: 'Our Location'

    });

    var contentString = '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">FIND GEEKIN</h1>'+
      '<div id="mapMarkerWindow">'+
      '<p>647 B King Street,</p>'+
      '<p>Charleston, 29403 SC</p>'+
      '</div>'+
      '<a href="http://google.com" target="_blank">Find us</a>'
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      borderRadius: 30
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker)

  }

  google.maps.event.addDomListener(window, 'load', initialize);


});

$(document).ready(function(){
  $('locateUser').click(locateUser)
});

function locateUser() {
  if (navigator.geolocation){
    var positionOptions ={
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else{
    alert("Nope, no support.");
  }
}

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords. longitude);

  var myOptions = {
    zoom: 16,
    center: userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}

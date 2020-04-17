$(document).ready(function() {

// Map
mapboxgl.accessToken = 'pk.eyJ1IjoibGlzYW1jYW1wIiwiYSI6ImNrOHpleHlzYTAxcWkzZnBlcjdxM3BoZnIifQ.bNRIw_e-uCQLRGfy9-bHlQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/lisamcamp/ck8zfacri00a81iqshqireqqe'
    });
    map.scrollZoom.disable();




//Hiking Project Data API

function locationTrails() {
  var key = "200727629-d773c339e8dcd5aa90cb10c2a18cde1f";
  var latitude = 39.419220;
  var longitude = -111.950684;
  var maxDistance = 10;
  var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=" + maxDistance + "&key=" + key;

  
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function (response) {
  console.log(response);
  //make variable to store the query data
  result = response.data;
  })

//API key: 200727629-d773c339e8dcd5aa90cb10c2a18cde1f

//Different methods available
  // getTrails - returns trails for given query
    //required arguments: key - Your private key, lat - Latitude for a given area, lon - Longitude for a given area
    //optional arguments: maxDistance, maxResults, sort, minLength, minStars
    //example syntax: https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200727629-d773c339e8dcd5aa90cb10c2a18cde1f
  //getTrailsById
    //required arguments: key & ids
    //maybe we would want to use this if we're focusing on 10 specific hikes?
    //example: https://www.hikingproject.com/data/get-trails-by-id?ids=7001635,7002742,7006663,7000108,7002175&key=200727629-d773c339e8dcd5aa90cb10c2a18cde1f
  //getConditions
    //we could maybe use this for crowdedness or prettiness or dificulty? not sure what available conditions there are
    //required: ids
    //example: https://www.hikingproject.com/data/get-conditions?ids=7001635,7002742,7006663,7000108,7002175&key=200727629-d773c339e8dcd5aa90cb10c2a18cde1f
  
}

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrolltop > 690 || document.documentElement.scrollTop > 690) {
    document.getElementById("navlinks").style.height = "50px";
    document.getElementById("logo").style.display = "none";
    document.getElementById("logo2").style.display = "block";
    document.getElementById("navlinks").style.backgroundColor = "gray";
  
  } else {
    document.getElementById("navlinks").style.backgroundColor = "transparent";
    document.getElementById("logo").style.display = "block";
    document.getElementById("logo2").style.display = "none";
  }
}
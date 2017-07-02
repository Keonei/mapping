// const for the google map so we can apend the api key and query
const mapUri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=47.6098048,-122.33480189999999&Key=AIzaSyBJlX3VDLvRvE22_vVVAW4Mw3wKmYUdtR0";

// array of obj
const container = document
const locations = [
  { lat: 51.5074, lng: 0.1278 },
  { lat: 48.8566, lng: 2.3522 },
  { lat: 40.7128, lng: -74.0059 },
  { lat: -22.4382, lng: 101.5290 },
  { lat: 41.9028, lng: 12.4964 },
  { lat: 35.6895, lng: 139.6917 }
]

var ul = function(){
  // create the container ul
  let ul = document.createElement("ul");
  ul.id = "listContainer";
  document.getElementById("container").appendChild(ul);
}
// for each obj, call the API

// new request object, open, onload, onerror, send
let request = new XMLHttpRequest()
request.open("GET", mapUri, true);
request.onload = onloadFunc;
request.onerror = onerrorFunc;
request.send();

// onload function
let onloadFunc = function() {
  const parse = JSON.parse(this.response)
  console.log(parse);

  var li = document.createElement("li");
  // if results, print most specific result as li inside ul
  // if no results, print an error message as li inside ul
  if(parse.results.length > 0){
    // response.results.length > 0
      //print first result's fomatted address to page
      li.innerHTML = parse.results[0].formatted_address;
    } else {
      // if no ressults, print an error message as li inside ul
      li.innerHTML = "Sorry, no results were found";
    }
      document.getElementById("container").appendChild(li);
  }

// onerror function
let onerrorFunc = function(){
  // print an error message as li inside ul
  var li = document.createElement("li");
  li.innerHTML = "Sorry, an error occurred";

  }

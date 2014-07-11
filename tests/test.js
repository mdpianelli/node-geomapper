var GeoMapper = require('../main.js');
var test = require('assert');

var longitude = 112.5584;
var latitude = 37.8324;

exports.testMapper = function (test) {
  
  var precision = 5;
  var gmap = new GeoMapper(precision);
  
  //console.log(gmap.precision);

  var zoneID = gmap.getZone(latitude,longitude);
  //console.log(zoneID);

  test.equal(zoneID.length,5);
  test.done();
};


exports.testEmptyInitVar = function (test) {
  
  var gmap = new GeoMapper();

  var zoneID = gmap.getZone(latitude,longitude);
  test.equal(zoneID.length,9);
  
  test.done();
};




return exports;

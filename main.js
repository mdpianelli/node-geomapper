/**
 * Copyright (c) 2014, Marcos Pianelli.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */


/**
 * GetZone
 *
 * Create zone id from a given latitud and longitude
 *
 * @param {Number|String} latitude
 * @param {Number|String} longitude
 * @param {Number} numberOfChars
 * @returns {String}
 */
GeoMapper.prototype.getZone = function(latitude,longitude){

	return geohash.encode(latitude,longitude,this.precision);

}




// var GeoMapper = {
//   'ENCODE_AUTO': ENCODE_AUTO,
//   'encode': encode,
//   'encode_uint64': encode_int, // keeping for backwards compatibility, will deprecate
//   'encode_int': encode_int,
//   'decode': decode,
//   'decode_int': decode_int,
//   'decode_uint64': decode_int, // keeping for backwards compatibility, will deprecate
//   'decode_bbox': decode_bbox,
//   'decode_bbox_uint64': decode_bbox_int, // keeping for backwards compatibility, will deprecate
//   'decode_bbox_int': decode_bbox_int,
//   'neighbor': neighbor,
//   'neighbor_int': neighbor_int,
//   'neighbors': neighbors,
//   'neighbors_int': neighbors_int,
//   'bboxes': bboxes,
//   'bboxes_int': bboxes_int
// };

// Initial Setup
var geohash = require('ngeohash');


function GeoMapper (precision) {
 
 //Set defaults
  precision = typeof precision !== 'undefined' ? precision : 9;

 // Public vars and methods 
 this.precision = precision;
 
};




module.exports = GeoMapper;
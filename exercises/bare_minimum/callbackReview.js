/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var url = require('url');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) {
      callback(err);
    } else {
      data = data.split('\n');
      callback(null , data[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (requestUrl, callback) {
  request(requestUrl, (error, response, body) => {
    if(error) {
      callback(error);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

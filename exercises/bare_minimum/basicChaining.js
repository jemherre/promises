/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var Promise = require('bluebird');
var fileAsync = require('./promiseConstructor');
var gitHubProfile = require('./promisification');
var writeFile = Promise.promisify(require('fs').writeFile);


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  //reads file and gets username
  return fileAsync.pluckFirstLineFromFileAsync(readFilePath)
  //sends username to github api
  .then((username)=>{
    return gitHubProfile.getGitHubProfileAsync(username);
  })
  //writes json response to fs.writeFile(filepath,data,(err))
  .then((user) => {
    return JSON.stringify(user);
  })
  .then((stringUser) => {
    return writeFile(writeFilePath, stringUser);
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

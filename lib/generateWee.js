var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));

var root = __dirname.replace(/lib$/,'');

function generateWee(project) {
  return fs.copyAsync(root + 'core', project)
    .then(function(err){
      return err ?  console.error(err) : console.log('Weeui has been installed successfully!');
    });
}

module.exports = generateWee;

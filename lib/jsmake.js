/**


 */

// Default options
var options = {
  fileName: 'Makefile.js',
  debug: false
};

// utility functions
function debug() {
  console.log.apply(console, arguments);
}

// Parse argv
(function (options) {
  var arg,
  argv = process.argv.slice(2);


  while (argv.length > 0) {
    arg = argv.shift();
    if (arg == '-f') {
      options.fileName = argv.shift();
    } else if ( arg == '-d' || arg == '--debug') {
      options.debug = true;
    }
  }
}(options));

debug(options);

// Load file
var buildScript = require('./' + options.fileName);

debug(buildScript);


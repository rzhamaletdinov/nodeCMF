function start() {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

function ignore() {
}

function status404() {
	  console.log("404 error");
}

exports.start 		= start;
exports.upload 		= upload;
exports.ignore 		= ignore;
exports.status404 	= status404;
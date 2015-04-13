var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
/*  exec("ls -lah", function (error, stdout, stderr) {
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	  });*/
  exec("find /",
		    { timeout: 10000, maxBuffer: 20000*1024 },
		    function (error, stdout, stderr) {
		      response.writeHead(200, {"Content-Type": "text/plain"});
		      response.write(stdout);
		      response.end();
		    });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

function ignore(response) {
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.end();
}

function status404(response) {
	console.log("404 Not found");
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
}

exports.start 		= start;
exports.upload 		= upload;
exports.ignore 		= ignore;
exports.status404 	= status404;
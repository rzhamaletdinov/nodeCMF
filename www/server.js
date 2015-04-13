var http = require("http");
var url = require("url");

function start(route, handle) {
	
	  function onRequest(request, response) {

		  	var pathname = url.parse(request.url).pathname;
    
		    route(pathname, handle);
		    
		    response.writeHead(200, {"Content-Type": "text/plain"});
		    response.write("Hello World\n");
		    response.write("Path: "+pathname+" \n");
		    response.write("Request.url: "+request.url);
		    response.end();
	  }
	
	  http.createServer(onRequest).listen(8888);
	  console.log("Server has started.");
}

exports.start = start;
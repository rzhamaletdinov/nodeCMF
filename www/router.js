function route(handle, pathname, response, request) {

	if	(typeof handle[pathname] === 'function')
		handle[pathname](response, request);
	else
		handle["/404"](response, request);
	
}

exports.route = route;

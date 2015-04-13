function route(pathname, handle, response) {

	  if (typeof handle[pathname] === 'function')
		  handle[pathname](response);
	  else
		  handle["/404"](response);
}

exports.route = route;

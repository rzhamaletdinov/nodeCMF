function route(pathname, handle) {

	  if (typeof handle[pathname] === 'function')
		  handle[pathname]();
	  else
		  handle["/404"]();
}

exports.route = route;

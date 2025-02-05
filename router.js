function route(pathname, handle, response, productId) {
    console.log('pathname : ' + pathname);

    if (typeof handle[pathname] == 'function') {
        handle[pathname](response, productId);
    } else {
        response.writeHead(404, { 'Content-type': 'text/html' });
        response.write('Not Found');
        response.end();
    }


}

exports.route = route;
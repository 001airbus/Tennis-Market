let http = require('http');
let url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;//요청받은 url을 parse(읽어서) 그 경로(pathname)를 담는다
        let queryData = url.parse(request.url, true).query;

        route(pathname, handle, response, queryData.productId);

    }

    http.createServer(onRequest).listen(5555);
}

exports.start = start; // 위의 start 함수를 다른 곳에서도(exports) 사용할 수 있게 만듬

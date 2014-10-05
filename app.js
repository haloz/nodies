var http = require("http");
var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		"content-type" : "text/plain"
	});
	res.write("hallo");
	res.end("welt");
}).listen(20080);
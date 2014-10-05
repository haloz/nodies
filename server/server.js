var connect = require("connect"),
    serveStatic = require('serve-static');
     
var server = connect()
    .use(serveStatic(__dirname + "/../client"))
    .listen(20080);

console.log("Server started at port 20080");

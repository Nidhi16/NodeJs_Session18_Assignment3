var http = require('http');
var events = require('events');


var emitter = new events.EventEmitter();
var server = http.createServer(function (request, response) {
    response.writeHead('200', {'Content-Type': 'text/json'});
    emitter.emit('wish', "Merry Christmas");
    response.end("Merry Christmas!!!");
});



var wishCount = 0;
emitter.on('wish', function (data) {
    wishCount += 1;
    console.log(data + ":" + wishCount);
});

server.listen(3000, function() {
    console.log("Listening on port 3000");
});
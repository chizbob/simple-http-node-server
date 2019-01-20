var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request, response){
//  console.log(`request was made: ${request.url}`)
  var url = request.url

  try {
    fs.appendFileSync('hello-world.txt', 'Hello to this great world');
    console.log('appended to file!');
  } catch (err) {
    console.log("error")
  }

  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end(fs.readFileSync(__dirname + url))
})

server.listen(3000)
//console.log("listening to 3000")

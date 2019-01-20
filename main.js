var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request, response){
//  console.log(`request was made: ${request.url}`)
  fs.appendFile('hello-world.txt', 'Hello to this great world', function (err){
  if (err) throw err
  console.log('Saved!')
  })

  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('howdy')
})

server.listen(3000)
//console.log("listening to 3000")

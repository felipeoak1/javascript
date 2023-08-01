const UserController = require("./controllers/UserController.js")
const routes = require("./routes.js")
const http = require("http")


const server = http.createServer((request, response)=>{
    console.log(`Request Method: ${request.method} | ${request.url}`)

    const route = routes.find((routeObj)=>{
        routeObj.endpoint === request.url && routeObj.method === request.method
    })

    if (route) {
        route.handler(request,response)
    } else {
        response.writeHead(404, {'Content-type': 'text/html'})
        response.end(`Cannot ${request.method} ${request.url}`)
    }

    // if (request.url === '/users' && request.method === "GET") {
    //     UserController.listUsers(request, response)
    // } else {
    //     response.writeHead(404, {"Content-type": "text/html"} ), // Configuração do head da response
    //     response.end(`Cannot ${request.method} ${request.url}`); // 
    // }

})
server.listen(3000, ()=>{console.log("Server started at http://localhost:3000")})


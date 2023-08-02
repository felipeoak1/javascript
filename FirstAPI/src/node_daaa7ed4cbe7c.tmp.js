const http = require("http")
const routes = require('./routes')
const { URL } = require('url')

const server = http.createServer((request, response)=>{
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)
    console.log(`Request method: ${request.method} | Request Endpoint: ${request.url}`)

    let { pathname } = parsedUrl

    const splitEndPoint = pathname.split('/').filter(Boolean)
    console.log(splitEndPoint)

    const route = routes.find((routeObj)=>{
        return routeObj.endpoint === pathname && routeObj.method === request.method
    })
  
    if (route){
        request.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(request, response)
    } else {
        response.writeHead(404, {'content-type':'text/html'})
        response.end(`Cannot acess ${request.method} ${pathname}`)
    }
})

server.listen(3000, ()=>{console.log("Server start at http://localhost:3000")}) 
const http = require("http")
const routes = require('./routes') 
const { URL } = require('url') 

const server = http.createServer((request, response)=>{
    console.log(`Request method: ${request.method} | Request Endpoint: ${request.url}`)
    
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)
    let { pathname } = parsedUrl
    let id = null;
    const splitEndPoint = pathname.split('/').filter(Boolean)
    
    if (splitEndPoint.length > 1) {
        pathname = `/${splitEndPoint[0]}/:id`
        id = splitEndPoint[1]
    }
    
    const route = routes.find((routeObj)=>{return routeObj.endpoint === pathname && routeObj.method === request.method})
    
    if (route){
        request.params = { id }
        request.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(request, response)
    } else {
        response.writeHead(404, {'content-type':'text/html'})
        response.end(`Cannot acess ${request.method} ${pathname}`)
    }   
})

server.listen(3000, ()=>{console.log("Server start at http://localhost:3000")}) 
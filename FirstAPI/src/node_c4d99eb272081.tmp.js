const routes = require("./routes")
const http = require("http")
const { URL } = require("url")


const server = http.createServer((request, response)=>{
    const parsedUrl = new URL(`http://localhost:3000${request.url}`)

    console.log(`Request Method: ${request.method} | ${parsedUrl.pathname}`)

    const route = routes.find((e)=>{
        return e.endpoint === parsedUrl.pathname && e.method === request.method
    })

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams)
        route.handler(request, response)
    } else {
        response.writeHead(404, {'Content-type': 'text/html'})
        response.end(`Cannot ${request.method} ${request.url}`)
    }

})

server.listen(3000, ()=>{console.log("Server started at http://localhost:3000")})


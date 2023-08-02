//Regra de negócios da aplicação.
const users = require('../src/mocks/users')


 module.exports = {
     listUsers(request, response){
        const { order } = request.query
        const sortedUsers = users.sort((p, s)=>{
            if (order === 'desc') {
                return p.id < s.id ? 1 : -1
            }
            return p.id > s.id ? 1 : -1
        })

        response.writeHead(200, {'content-type': 'application/json'})
        response.end(JSON.stringify(sortedUsers))
    },

    geyUserById(request, response){
        response.writeHead(200, {'content-type': 'application/json'})
        response.end(JSON.stringify({ok: true}))
    }
 }
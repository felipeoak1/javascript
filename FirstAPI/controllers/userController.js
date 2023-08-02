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
        const { id } = request.params
        const userById = users.find((user) => {
           return user.id === Number(id)
        })

        if (!userById) {
            response.writeHead(400, {'content-type': 'application/json'})
            response.end(JSON.stringify({erro:`User not found`}))
        }else {
            response.writeHead(200, {'content-type': 'application/json'})
            response.end(JSON.stringify({userById}))
        }

    }
 }
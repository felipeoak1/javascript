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

        response.send(200, JSON.stringify(sortedUsers))
    },

    getUserById(request, response){
        const { id } = request.params
        const userById = users.find((user) => {
           return user.id === Number(id)
        })

        if (!userById) {
            return response.send(400, JSON.stringify({erro:`User not found`}))
        }
        
        response.send(200, JSON.stringify({userById}) )
    },

    createUser(request, response) {
        let body = ''
        request.on('data', (chunk) => {
            body += chunk
        })

        request.on('end', ()=>{
            body = JSON.parse(body)
            console.log(body)
            const lastUserId = users[users.length - 1].id
            const newUser = {
                id: lastUserId + 1,
                name: body.nome
            } 

            users.push(newUser)

            response.send(200, JSON.stringify(newUser))
        })

    }
 }
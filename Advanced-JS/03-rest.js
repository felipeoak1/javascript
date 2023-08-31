const user = {
    firstName: 'Mateus',
    lastName: 'Silva',
    age: 23,
    instagram: '@imateus.silva',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
}


const {firstName, skills, ...resto} = user
const [backend, ...restoskills] = skills

console.log(firstName, backend, resto, restoskills)
const user = {
    firstName: 'Mateus',
    lastName: 'Silva',
    age: 23,
    instagram: '@imateus.silva',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
}

// const firstName = user.firstName
// const age = user.age

// console.log(firstName, age)

const {firstName, age, skills} = user
const [backend,,mobile] = skills

console.log(firstName, age, skills, mobile)


const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });

})

export default routes;
/*
const users = [
    "Iuri",
    "Bernardo",
    "Evandro Corno"
];
*/
/*
app.get('/members', (request, response) => {
    const userId = String(request.query.userId);

    const filteredUsers = userId ? users.filter(user => user.includes(userId)) : users;

    return response.json(filteredUsers);
})


app.get('/members/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/members', (request, response) => {
    const user = {
        name: "Iuri",
        email: "iuri@teste.com"
    };

    return response.json(user);    
})
*/
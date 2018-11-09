require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller')


const app = express();
app.use(bodyParser.json())
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env;


massive(CONNECTION_STRING).then(db => app.set('db',db))

app.post('/register', ctrl.register)
app.post('/login', ctrl.login)
app.get('/get-post/', ctrl.getPost)
app.get('/get-post/:id', ctrl.getPost)





app.listen(SERVER_PORT, () => {
    console.log(`Welcome back for the ${SERVER_PORT}, Supa`)
})
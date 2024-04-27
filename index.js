const express = require('express')
const morgan = require('morgan')

const tasksRouter = require('./routes/tasks.js')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/tasks', tasksRouter)

/* Diseño de la api
label recurso: tasks

GET  /tasks
GET  /tasks/:id
POST /tasks {PAYLOAD BODY (new)}
PUT  /tasks/:id {PAYLOAD BODY (updates)}
DELETE /tasks/:id

*/

app.listen(4000, () => console.log('server on...'))

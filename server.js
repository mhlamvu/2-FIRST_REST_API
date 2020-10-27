// Load environment variables
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.port || 5000



mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

// check for errors
db.on('error', error => console.error(error))
// if connected to db
db.once('open', () => console.log('Connected to db'))


// allow server to accept json
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)



app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
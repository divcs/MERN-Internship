// console.log('hello')

// let a = 10,
//   b = 20,
//   c
// c = a + b

// console.log('Sum is: ', c)

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import dotenv from 'dotenv'

// env config
// dotenv.config({path: '/'})
dotenv.config()

// endpoints are executed through this
// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Node Server',
  })
})

app.get('/test', (req, res) => {
  res.status(200).send({
    message: 'Node Server test',
  })
})
// Port
const PORT = process.env.PORT || 8080

// listen
app.listen(8080, () => {
  console.log('Server running '.bgCyan.white)
})

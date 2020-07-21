import express, { response, request } from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request,response)=> {
  return response.json({ message: 'Hello world' })
})

app.listen(8080,()=>console.log('Server ON'))
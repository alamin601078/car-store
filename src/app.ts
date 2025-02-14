import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import carRouter from './module/car/car.router'
import orderRouter from './module/order/order.router'


// const express = require('express')
const app:Application = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api',carRouter)
app.use('/api',orderRouter)

app.get('/', (req: Request, res:Response) => {
  res.send('Hello World!')
})




export default app;
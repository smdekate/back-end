import dotenv from 'dotenv'
dotenv.config();

import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('this is twitter page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
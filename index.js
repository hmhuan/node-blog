const express = require('express')

const app1 = express()
const app2 = express()
const PORT1 = 3000
const PORT2 = 3001

app1.get('/', (req, res) => {
    res.send(`Hello World from ${PORT1}`)
})

app2.get('/', (req, res) => {
    res.send(`Hello World from ${PORT2}`)
})

app1.listen(PORT1, () => {
    console.log(`listening on port ${PORT1}`)
})
app2.listen(PORT2, () => {
    console.log(`listening on port ${PORT2}`)
})
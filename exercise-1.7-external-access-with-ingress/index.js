const express = require('express')
const app = express()

const randomString = Math.random().toString(36).substring(2)

app.get('/status', (req, res) => {
  res.send(`
    <h1>Log output status</h1>
    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    <p><strong>Random string:</strong> ${randomString}</p>
  `)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${randomString}`)
}, 5000)
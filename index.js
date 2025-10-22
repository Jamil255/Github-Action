import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware to parse JSON
app.use(express.json())

// GET API endpoint
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    status: 'success',
  })
})
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

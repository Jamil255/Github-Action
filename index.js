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

app.get('/api/data', (req, res) => {
  res.json({
    message: 'Data retrieved successfully!',
  })
})

// Export the app for testing
export default app

// Start server only if this file is run directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

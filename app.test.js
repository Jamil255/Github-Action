import request from 'supertest'
import express, { json } from 'express'

// Create the app directly for testing
const app = express()

// Middleware to parse JSON
app.use(json())

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

describe('Express App Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/').expect(200)

    expect(response.text).toBe('Welcome to the Home Page!')
  })

  test('GET /api should return JSON with message, timestamp, and status', async () => {
    const response = await request(app)
      .get('/api')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(response.body).toHaveProperty('message')
    expect(response.body).toHaveProperty('timestamp')
    expect(response.body).toHaveProperty('status')
    expect(response.body.message).toBe('Hello from the API!')
    expect(response.body.status).toBe('success')
    expect(response.body.timestamp).toMatch(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/
    ) // ISO date format
  })

  test('GET /api/data should return success message', async () => {
    const response = await request(app)
      .get('/api/data')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(response.body).toHaveProperty('message')
    expect(response.body.message).toBe('Data retrieved successfully!')
  })

  test('GET /nonexistent should return 404', async () => {
    await request(app).get('/nonexistent').expect(404)
  })
})

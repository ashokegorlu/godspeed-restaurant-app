
  // Import required modules
const express = require('express')
const { PrismaClient } = require('@prisma/client')

// Create a new instance of Prisma client
const prisma = new PrismaClient()

// Create a new instance of Express.js
const app = express()

// Middleware to parse JSON body
app.use(express.json())

// Define the POST route for creating a new user
app.get('/', async (req, res) => {
  try {
    res.json('hello world!')
  } catch (error) {
    // Handle any errors that occur
    console.error(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

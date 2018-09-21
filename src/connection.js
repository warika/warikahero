require('dotenv').load()
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.DB_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
})

module.exports = pool

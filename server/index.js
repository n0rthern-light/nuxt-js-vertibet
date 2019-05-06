const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const database = require('./database')
const app = express()
const api = require('./api')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const session = require('express-session')
const bodyParser = require('body-parser')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  const sockets = require('./sockets')

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  const mongoose = database()

  // Body parser, to access `req.body`
  app.use(bodyParser.json())

  app.use(session({
    secret: 'super-secret-key',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 86400 * 1000 }
  }))

  app.use('/api', api)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  // app.listen(port, host)

  sockets(app, port, host)
}
start()

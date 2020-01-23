const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT, 10) || 4000;

const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(port)
  console.log("Server is running on http://localhost:"+port)
})

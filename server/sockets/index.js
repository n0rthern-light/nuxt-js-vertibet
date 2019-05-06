const http = require('http')
const socketIO = require('socket.io')
const mongoose = require('mongoose')
const ActivityModel = mongoose.model('Activity')

module.exports = function (app, port, host) {
  console.log('Sockets initialized')
  const server = http.createServer(app)
  const io = socketIO(server)
  // overwrite nuxt.server.listen()
  server.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })

  // Add socket.io events
  io.on('connection', async (socket) => {
    console.log('someone connected')
    console.log(socket.handshake.address)
    let ip = socket.handshake.address
    let splittedChunks = ip.split('.').map((chunk, index) => {
      return index ? chunk.replace(new RegExp('[0-9]', 'g'), '*') : chunk
    })
    let cIP = splittedChunks.join('.')
    console.log(cIP)
    let activity = new ActivityModel()
    activity.message = `[${cIP}] Odwiedził naszą stronę, witamy!`
    await activity.save()
  })
}
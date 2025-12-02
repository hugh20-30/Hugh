const WebSocket = require('ws')
const port = 4001

const wss = new WebSocket.Server({ port })
console.log(`WebSocket server listening on ws://localhost:${port}`)

let nextId = 1

function broadcast(sender, data) {
  const str = JSON.stringify(data)
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN && client !== sender) {
      client.send(str)
    }
  }
}

wss.on('connection', function connection(ws) {
  const id = String(nextId++)
  ws._id = id
  ws.isAlive = true
  console.log('client connected', id)

  ws.send(JSON.stringify({ type: 'welcome', id }))

  ws.on('message', function incoming(message) {
    try {
      const data = JSON.parse(message.toString())
      // forward to other clients
      if (data && data.type) {
        if (data.type === 'ping') {
          ws.isAlive = true
          return
        }
        // inject sender id
        data.from = id
        broadcast(ws, data)
      }
    } catch (err) {
      console.warn('invalid json from client', err)
    }
  })

  ws.on('close', () => {
    console.log('client disconnected', id)
    broadcast(ws, { type: 'playerLeft', id })
  })
})

// simple heartbeat
setInterval(() => {
  wss.clients.forEach(function each(ws) {
    if (!ws.isAlive) return ws.terminate()
    ws.isAlive = false
    ws.send(JSON.stringify({ type: 'ping' }))
  })
}, 30000)

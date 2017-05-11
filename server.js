const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8765 });

wss.on('connection', (client) => {
  console.log('wss.connection');

  client.on('message', (message) => {
    console.log('received: %s', message);
  });

  client.on('close', (code, message) => {
    console.log('client.close', code, message);
  });

  client.send('something');
});

wss.on('error', (err) => {
  console.log('wss.error', err);
});

wss.on('headers', (headers) => {
  console.log('wss.headers');
});

wss.on('listening', () => {
  console.log('wss.listening');
});

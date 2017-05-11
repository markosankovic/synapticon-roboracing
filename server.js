const WebSocket = require('ws');
const Board = require('firmata');

const pathToSerialPort = '/dev/cu.usbmodem1421';
const board = new Board(pathToSerialPort, (error) => {
  if (error) {
    console.error(`there was an error opening ${pathToSerialPort}:`, error.message);
    return;
  }
  console.log(`board on serial port ${pathToSerialPort} is ready`);
});

const wss = new WebSocket.Server({ port: 8765 });

wss.on('connection', (client) => {
  console.log('wss.connection');

  client.on('message', (message) => {
    console.log('received: %s', message);
  });

  client.on('close', (code, message) => {
    console.log('client.close', code, message); // https://tools.ietf.org/html/rfc6455#section-7.4.1
  });

  client.send('something');
});

wss.on('error', (err) => {
  console.error('wss.error', err);
});

wss.on('headers', (headers) => {
  console.log('wss.headers');
});

wss.on('listening', () => {
  console.log('wss.listening');
});

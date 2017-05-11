const WebSocket = require('ws');
const Board = require('firmata');

const wss = new WebSocket.Server({ port: 8765 });
let ws; // client

const pathToSerialPort = '/dev/cu.usbmodem1421';

wss.on('connection', (client) => {
  console.log('wss.connection');
  ws = client;
  ws.on('close', (code, message) => {
    console.log('client.close', code, message); // https://tools.ietf.org/html/rfc6455#section-7.4.1
  });
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

const board = new Board(pathToSerialPort, (error) => {
  if (error) {
    console.error(`there was an error opening ${pathToSerialPort}:`, error.message);
    return;
  }
  console.log(`board on serial port ${pathToSerialPort} is ready`);
  board.pinMode(2, board.MODES.INPUT);
  board.digitalRead(2, (value) => {
    console.log(`the value of digital pin 2 changed to: ${value}`);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(value);
    }
  });
});

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', ()=>{
    console.log('Successfully connected to server')
  });

  conn.on('connect', () => {
    conn.write('Name: JDP');
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 100);
    // setTimeout(() => {
    //   conn.write('Move: right');
    // }, 200);
    // setTimeout(() => {
    //   conn.write('Move: right');
    // }, 300);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 400);
  });

  return conn;
}

module.exports = connect;
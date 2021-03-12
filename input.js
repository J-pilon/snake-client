let connection;

const handleUserInput = function(key) {
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'y') {
    connection.write('Say: yolo');
  }
  if (key === 'f') {
    connection.write('Say: funny');
  }
  if (key === '\u0003') {
    process.exit();
  }
};
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = { setupInput };
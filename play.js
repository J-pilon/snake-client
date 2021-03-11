const { connect } = require('./client');
console.log('connecting...');
connect();
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

 const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}
setupInput();



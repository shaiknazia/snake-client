const net = require('net');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => { //add this here under rawmode and utf8 as a callback to enable ctrl c for exit.
    handleUserInput(key)
  });
  return stdin;
}

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
}

module.exports = setupInput;
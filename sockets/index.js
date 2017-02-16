const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
  io: new Raspi()
});

function initialize(io) {

board.on('ready', () => {
  console.log('forward plz');
  var motors = new five.Motors([{
    pins: {
     pwm: 'P1-35',
     dir: 'P1-36',
     cdir: 'P1-37'
    }
   }, {
     pins: {
       pwm: 'P1-32',
       dir: 'P1-40',
       cdir: 'P1-38'
    }
   }]);

   board.repl.inject({
     motors: motors
   });

  io.on('connection', function(socket) {
    // motors.stop()

    socket.on('forward', () => {
      motors.forward(255);

    });

    socket.on('stop', function(socket) {
      motors.stop();
   });

    socket.on('reverse', () => {
      motors.reverse(255);
   });

    socket.on('right', () => {
      motors[0].forward(255);
   });

     socket.on('left', () => {
      motors[1].forward(255);
   });

  });
});
};


module.exports = {
  initialize
};

(function() {
    'use strict';

    angular
        .module('app')
        .controller('DriveViewController', DriveViewController);


    function DriveViewController() {
        const vm = this;
        vm.$onInit = function() {
          var socket = io.connect('10.6.67.156:3000');
	        console.log('connected');

          vm.forward = function() {
	        console.log('within function');
            socket.emit('forward');
          }

         vm.stop = function() {
           socket.emit('stop');
         }

         vm.reverse = function() {
           socket.emit('reverse');
         }

         vm.right = function() {
           socket.emit('right');
         }

         vm.left = function() {
           socket.emit('left');
         }

            // console.log('drive me ooooh')
            //
            // var container = document.getElementById('view-canvas');
            // var canvas = document.createElement("canvas");
            // container.appendChild(canvas);
            //
            // // Create h264 player
            // var uri = "ws://" + document.location.host;
            // var wsavc = new WSAvcPlayer(canvas, "webgl", 1, 35);
            // wsavc.connect(uri);
            //
            // //expose instance for button callbacks
            // window.wsavc = wsavc;
        }

    }

})();

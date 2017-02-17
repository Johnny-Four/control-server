# Johnny-Four Bot Control Server

This server is used to create a web socket connection for the Johnny-Four Bot motor control. 
The bot uses a [separate server](https://github.com/Johnny-Four/johnny-ssr) to create another socket connection for video streaming. 

## How It Works

A basice Node.js [Express](https://www.npmjs.com/package/express) server is created with a [socket.io](https://www.npmjs.com/package/socket.io) connection to keep open a constant stream of data/commands between user and bot. Arrow keys pressed by the user send commands through the socket to the robot to control movement.  

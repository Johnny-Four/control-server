# Johnny-Four Bot Control Server

This server is used to create a web socket connection for the Johnny-Four Bot motor control. 
The bot uses a [separate server](https://github.com/Johnny-Four/johnny-ssr) to create another socket connection for video streaming. 

## How It Works

A Node.js [Express](https://www.npmjs.com/package/express) server is created with a [socket.io](https://www.npmjs.com/package/socket.io) connection to keep open a constant stream of data/commands between user and bot. Arrow keys pressed by the user send commands through the socket to the robot to control movement.  


## Note

To make the Johnny Four robot drive and live stream, you need to SSH into our existing Pi and run both this server and the control server linked above. A setup tutorial is coming soon for you do be able to build your own bot with your own pi!

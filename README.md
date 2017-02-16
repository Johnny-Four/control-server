# Express socket.io starter

A simple starter for creating an express app that uses socket.io

This project comes with a basic .eslintrc for writing ES2015 style code.

Install [linter-eslint for atom here](https://atom.io/packages/linter-eslint).

# Getting Started

```sh
git clone https://github.com/gSchool/express-socket.io-starter.git
cd express-socket.io-starter
npm install
npm run dev # starts nodemon and eslint-watch
```

# Setup

* Add your socket code to `sockets/index.js`
  * The initialize function is called with an instance of `io` after the application has started.

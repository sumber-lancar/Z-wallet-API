require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const app = express();
const port = 8000
const mainRouter = require('./src/routes/index')
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
const socketio = require("socket.io")
const io = socketio(server).sockets
 

io.on("connection", (socket) => {
  const id = socket.handshake.query.user_id;
  console.log("a user connected ...",id, socket.id);
  socket.join(id);
  // socket.on("chat message", (msg, id_recipient) => {
  //   console.log(`=====================`)
  //   console.log('sender'+msg.sender);
  //   console.log('penerima '+id_recipient);
  //   console.log('id handshake'+id)
  //   console.log(msg)
  //   io.to(id_recipient).to(id).emit("chat message", msg);
  // });
  socket.on('transfer', (amount,sender,recipient) =>{
    console.log('sender = '+sender)
    console.log('recipient = '+recipient)
    console.log('amount = '+amount)
    socket.to(sender).emit("tranfer", `Transaksi berhasil, saldo anda berkurang ${amount}`)
    socket.to(recipient).emit("tranfer", `${sender} mengirim dana sebesar ${amount}`)
  });
});

server.listen(port, () => console.log("server running on port:" + port));

//memperbolehkan akses dari semua origin
app.use(express.static('public'))

//use cors
app.use(cors())

// tambah logger
app.use(logger("dev"))

// body-parser untuk x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))

// parser untuk raw json
app.use(express.json())

app.use('/', mainRouter)

module.exports = app
const express=require('express');
const { Server } = require("socket.io");
const http=require('http');
const path=require('path')
const app=express();
const server =http.createServer(app)
const io = new Server(server);
app.use(express.static(path.join(process.cwd(),'public')))
// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit("chat message", msg)
  });
});
server.listen(4000,()=>{
    console.log("server running at 4000")
})
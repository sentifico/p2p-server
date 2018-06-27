express=require('express')
path=require('path')
app=express()
http=require('http').createServer(app)
io=require('socket.io')(http)

app.use(express.static(path.join(__dirname,'public')))

io.on('connection',function(socket){
  socket.on("msg",(e)=>{
    io.sockets.emit("msg",{data:e.data})
  })
})

http.listen(process.env.PORT||3000, function() {
   console.log('listening on localhost:3000')
})

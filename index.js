require("socket.io").listen(process.env.PORT||3000).on("connection",(socket)=>{
  console.log("Peer connected.")
  socket.on("msg",(e)=>{
    memory=e.data
  })
  setInterval(()=>{
    socket.emit("msg",{data:memory})
  },1)
})

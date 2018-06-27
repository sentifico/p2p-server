m={}
require("socket.io").listen(3000).on("connection",(socket)=>{
  console.log("Peer connected.")
  socket.on("msg",(e)=>{
    m[Math.random()]=e.data
  })
  setInterval(()=>{
    for(i in m){
      socket.emit("msg",{data:m[i]})
    }
  },1)
})

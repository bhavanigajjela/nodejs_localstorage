

const express=require("express")
const fs=require("fs")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
  fs.readFile("./index.json",(err,data)=>{
    res.send(data)
  })
})
app.post("/",(req,res)=>{
 fs.readFile("./index.json",(err,data)=>{

    const ar=JSON.parse(data)
    ar.push(req.body)
    console.log(ar)
    
    fs.writeFile("./index.json",JSON.stringify(ar),(err)=>{
        res.send("hello")
    })
  })    
})

app.listen(3053,()=>{
    console.log("running")
})
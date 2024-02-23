
let express=require("express");
let local=require("node-localstorage").LocalStorage;
let storage=new local("./storage");
let fs=require("fs");
let app=express();

app.use(express.json());
var array=[]

app.post("/",(req,res)=>{
    fs.readFile("datafile",(err,data)=>{
        storage.setItem("data",JSON.stringify(req.body));
        array.push(JSON.parse(req.body));
        console.log("posting");
    })
    })
app.get("/",(req,res)=>{
    fs.readFile("datafile",(err,data)=>{
        storage.getItem("array")
        res.send(array);
    })
})

app.listen(1200,()=>{
    console.log("server!!");
})
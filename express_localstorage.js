//storing data into localstorage using node.js

let express=require("express");
let local=require("node-localstorage").LocalStorage;
let storage=new local("./data");
let fs=require("fs");
let app=express();

app.use(express.json());
var array=[];
app.post("/",(req,res)=>{
       array.push(req.body);
       storage.setItem("data",JSON.stringify(array));
       const str=storage.getItem("data");
       res.send(str);
})
app.get("/",(req,res)=>{
    const st=storage.getItem("data");
    res.send(st);
})
app.listen(1922,()=>{
    console.log("local storage data getting");
})
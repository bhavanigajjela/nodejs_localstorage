let express=require("express");
let local=require("node-localstorage").LocalStorage;
let str=new local("data");
let app=express();

app.use(express.json());

app.get("/users",(req,res)=>{
    let str1=str.getItem("data");
    res.send(str1);
    console.log(str1);
})
app.listen(190,()=>{
    console.log("server 190");
})
let express=require("express");
let store=express();
store.use(express.json());
let localstorage=require("node-localstorage").LocalStorage;
let storage=new localstorage("./registerdata");

let arr=[];
store.post("/register",(req,res)=>{
    arr.push(req.body);
    storage.setItem("store",JSON.stringify(arr));
    res.send(`${req.body.FirstName} registered successfully!!`);

})

store.get("/",(req,res)=>{
    let com=storage.getItem("store");
    res.send(com);
})
store.listen(195,()=>{
    console.log("195 server!!");
})
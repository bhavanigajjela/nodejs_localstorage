let express=require("express");
let app=express();
app.use(express.json());

let locale=require("node-localstorage").LocalStorage;
let storage=new locale("data");

app.post("/login",(req,res)=>{
    let getting=JSON.parse(storage.getItem("data"));
    console.log(getting);
    getting.filter((val)=>{
        if(val["FirstName"]==req.body.FirstName && val["LastName"]==req.body.LastName){
            res.send("user existed")
        }
        else{
            res.send("user not existed!!")
        }
    })
})
app.listen(196,()=>{
    console.log("196 server!!");
})